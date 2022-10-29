import GlUtil from "./glUtil.js";


export default class engine{
private gl :WebGLRenderingContext;
constructor(canvasId :string ="bilza"){
this.gl = GlUtil.getGl(canvasId);
}
//------------------------init------------------
createProgram(vertices :number[],vertexShaderSrc:string,fragShaderSrc:string):WebGLProgram{
const vertexShader = this.createShader(vertexShaderSrc,this.gl.VERTEX_SHADER);
const fragmentShader = this.createShader(fragShaderSrc,this.gl.FRAGMENT_SHADER);
const programe = this.getProgram(vertexShader,fragmentShader);
const VOB = this.getBuffer();
this.bindBuffer(VOB,vertices);
this.linkNuseProgram(programe);
return programe;
// this.setAttribute("a_pos",programe, 2 ,4*5,0);
// this.setAttribute("a_clr",programe, 3 , 4*5,2 * 4);

// const translateXLoc = this.gl.getUniformLocation(programe, "translateX");
// this.gl.uniform1f(translateXLoc,0.0);
// const translateYLoc = this.gl.getUniformLocation(programe, "translateY");
// const angleLoc = this.gl.getUniformLocation(programe, "angle");
}
getGl():WebGLRenderingContext{
    return this.gl;
}
private getProgram(vshader:WebGLShader, fshader :WebGLShader) :WebGLProgram{
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