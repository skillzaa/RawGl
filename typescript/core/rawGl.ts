import GlUtil from "./glUtil.js";
/**
 * RawGl Engine is for creating experimentals projects. It takes away all the boiler code and allow experimentation"
 */

export default class engine{
private _gl :WebGL2RenderingContext;
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
gl():WebGL2RenderingContext{
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
     const r = `
attribute highp vec2 a_pos;
attribute highp vec3 a_clr;

// uniform float angle;
varying highp vec3 vColor;

void main(void) {
  gl_PointSize = 1.0;
    gl_Position = vec4( 
                        a_pos.x,
                        a_pos.y,
                        1.0,
                        1.0 );
    vColor = a_clr;
}
`;
return r;
}
stdFragShaderSrc():string{
    const r = `
    varying highp vec3 vColor;
    void main(void) {
      gl_FragColor = vec4 (vColor , 1.0);
    }
    `;
    return r;
}
getUniformLocation(programe :WebGLProgram, uniformName :string):WebGLUniformLocation{
const x =    this._gl.getUniformLocation(programe, uniformName);
if (x==null){throw new Error("uniform not found");}
return x;
}
///////////////////////////////////////////////////
}