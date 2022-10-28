import GlUtil from "../engine/glUtil.js";
const gl = GlUtil.getGl("bilza");
console.log(gl);
const vertices = [
    -1, -1, 1, 0, 0,
    1, -1, 0, 1, 0,
    0, 1, 0, 0, 1,
];
const vertexShaderSrc = `
attribute highp vec2 a_pos;
attribute highp vec3 a_clr;
varying highp vec3 vColor;

void main(void) {
    gl_Position = vec4( 
                        a_pos.x,
                        a_pos.y,
                        1.0,
                        1.0 );
    vColor = a_clr;
}
`;
const fragShaderSrc = `
varying highp vec3 vColor;
void main(void) {
  gl_FragColor = vec4 (vColor , 1.0);
}
`;
const vertexShader = GlUtil.createShader(gl, vertexShaderSrc, gl.VERTEX_SHADER);
const fragmentShader = GlUtil.createShader(gl, fragShaderSrc, gl.FRAGMENT_SHADER);
const programe = GlUtil.getProgram(gl, vertexShader, fragmentShader);
const VOB = GlUtil.getBuffer(gl);
GlUtil.bindBuffer(gl, VOB, vertices);
GlUtil.linkNuseProgram(gl, programe);
const vertexPosAttrib = gl.getAttribLocation(programe, 'a_pos');
const vertexColorAttrib = gl.getAttribLocation(programe, 'a_clr');
gl.enableVertexAttribArray(vertexPosAttrib);
gl.enableVertexAttribArray(vertexColorAttrib);
gl.vertexAttribPointer(vertexPosAttrib, 2, gl.FLOAT, false, 5 * 4, 0);
gl.vertexAttribPointer(vertexColorAttrib, 3, gl.FLOAT, false, 5 * 4, 2 * 4);
GlUtil.clear(gl, 0, 0, 1);
gl.drawArrays(gl.TRIANGLES, 0, 3);
