import GlUtil from "../core/glUtil.js";
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
    constructor(x = 0, y = 0.0, width = 100, height = 100, r = 1, g = 0, b = 0) {
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
        this.vertices = [];
        this.addTriangle(0, 0, 100, 0, 100, 100, 1, 0, 0);
        this.addTriangle(100, 100, 0, 100, 0, 0, 0, 1, 0);
        this.addTriangle(4, 40, 40, 10, 50, 90, 0, 0, 0);
        this.addTriangle(20, 20, 80, 20, 60, 80, 0, 0, 1);
        this.r = r;
        this.g = g;
        this.b = b;
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
    init(gl) {
        const vertexShader = GlUtil.createShader(gl, vertexShaderSrc, gl.VERTEX_SHADER);
        const fragmentShader = GlUtil.createShader(gl, fragShaderSrc, gl.FRAGMENT_SHADER);
        const program = GlUtil.getProgram(gl, vertexShader, fragmentShader);
        this.buffer = GlUtil.getBuffer(gl);
        GlUtil.bindBuffer(gl, this.buffer, this.vertices);
        GlUtil.linkNuseProgram(gl, program);
        this.program = program;
        this.setAttribute(gl, "a_pos", 2, 4 * 5, 0);
        this.setAttribute(gl, "a_clr", 3, 4 * 5, 2 * 4);
        this.u_xLoc = this.getUniformLocation(gl, "u_x");
        this.u_yLoc = this.getUniformLocation(gl, "u_y");
        this.u_widthLoc = this.getUniformLocation(gl, "u_width");
        this.u_heightLoc = this.getUniformLocation(gl, "u_height");
    }
    addTriangle(x1, y1, x2, y2, x3, y3, r = 0, g = 0, b = 0) {
        this.vertices.push((x1));
        this.vertices.push((y1));
        this.vertices.push((r));
        this.vertices.push((g));
        this.vertices.push((b));
        this.vertices.push((x2));
        this.vertices.push((y2));
        this.vertices.push((r));
        this.vertices.push((g));
        this.vertices.push((b));
        this.vertices.push((x3));
        this.vertices.push((y3));
        this.vertices.push((r));
        this.vertices.push((g));
        this.vertices.push((b));
    }
    getProgram() {
        if (this.program == null) {
            throw new Error("program is null, the comp may not be initialized");
        }
        return this.program;
    }
    draw(gl) {
        if (this.buffer == null) {
            throw new Error("buffer is null the comp may not be initialized");
        }
        GlUtil.bindBuffer(gl, this.buffer, this.vertices);
        gl.drawArrays(gl.TRIANGLES, 0, (this.vertices.length));
    }
    setAttribute(gl, nameStr, numberOfComps, stride, offset = 0) {
        GlUtil.setAttribute(gl, nameStr, this.getProgram(), numberOfComps, stride, offset);
    }
    getUniformLocation(gl, uniformName) {
        return GlUtil.getUniformLocation(gl, this.getProgram(), uniformName);
    }
}
