import GlUtil from "../core/glUtil.js";
const input = [
    -1.0, -1.0,
    1.0, -1.0,
    1.0, 1.0,
    1.0, 1.0,
    -1.0, 1.0,
    -1.0, -1.0,
];
const vertexShaderSrc = `#version 300 es
precision mediump float;
in vec2 a_pos;

void main () {
    gl_Position = vec4( a_pos.x, a_pos.y, 0.0, 1.0); // x,y,z,w
}
`;
const fragShaderSrc = `#version 300 es
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;

out vec4 outColor;

void main()
{
    vec2 uv = gl_FragCoord.xy/u_resolution;
    // outColor = vec4(0.5 + 0.5*cos(u_time+uv.yxy),1.0);
    outColor = vec4( 0.0   , 0.0,   1.0,     1.0);
}
`;
export default class CoreFragComp {
    constructor(vertices = input) {
        this.program = null;
        this.buffer = null;
        this.vertices = vertices;
    }
    setData(vertices) {
        this.vertices = vertices;
    }
    update(gl) {
        const vertexShader = GlUtil.createShader(gl, vertexShaderSrc, gl.VERTEX_SHADER);
        const fragmentShader = GlUtil.createShader(gl, fragShaderSrc, gl.FRAGMENT_SHADER);
        this.program = GlUtil.getProgram(gl, vertexShader, fragmentShader);
        this.buffer = GlUtil.getBuffer(gl);
        GlUtil.bindBuffer(gl, this.buffer, this.vertices);
        GlUtil.linkNuseProgram(gl, this.program);
        GlUtil.setAttribute(gl, "a_pos", this.program, 2, 2 * 4, 0);
    }
    draw(gl) {
        if (this.buffer == null) {
            throw new Error("buffer is null the comp may not be initialized");
        }
        GlUtil.bindBuffer(gl, this.buffer, this.vertices);
        gl.drawArrays(gl.TRIANGLES, 0, (this.vertices.length));
    }
}
