import GlUtil from "./glUtil.js";
import IGPUComp from "./IGPUComp.js";  
/**
 * Base class for all GPU Components. 
 * Base Class works on 5-15 format - this format is baked in.
 * It has a_pos and a_clr attributes but NO uniforms.
 * It accepts webgl coordinated from -1 to 1. If the child classes use 1-100 % they have to provide its implementation (probably in vertex-shader)
 */
////////////////////////////////////////////////
const vertexShaderSrc = `
attribute highp vec2 a_pos;

attribute highp vec3 a_clr;
varying highp vec3 v_clr;

void main(void) {
v_clr = a_clr;
//-------------------------------------------------------
    gl_PointSize = 1.0;
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
export default class BaseTriComp implements IGPUComp{
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
public init (gl :WebGL2RenderingContext){

const vertexShader = GlUtil.createShader(gl,vertexShaderSrc,gl.VERTEX_SHADER);
const fragmentShader = GlUtil.createShader(gl, fragShaderSrc,gl.FRAGMENT_SHADER);

this.program = GlUtil.getProgram(gl,vertexShader,fragmentShader);
this.buffer = GlUtil.getBuffer(gl);
GlUtil.bindBuffer(gl,this.buffer, this.vertices);//-move to draw then update
GlUtil.linkNuseProgram(gl, this.program);
//------------bind attri and uniforms
GlUtil.setAttribute(gl, "a_pos",this.program, 2 , 4 * 5,0);
GlUtil.setAttribute(gl, "a_clr",this.program, 3 , 4 * 5, 2 * 4);
//--------------------------------
}
////--no uniforms thus update is emty
public update(gl :WebGL2RenderingContext):void{}

///////////////////
public draw(gl :WebGL2RenderingContext){
//we need to bind twice
if (this.buffer == null){throw new Error("buffer is null the comp may not be initialized");
}
/////-->>>>>>>>>>>> draw <<<<<<<<<<<<<<-----
GlUtil.bindBuffer(gl,this.buffer,this.vertices);  
gl.drawArrays(gl.TRIANGLES , 0, (this.vertices.length) ); 
}


////////////////////////////////////
}