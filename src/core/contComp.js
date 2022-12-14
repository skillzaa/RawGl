import GlUtil from "./glUtil.js";
import BaseTriComp from "./baseComp.js";
const vertexShaderSrc = `
attribute highp vec2 a_pos;

attribute highp vec3 a_clr;
varying highp vec3 v_clr;


uniform float u_width;
uniform float u_height;
uniform float u_x;
uniform float u_y;

void main(void) {
v_clr = a_clr;
//-------------------------------------------------------
    gl_PointSize = 1.0;
    gl_Position = vec4( 
                        ( (u_x + ( u_width * a_pos.x)) - 1.0 ),
                        ( (u_y + (u_height * a_pos.y)) - 1.0 ),
                        1.0,
                        1.0 );
}
`;
const fragShaderSrc = `
varying highp vec3 v_clr;

void main(void) {
  gl_FragColor = vec4 (v_clr , 1.0);
}
`;
export default class TriContComp extends BaseTriComp {
    constructor(x = 25, y = 25, width = 50, height = 50) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.u_xLoc = null;
        this.u_yLoc = null;
        this.u_widthLoc = null;
        this.u_heightLoc = null;
    }
    init(gl) {
        const vertexShader = GlUtil.createShader(gl, vertexShaderSrc, gl.VERTEX_SHADER);
        const fragmentShader = GlUtil.createShader(gl, fragShaderSrc, gl.FRAGMENT_SHADER);
        this.program = GlUtil.getProgram(gl, vertexShader, fragmentShader);
        this.buffer = GlUtil.getBuffer(gl);
        GlUtil.bindBuffer(gl, this.buffer, this.vertices);
        GlUtil.linkNuseProgram(gl, this.program);
        GlUtil.setAttribute(gl, "a_pos", this.program, 2, 4 * 5, 0);
        GlUtil.setAttribute(gl, "a_clr", this.program, 3, 4 * 5, 2 * 4);
        this.u_xLoc = GlUtil.getUniformLocation(gl, this.program, "u_x");
        this.u_yLoc = GlUtil.getUniformLocation(gl, this.program, "u_y");
        this.u_widthLoc = GlUtil.getUniformLocation(gl, this.program, "u_width");
        this.u_heightLoc = GlUtil.getUniformLocation(gl, this.program, "u_height");
        this.update(gl);
    }
    update(gl) {
        const twoDivBy100 = 2 / 100;
        gl.uniform1f(this.u_xLoc, (twoDivBy100 * this.x));
        gl.uniform1f(this.u_yLoc, (twoDivBy100 * this.y));
        const wdForShader = twoDivBy100 * this.width;
        gl.uniform1f(this.u_widthLoc, (wdForShader / 100));
        const htForShader = twoDivBy100 * this.height;
        gl.uniform1f(this.u_heightLoc, (htForShader / 100));
        if (this.buffer == null) {
            throw new Error("buffer is null the comp may not be initialized");
        }
    }
}
