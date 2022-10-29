// import perc2glCoord from "../functions/perc2glCoord.js";
// import Engine from "../rawGl/rawGl.js";

// const engine = new Engine("bilza");
// const gl = engine.getGl();
// const vertices = [
//       // left column
//       perc2glCoord(0), perc2glCoord(0),
//       perc2glCoord(20), perc2glCoord(0),
//       perc2glCoord(20), perc2glCoord(20),
      
// ];

// const vertexShaderSrc = 
// `attribute highp vec2 a_position;
// uniform vec2 u_resolution;
// uniform vec2 u_translation;
// uniform vec2 u_rotation;
// // ======================
// void main() {
//   // Rotate the position
//   vec2 rotatedPosition = vec2(
//      a_position.x * u_rotation.y + a_position.y * u_rotation.x,
//      a_position.y * u_rotation.y - a_position.x * u_rotation.x);

//   // Add in the translation
//   vec2 position = rotatedPosition + u_translation;

//   // convert the position from pixels to 0.0 to 1.0
// //   vec2 zeroToOne = position / u_resolution;

//   // convert from 0->1 to 0->2
// //   vec2 zeroToTwo = zeroToOne * 2.0;

//   // convert from 0->2 to -1->+1 (clipspace)
// //   vec2 clipSpace = zeroToTwo - 1.0;

//   gl_Position = vec4(position , 0, 1);
// }
// `; 
// const fragShaderSrc = 
// `
// precision highp float;
// void main(void) {
// gl_FragColor = vec4 (1, 0, 0, 1.0);
//   }` ;

// const vertexShader = engine.createShader(vertexShaderSrc,gl.VERTEX_SHADER);
// const fragmentShader = engine.createShader(fragShaderSrc,gl.FRAGMENT_SHADER);

// const program = engine.createProgram(vertexShader,fragmentShader);

// const VOB = engine.getBuffer();

// engine.bindBuffer(VOB,vertices);

// engine.linkNuseProgram(program);

// let angleValue = 0;
// function draw(){
//     const translation = [150,100];
//     const rotation = [0.8,0.5];
//     // const color = [Math.random(),Math.random(),Math.random(),1];

// const positionLoc = gl.getAttribLocation(program,'a_position');
  

// const resolutionLoc = gl.getUniformLocation(program,'u_resolution');
// const translationLoc = gl.getUniformLocation(program,'u_translation');
// const rotationLoc = gl.getUniformLocation(program,'u_rotation');

// gl.uniform2f(resolutionLoc,gl.canvas.width,gl.canvas.height);
// gl.uniform2fv(translationLoc,translation);
// gl.uniform2fv(rotationLoc,rotation);
// /////////////////////////////////////////////

// gl.vertexAttribPointer(positionLoc,2,gl.FLOAT,false,0,0);

// /////////////////////---draw-----------------
// engine.clear(0.1,0.1,0.2);
// gl.drawArrays(gl.TRIANGLES , 0, vertices.length); 
// // requestAnimationFrame(draw);
// }

// draw();