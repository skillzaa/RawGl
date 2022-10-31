import {GlUtil} from "../moduleAssets/assets.js";
import perc2glCoord from "../functions/perc2glCoord.js";

//////////////////////////////////////////
////////////////////////////////////////////////
const vertexShaderSrc = `
attribute highp vec2 a_pos;
void main(void) {
    gl_PointSize = 1.0;
    gl_Position = vec4( 
                        a_pos.x,
                        a_pos.y,
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
export default class CoreTri{
// private readonly _gl :WebGL2RenderingContext;
private vertices :number[];
private buffer :WebGLBuffer | null;
private colorLoc : WebGLUniformLocation | null;
// public readonly fragShaderSrc:String;    
// public readonly vertexShaderSrc:String;
public r :number;
public g :number;
public b :number;
private program :WebGLProgram | null;
private vertexShaderSrc:string;
private fragShaderSrc:string;
//---------------------------------
constructor(r :number=0,g :number=0,b :number=0){
this.program = null;
this.buffer = null;
this.colorLoc = null;
this.vertexShaderSrc = vertexShaderSrc;
this.fragShaderSrc = fragShaderSrc;
this.vertices = [];
this.r = r;
this.g = g;
this.b = b;
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
}


addTriangle(x1 :number,y1:number,x2:number,y2:number,x3:number,y3:number){

this.vertices.push(perc2glCoord (x1));
this.vertices.push(perc2glCoord (y1));  
this.vertices.push(perc2glCoord (x2));
this.vertices.push(perc2glCoord (y2));  
this.vertices.push(perc2glCoord (x3));
this.vertices.push(perc2glCoord (y3));

}

protected getProgram():WebGLProgram{
if (this.program==null){throw new Error("program is null, the comp may not be initialized");}
return this.program;
}

update(gl: WebGL2RenderingContext){
    // this.vertices[0] += 0.001;
gl.uniform3fv(this.colorLoc,[this.r,this.g,this.b]);

if (this.buffer==null){throw new Error("buffer is null the comp may not be initialized");}    
    // GlUtil.bindBuffer(gl,this.buffer, this.vertices);//-move to draw then update
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