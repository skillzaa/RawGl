import GlUtil from "../core/glUtil.js";
import VAO from "./vao.js";
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
export default class CoreTriContainer {
    constructor(gl, x = 0, y = 0.0, width = 100, height = 100) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.program = null;
        this.buffer = null;
        this.u_xLoc = null;
        this.u_yLoc = null;
        this.u_widthLoc = null;
        this.u_heightLoc = null;
        this.bgVertices = new VAO();
        this.vertices = new VAO();
        this.init(gl);
        this.update(gl);
    }
    init(gl) {
        const vertexShader = GlUtil.createShader(gl, vertexShaderSrc, gl.VERTEX_SHADER);
        const fragmentShader = GlUtil.createShader(gl, fragShaderSrc, gl.FRAGMENT_SHADER);
        this.program = GlUtil.getProgram(gl, vertexShader, fragmentShader);
        this.buffer = GlUtil.getBuffer(gl);
        GlUtil.bindBuffer(gl, this.buffer, this.vertices.getVertices());
        GlUtil.linkNuseProgram(gl, this.program);
        GlUtil.setAttribute(gl, "a_pos", 2, 4 * 5, 0);
        GlUtil.setAttribute(gl, "a_clr", 3, 4 * 5, 2 * 4);
        this.u_xLoc = GlUtil.getUniformLocation(gl, this.program, "u_x");
        this.u_yLoc = GlUtil.getUniformLocation(gl, this.program, "u_y");
        this.u_widthLoc = GlUtil.getUniformLocation(gl, this.program, "u_width");
        this.u_heightLoc = GlUtil.getUniformLocation(gl, this.program, "u_height");
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
    draw(gl) {
        if (this.buffer == null) {
            throw new Error("buffer is null the comp may not be initialized");
        }
        GlUtil.bindBuffer(gl, this.buffer, this.bgVertices.getVertices());
        gl.drawArrays(gl.TRIANGLES, 0, (this.bgVertices.getVertices().length));
        GlUtil.bindBuffer(gl, this.buffer, this.vertices.getVertices());
        gl.drawArrays(gl.TRIANGLES, 0, (this.vertices.getVertices().length));
    }
    setVertices(ver) {
        this.vertices = ver;
    }
    setBgVertices(verBg) {
        this.bgVertices = verBg;
    }
}
