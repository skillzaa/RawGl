// function main() {
    const canvas = document.querySelector("#bilza");
    // Initialize the GL context
    const gl = canvas.getContext("webgl");

    // Only continue if WebGL is available and working
    if (gl === null) {
      alert("Unable to initialize WebGL. Your browser or machine may not support it.");
    //   return;
    }
  
    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.8, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
//   }
  
//   window.onload = main;
////////////////////////////////////////////////////
var vertexPosBuffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer);

var vertices = [];

var vertices = [-0.5, -0.5, 0.5, -0.5, 0, 0.5];

gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

var vs = 'attribute vec2 pos;' +
	'void main() { gl_Position = vec4(pos, 0, 1); }';
var fs = 'precision mediump float;' +
	'void main() { gl_FragColor = vec4(0,0.8,0,1); }';

var program = createProgram(vs,fs);
gl.useProgram(program);
program.vertexPosAttrib = gl.getAttribLocation(program, 'pos');
gl.enableVertexAttribArray(program.vertexPosAttrib);
gl.vertexAttribPointer(program.vertexPosAttrib, 2, gl.FLOAT, false, 0, 0);
//--WAITING FOR THE UNKNOWN
gl.drawArrays(gl.TRIANGLES, 0, 3);    
////////////////////////////////////////////////////
  function createShader(str, type) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, str);
    gl.compileShader(shader);
    return shader;
  }

  function createProgram(vstr, fstr) {
   var program = gl.createProgram();
   var vshader = createShader(vstr, gl.VERTEX_SHADER);
   var fshader = createShader(fstr, gl.FRAGMENT_SHADER);
   gl.attachShader(program, vshader);
   gl.attachShader(program, fshader);
   gl.linkProgram(program);
   return program;
 }