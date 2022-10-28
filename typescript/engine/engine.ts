import GlUtil from "./glUtil.js";


export default class engine{
private gl :WebGLRenderingContext;
constructor(canvasId :string ="bilza"){
this.gl = GlUtil.getGl(canvasId);
}
getGl():WebGLRenderingContext{
    return this.gl;
}
getProgram(vshader:WebGLShader, fshader :WebGLShader) :WebGLProgram{
return  GlUtil.getProgram(this.gl,vshader,fshader);
}
getBuffer():WebGLBuffer{
return GlUtil.getBuffer(this.gl);
}
createShader(shaderSource :string, shaderType:number):WebGLShader{
return GlUtil.createShader(this.gl, shaderSource,shaderType);
}

bindBuffer(buff :WebGLBuffer,buffData :number[]){
return GlUtil.bindBuffer(this.gl,buff,buffData);
}

linkNuseProgram(prgrm :WebGLProgram){
return GlUtil.linkNuseProgram(this.gl,prgrm); 
}
clear(r:number=0,g:number=0,b:number=0,a:number=1){
    GlUtil.clear(this.gl,r,g,b,a);    
}

setAttribute(nameStr :string,programe :WebGLProgram,numberOfComps :number,stride:number, offset :number=0){
GlUtil.setAttribute(this.gl,nameStr,programe,numberOfComps,stride, offset);    
}
stdVertexShaderSrc():string{
return GlUtil.stdVertexShaderSrc();
}
stdFragShaderSrc():string{
return GlUtil.stdFragShaderSrc();
}
///////////////////////////////////////////////////
}