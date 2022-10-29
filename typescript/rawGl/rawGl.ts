import GlUtil from "./glUtil.js";
/**
 * RawGl Engine is for creating experimentals projects. It takes away all the boiler code and allow experimentation"
 */

export default class engine{
private _gl :WebGLRenderingContext;
constructor(canvasId :string ="bilza"){
this._gl = GlUtil.getGl(canvasId);
}
//------------------------init------------------
createProgram(vertices :number[],vertexShaderSrc:string,fragShaderSrc:string):WebGLProgram{
const vertexShader = this.createShader(vertexShaderSrc,this._gl.VERTEX_SHADER);
const fragmentShader = this.createShader(fragShaderSrc,this._gl.FRAGMENT_SHADER);
const programe = this.getProgram(vertexShader,fragmentShader);
const VOB = this.getBuffer();
this.bindBuffer(VOB,vertices);
this.linkNuseProgram(programe);
return programe;
// this.setAttribute("a_pos",programe, 2 ,4*5,0);
// this.setAttribute("a_clr",programe, 3 , 4*5,2 * 4);

// const translateXLoc = this._gl.getUniformLocation(programe, "translateX");
// this._gl.uniform1f(translateXLoc,0.0);
// const translateYLoc = this._gl.getUniformLocation(programe, "translateY");
// const angleLoc = this._gl.getUniformLocation(programe, "angle");
}
gl():WebGLRenderingContext{
    return this._gl;
}
private getProgram(vshader:WebGLShader, fshader :WebGLShader) :WebGLProgram{
return  GlUtil.getProgram(this._gl,vshader,fshader);
}
getBuffer():WebGLBuffer{
return GlUtil.getBuffer(this._gl);
}
createShader(shaderSource :string, shaderType:number):WebGLShader{
return GlUtil.createShader(this._gl, shaderSource,shaderType);
}

bindBuffer(buff :WebGLBuffer,buffData :number[]){
return GlUtil.bindBuffer(this._gl,buff,buffData);
}

linkNuseProgram(prgrm :WebGLProgram){
return GlUtil.linkNuseProgram(this._gl,prgrm); 
}
clear(r:number=0,g:number=0,b:number=0,a:number=1){
    GlUtil.clear(this._gl,r,g,b,a);    
}

setAttribute(nameStr :string,programe :WebGLProgram,numberOfComps :number,stride:number, offset :number=0){
GlUtil.setAttribute(this._gl,nameStr,programe,numberOfComps,stride, offset);    
}
stdVertexShaderSrc():string{
return GlUtil.stdVertexShaderSrc();
}
stdFragShaderSrc():string{
return GlUtil.stdFragShaderSrc();
}
getUniformLocation(programe :WebGLProgram, uniformName :string):WebGLUniformLocation{
const x =    this._gl.getUniformLocation(programe, uniformName);
if (x==null){throw new Error("uniform not found");}
return x;
}
///////////////////////////////////////////////////
}