import verShaderFirst from "../shaders/vertex/verShaderFirst.js";
import fragShaderFirst from "../shaders/frag/fragShaderFirst.js";
import rectFrag from "../shaders/frag/rectFrag.js";
import RgbaObj from "../functions/rgbaObj.js";
// import perc2glCoord from "../functions/perc2glCoord.js";
//----------------------------------
export default class QuadCore {

private program : WebGLProgram;
private vertexPosBuffer :WebGLBuffer;
private vertices :number[];
// private vertexPosAttrib :number;
constructor (gl :WebGLRenderingContext,rgba :RgbaObj){
    
this.vertices = [
    -1,
    -1,
    1,
    1
];
this.vertexPosBuffer  = this.getBuffer(gl);

this.program = this.getProgram(gl,verShaderFirst(),
rectFrag(rgba.r,rgba.g,rgba.b,rgba.a) );


}

private getBuffer(gl :WebGLRenderingContext):WebGLBuffer{
let b  =  gl.createBuffer();
if (b == null){throw("failed to create buffer");}
return b;
}
///////////////////////////////////////////    
private getProgram(gl :WebGLRenderingContext,vstr :string, fstr :string) :WebGLProgram {
   const pgm = gl.createProgram();
   var vshader:WebGLShader = this.createShader(gl,vstr,gl.VERTEX_SHADER);
   var fshader :WebGLShader = this.createShader(gl,fstr,gl.FRAGMENT_SHADER);

if (pgm == null){throw new Error("failed to create program");}   
//-----------   
   gl.attachShader(pgm, vshader);
   gl.attachShader(pgm, fshader);
//-------------
// pgm.vertexPosAttrib = gl.getAttribLocation( pgm , 'pos');

// this.gl.useProgram(this.program);  
return pgm; 
}

draw(gl :WebGLRenderingContext){
// gl.enable( gl.BLEND_COLOR);
// gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexPosBuffer);
gl.bufferData( gl.ARRAY_BUFFER, new Float32Array(this.vertices), 
gl.STATIC_DRAW);

gl.linkProgram(this.program);
gl.useProgram(this.program);

const vertexPosAttrib = gl.getAttribLocation( this.program , 'pos');

gl.enableVertexAttribArray( vertexPosAttrib);
gl.vertexAttribPointer( vertexPosAttrib, 2, gl.FLOAT, false, 0, 0);   


gl.drawArrays(gl.TRIANGLE_FAN, 0, 3);    
// this.vertices[0] = this.vertices[0]+ 0.001; 
}

private createShader(gl :WebGLRenderingContext,str :string, type:number):WebGLShader {
    var shader = gl.createShader(type);
if (shader == null){
    throw new Error("shaders could not be created");
}
    gl.shaderSource(shader, str);
    gl.compileShader(shader);
    return shader;
}

}