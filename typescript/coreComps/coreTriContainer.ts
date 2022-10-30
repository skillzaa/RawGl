import GlUtil from "../core/glUtil.js";
import AVO from "./avo.js";
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
export default class CoreTriContainer{
private vertices  :AVO;
private bgVertices  :AVO;
private buffer :WebGLBuffer | null;
// ------------------------------------;
private u_xLoc : WebGLUniformLocation | null;
private u_yLoc : WebGLUniformLocation | null;
private u_widthLoc : WebGLUniformLocation | null;
private u_heightLoc : WebGLUniformLocation | null;
public x :number;
public y :number;
public width :number;
public height :number;
private program :WebGLProgram | null;
public r :number;public g :number;public b :number;
//---------------------------------
constructor(x:number= 0,y:number= 0.0,width:number= 100,height:number= 100,r :number=1,g :number=0,b :number=0){
this.x = x;
this.y=y;
this.width = width;
this.height = height;
this.program = null;
this.buffer = null;
//----------------------------
this.u_xLoc = null;
this.u_yLoc = null;
this.u_widthLoc = null;
this.u_heightLoc = null;
////////////////////////////////
this.bgVertices = new AVO(); 
this.bgVertices.addTriangle(0,0,100,0,100,100,  1,0,0);
this.bgVertices.addTriangle(100,100,0,100,0,0,  0,1,0);
//----
this.vertices = new AVO();
this.vertices.addTriangle(4,40, 40,10, 50,90,  0,0,0);
this.vertices.addTriangle(20,20, 80,20, 60,80,  0,0,1);
//-----------------------------
this.r = r;this.g = g;this.b = b;
}
update(gl: WebGL2RenderingContext){
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
//--------------------new - init
public init (gl :WebGL2RenderingContext){

const vertexShader = GlUtil.createShader(gl,vertexShaderSrc,gl.VERTEX_SHADER);
const fragmentShader = GlUtil.createShader(gl, fragShaderSrc,gl.FRAGMENT_SHADER);

const program = GlUtil.getProgram(gl,vertexShader,fragmentShader);
this.buffer = GlUtil.getBuffer(gl);
GlUtil.bindBuffer(gl,this.buffer, this.vertices.getVertices());//-move to draw then update
GlUtil.linkNuseProgram(gl,program);
this.program = program;

//------------bind attri and uniforms
this.setAttribute(gl, "a_pos", 2 , 4 * 5,0);
this.setAttribute(gl, "a_clr", 3 , 4 * 5, 2 * 4);
// this.colorLoc = this.getUniformLocation(gl, "u_Color");
this.u_xLoc = this.getUniformLocation(gl, "u_x");
this.u_yLoc = this.getUniformLocation(gl, "u_y");
this.u_widthLoc = this.getUniformLocation(gl, "u_width");
this.u_heightLoc = this.getUniformLocation(gl, "u_height");
}
protected getProgram():WebGLProgram{
if (this.program==null){throw new Error("program is null, the comp may not be initialized");}
return this.program;
}
///////////////////
draw(gl :WebGL2RenderingContext){
// this.vertices = this.vertices.splice(0, 17);
//we need to bind twice
if (this.buffer == null){throw new Error("buffer is null the comp may not be initialized");
}
GlUtil.bindBuffer(gl,this.buffer,this.bgVertices.getVertices());  
gl.drawArrays(gl.TRIANGLES , 0, (this.bgVertices.getVertices().length) ); 

GlUtil.bindBuffer(gl,this.buffer,this.vertices.getVertices());  
gl.drawArrays(gl.TRIANGLES , 0, (this.vertices.getVertices().length) ); 
}
protected setAttribute(gl :WebGL2RenderingContext,nameStr :string,numberOfComps :number,stride:number, offset :number=0){
GlUtil.setAttribute(gl,nameStr,this.getProgram() ,numberOfComps,stride, offset);
}
protected  getUniformLocation(gl :WebGL2RenderingContext,uniformName :string):WebGLUniformLocation{
  return GlUtil.getUniformLocation(gl,this.getProgram(), uniformName);

  
}   
}