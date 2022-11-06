import GlUtil from "./glUtil.js";
import IGPUComp from "./IGPUComp.js";  
import BaseTriComp from "./baseTriComp.js";
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
//------------------------------------------- 
const fragShaderSrc = `
varying highp vec3 v_clr;

void main(void) {
  gl_FragColor = vec4 (v_clr , 1.0);
}
` ;
//////////////////////////////////////////
export default class TriContComp extends BaseTriComp{
  private u_xLoc : WebGLUniformLocation | null;
private u_yLoc : WebGLUniformLocation | null;
private u_widthLoc : WebGLUniformLocation | null;
private u_heightLoc : WebGLUniformLocation | null; 
public x  :number;
public y  :number;
public width :number;
public height :number;
//---------------------------------
constructor(x:number= 25,y:number= 25,width:number= 50,height:number= 50){
super();  
//--------------------------------------------------  
this.x = x;
this.y=y;
this.width = width;
this.height = height;
//----------------------------
this.u_xLoc = null;
this.u_yLoc = null;
this.u_widthLoc = null;
this.u_heightLoc = null;
////////////////////////////////
}
/////////////////////////////////////////
public addTri(x1 :number,y1:number,x2:number,y2:number,x3:number,y3:number,r:number=1,g:number=0,b:number=0){
///Following is placed for testing to cut off RGB    
// r=1;g=0;b=0;    
///////////////---------vertex 1
this.vertices.push((x1));
this.vertices.push((y1));  
this.vertices.push((r));  
this.vertices.push((g));  
this.vertices.push((b));  
///////////////---------vertex 2
this.vertices.push((x2));
this.vertices.push((y2));  
this.vertices.push((r));  
this.vertices.push((g));  
this.vertices.push((b));
///////////////---------vertex 3
this.vertices.push((x3));
this.vertices.push((y3));  
this.vertices.push((r));  
this.vertices.push((g));  
this.vertices.push((b));  
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
//--------------------------------
this.u_xLoc = GlUtil.getUniformLocation(gl,this.program, "u_x");
this.u_yLoc = GlUtil.getUniformLocation(gl,this.program, "u_y");
this.u_widthLoc = GlUtil.getUniformLocation(gl,this.program, "u_width");
this.u_heightLoc = GlUtil.getUniformLocation(gl,this.program, "u_height");
//------------>>>check following line
this.update(gl); // so the new item just need init and not init n update
}

///////////////////////////////////////////////////////
public update(gl: WebGL2RenderingContext){
const twoDivBy100 = 2/100;

gl.uniform1f(this.u_xLoc, (twoDivBy100 * this.x));
gl.uniform1f(this.u_yLoc,(twoDivBy100 * this.y));
// this.x += 0.001;
// this.y += 0.001;
const wdForShader = twoDivBy100 * this.width;
gl.uniform1f(this.u_widthLoc, (wdForShader /100) );
const htForShader = twoDivBy100 * this.height;
gl.uniform1f(this.u_heightLoc, (htForShader/100) );

if (this.buffer==null){throw new Error("buffer is null the comp may not be initialized");}    
}

///////////////////


////////////////////////////////////
}