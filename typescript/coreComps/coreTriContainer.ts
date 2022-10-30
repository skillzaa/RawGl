import GlUtil from "../core/glUtil.js";
import perc2glCoord from "../functions/perc2glCoord.js";
import WhObj from "./whObj.js";
//////////////////////////////////////////
////////////////////////////////////////////////
const vertexShaderSrc = `
attribute highp vec2 a_pos;
uniform float u_width;
uniform float u_height;
uniform float u_x;
uniform float u_y;

void main(void) {
  
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
uniform highp vec3 u_Color;
void main(void) {
  gl_FragColor = vec4 (u_Color , 1.0);
}
` ;
//////////////////////////////////////////
export default class CoreTriContainer{
// private readonly _gl :WebGL2RenderingContext;
private vertices :number[];
private buffer :WebGLBuffer | null;
private colorLoc : WebGLUniformLocation | null;
private u_xLoc : WebGLUniformLocation | null;
private u_yLoc : WebGLUniformLocation | null;
private u_widthLoc : WebGLUniformLocation | null;
private u_heightLoc : WebGLUniformLocation | null;
// public readonly fragShaderSrc:String;    
// public readonly vertexShaderSrc:String;
public x :number;
public y :number;
public width :number;
public height :number;
public r :number;
public g :number;
public b :number;
private program :WebGLProgram | null;
// private vertexShaderSrc:string;
// private fragShaderSrc:string;
//---------------------------------
constructor(x:number= 0,y:number= 0.0,width:number= 100,height:number= 100,r :number=1,g :number=0,b :number=0){
this.x = x;
this.y=y;
this.width = width;
this.height = height;

this.program = null;
this.buffer = null;
this.colorLoc = null;
//----------------------------
this.u_xLoc = null;
this.u_yLoc = null;
this.u_widthLoc = null;
this.u_heightLoc = null;

////////////////////////////////
this.vertices = [
  0.0, 0.0,
  100.0, 0.0,
  100.0, 100.0,
];
this.r = r;
this.g = g;
this.b = b;
}
update(gl: WebGL2RenderingContext){
  // this.vertices[0] += 0.001;
const twoDivBy100 = 2/100;
  gl.uniform3fv(this.colorLoc,[this.r,this.g,this.b]);

gl.uniform1f(this.u_xLoc, (twoDivBy100 * this.x));
gl.uniform1f(this.u_yLoc,(twoDivBy100 * this.y));
// this.x += 0.001;
// this.y += 0.001;
const wdForShader = twoDivBy100 * this.width;
gl.uniform1f(this.u_widthLoc, (wdForShader /100) );
const htForShader = twoDivBy100 * this.height;
gl.uniform1f(this.u_heightLoc, (htForShader/100) );

if (this.buffer==null){throw new Error("buffer is null the comp may not be initialized");}    
  // GlUtil.bindBuffer(gl,this.buffer, this.vertices);//-move to draw then update
}
//--------------------new - init
public init (gl :WebGL2RenderingContext){

const vertexShader = GlUtil.createShader(gl,vertexShaderSrc,gl.VERTEX_SHADER);
const fragmentShader = GlUtil.createShader(gl, fragShaderSrc,gl.FRAGMENT_SHADER);

const program = GlUtil.getProgram(gl,vertexShader,fragmentShader);
this.buffer = GlUtil.getBuffer(gl);
GlUtil.bindBuffer(gl,this.buffer, this.vertices);//-move to draw then update
GlUtil.linkNuseProgram(gl,program);
this.program = program;

//------------bind attri and uniforms
this.setAttribute(gl, "a_pos", 2 ,4*2,0);
this.colorLoc = this.getUniformLocation(gl, "u_Color");
this.u_xLoc = this.getUniformLocation(gl, "u_x");
this.u_yLoc = this.getUniformLocation(gl, "u_y");
this.u_widthLoc = this.getUniformLocation(gl, "u_width");
this.u_heightLoc = this.getUniformLocation(gl, "u_height");
}


addTriangle(x1 :number,y1:number,x2:number,y2:number,x3:number,y3:number){

this.vertices.push(perc2glCoord (this.x - x1));
this.vertices.push(perc2glCoord (this.y - y1));  
this.vertices.push(perc2glCoord (this.x - x2));
this.vertices.push(perc2glCoord (this.y - y2));  
this.vertices.push(perc2glCoord (this.x - x3));
this.vertices.push(perc2glCoord (this.y - y3));

}

protected getProgram():WebGLProgram{
if (this.program==null){throw new Error("program is null, the comp may not be initialized");}
return this.program;
}



draw(gl :WebGL2RenderingContext){

//we need to bind twice
if (this.buffer == null){throw new Error("buffer is null the comp may not be initialized");
}   
GlUtil.bindBuffer(gl,this.buffer,this.vertices);  
gl.drawArrays(gl.TRIANGLES , 0, this.vertices.length); 
}
protected setAttribute(gl :WebGL2RenderingContext,nameStr :string,numberOfComps :number,stride:number, offset :number=0){
GlUtil.setAttribute(gl,nameStr,this.getProgram() ,numberOfComps,stride, offset);
}
protected  getUniformLocation(gl :WebGL2RenderingContext,uniformName :string):WebGLUniformLocation{
  return GlUtil.getUniformLocation(gl,this.getProgram(), uniformName);

  
}
    
}