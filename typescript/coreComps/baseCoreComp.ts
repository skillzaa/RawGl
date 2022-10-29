import GlUtil from "../core/glUtil.js";
import perc2glCoord from "../functions/perc2glCoord.js";

//////////////////////////////////////////
export default class BaseCoreComp{
// private readonly _gl :WebGL2RenderingContext;
private vertices :number[];
private buffer :WebGLBuffer | null;
// public readonly fragShaderSrc:String;    
// public readonly vertexShaderSrc:String;
private program :WebGLProgram | null;
//---------------------------------
constructor(){
this.program = null;
this.buffer = null;
this.vertices = [];

}

//--------------------new - init
public init (gl :WebGL2RenderingContext, vertexShaderSrc:string,fragShaderSrc:string){
const vertexShader = GlUtil.createShader(gl,vertexShaderSrc,gl.VERTEX_SHADER);
        const fragmentShader = GlUtil.createShader(gl, fragShaderSrc,gl.FRAGMENT_SHADER);
        const program = GlUtil.getProgram(gl,vertexShader,fragmentShader);
        this.buffer = GlUtil.getBuffer(gl);
        GlUtil.bindBuffer(gl,this.buffer, this.vertices);//-move to draw then update
        GlUtil.linkNuseProgram(gl,program);
this.program = program;
}
addTriangle(x1 :number,y1:number,x2:number,y2:number,x3:number,y3:number){

this.vertices.push(perc2glCoord (x1));
this.vertices.push(perc2glCoord (y1));  
this.vertices.push(perc2glCoord (x2));
this.vertices.push(perc2glCoord (y2));  
this.vertices.push(perc2glCoord (x3));
this.vertices.push(perc2glCoord (y3));

}

getProgram():WebGLProgram{
if (this.program==null){throw new Error("program is null the comp may not be initialized");}
return this.program;
}

update(){
    this.vertices[0] += 0.001;
}

draw(gl :WebGL2RenderingContext){

//we need to bind twice
if (this.buffer == null){throw new Error("buffer is null the comp may not be initialized");
}   
GlUtil.bindBuffer(gl,this.buffer,this.vertices);  
  // engine.bindBuffer(engine.vao,vertices);
/////////////////////---draw-----------------
// engine.clear(0.1,0.1,0.2);
gl.drawArrays(gl.TRIANGLES , 0, this.vertices.length); 
}
setAttribute(gl :WebGL2RenderingContext,nameStr :string,numberOfComps :number,stride:number, offset :number=0){
GlUtil.setAttribute(gl,nameStr,this.getProgram() ,numberOfComps,stride, offset);
}
getUniformLocation(gl :WebGL2RenderingContext,uniformName :string):WebGLUniformLocation{
  return GlUtil.getUniformLocation(gl,this.getProgram(), uniformName);

  
}
    
}