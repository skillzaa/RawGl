const canvas = document.querySelector("#bilza");
const gl = canvas.getContext("webgl");
if (gl === null) {
    alert("Unable to initialize WebGL. Your browser or machine may not support it.");
}
gl.clearColor(0.0, 0.0, 0.8, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);
////////////////////////////////////////////////////
var vertexPosBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer);

var vertices = [];
var vertices = [-0.5, -0.5, 0.5, -0.5, 0, 0.5];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

////////////////////////////////////////////////////////////////
var vertexShader = 'attribute vec2 pos;' +
	'void main() { gl_Position = vec4(pos, 0, 1); }';

var fragmentShader = 'precision mediump float;' +
	'void main() { gl_FragColor = vec4(0,0.8,0,1); }';

var program = createProgram(vertexShader,fragmentShader);

gl.useProgram(program);
//////////////////////////////////////////////
program.vertexPosAttrib = gl.getAttribLocation(program, 'pos');

gl.enableVertexAttribArray(program.vertexPosAttrib);

gl.vertexAttribPointer(program.vertexPosAttrib, 2, gl.FLOAT, false, 0, 0);
//--WAITING FOR THE UNKNOWN
gl.drawArrays(gl.TRIANGLES, 0, 3);    
////////////////////////////////////////////////////
function createProgram(vstr, fstr) {
   var program = gl.createProgram();
   var vshader = createShader(vstr, gl.VERTEX_SHADER);
   var fshader = createShader(fstr, gl.FRAGMENT_SHADER);
   gl.attachShader(program, vshader);
   gl.attachShader(program, fshader);
   gl.linkProgram(program);
   return program;
}

function createShader(str, type) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, str);
    gl.compileShader(shader);
    return shader;
}
