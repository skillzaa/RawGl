import GlUtil from "./glUtil.js";
import IGPUComp from "./IGPUComp.js";  
import perc2glCoord from "../addObj/perc2glCoord.js";
/**
 * Base class for all GPU Components. 
 * Base Class works on 5-15 format - this format is baked in.
 * It has a_pos and a_clr attributes but NO uniforms.
 * It accepts webgl coordinated from -1 to 1. If the child classes use 1-100 % they have to provide its implementation (probably in vertex-shader)
 */
////////////////////////////////////////////////
const vertexShaderSrc = `
attribute highp vec2 a_pos;

attribute float a_pointWidth;
attribute highp vec3 a_clr;
varying highp vec3 v_clr;

void main(void) {
v_clr = a_clr;
//-------------------------------------------------------
    gl_PointSize = a_pointWidth;
    gl_Position = vec4(a_pos.x, a_pos.y,1.0,1.0 );
}
`;
//------------------------------------------- 
const fragShaderSrc = `
varying highp vec3 v_clr;

void main(void) {
  gl_FragColor = vec4 (v_clr , 1.0);
}
` ;
//////////////////////////////////////////
export default class CorePoint implements IGPUComp{
protected vertices  :number[];
protected buffer :WebGLBuffer | null;
protected program :WebGLProgram | null;
//---------------------------------
constructor(vertices  :number[]=[]){
this.program = null;
this.buffer = null;
this.vertices = vertices; 
}
////////////////////////////////////////////////
setData(vertices  :number[]){
  this.vertices = vertices; 
}

//--------------------new - init
public update (gl :WebGL2RenderingContext){

const vertexShader = GlUtil.createShader(gl,vertexShaderSrc,gl.VERTEX_SHADER);
const fragmentShader = GlUtil.createShader(gl, fragShaderSrc,gl.FRAGMENT_SHADER);

this.program = GlUtil.getProgram(gl,vertexShader,fragmentShader);
this.buffer = GlUtil.getBuffer(gl);
GlUtil.bindBuffer(gl,this.buffer, this.vertices);//-move to draw then update
GlUtil.linkNuseProgram(gl, this.program);
//------------bind attri and uniforms
GlUtil.setAttribute(gl, "a_pos",this.program, 2 , 4 * 6,0);
GlUtil.setAttribute(gl, "a_pointWidth",this.program, 1 , 4 * 6, 2 * 4);
GlUtil.setAttribute(gl, "a_clr",this.program, 3 , 4 * 6, 3 * 4);
//--------------------------------
}
// const vertices = [
  //   //x      y           width       red , green , blue    
  //    25,     50,         25,          1.0, 0.0,     0.0,
  //    50,     50,         50,          1.0, 0.0,     0.0,
  //    75,     50,         75,          1.0, 0.0,     0.0,
  //   ];
  
addPoint(x :number,y :number,width :number=10,r :number=0,g :number=0,b :number=0){
  this.vertices.push(perc2glCoord(x));           //x  
  this.vertices.push(perc2glCoord(y));           //y  
  this.vertices.push(width);                    //width  
  this.vertices.push(r);                        //r  
  this.vertices.push(g);                        //g 
  this.vertices.push(b);                        //b  

}  
///////////////////
public draw(gl :WebGL2RenderingContext){
//we need to bind twice
if (this.buffer == null){throw new Error("buffer is null the comp may not be initialized");
}
/////-->>>>>>>>>>>> draw <<<<<<<<<<<<<<-----
GlUtil.bindBuffer(gl,this.buffer,this.vertices);  
gl.drawArrays(gl.POINTS , 0, (this.vertices.length / 6) ); 
}


////////////////////////////////////
}