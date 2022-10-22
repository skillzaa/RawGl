import verShaderFirst from "../../shaders/vertex/verShaderFirst.js";
import fragShaderFirst from "../../shaders/fragment/fragShaderFirst.js";
import Rgba from "../../functions/rgba.js";
import perc2glCoord from "../../functions/perc2glCoord.js";
//----------------------------------
export default class Triangle {

private program : WebGLProgram;
private vertexPosBuffer :WebGLBuffer;
private vertices :number[];

constructor (gl :WebGLRenderingContext,x1 :number,y1 :number,x2 :number,y2 :number,x3 :number,y3 :number,rgba :Rgba){
    // perc2glCoord
this.vertices = [x1,y1,x2,y2,x3,y3];
this.vertexPosBuffer  = this.getBuffer(gl);

this.program = this.getProgram(gl,verShaderFirst(),
fragShaderFirst(rgba.r,rgba.g,rgba.b,rgba.a) );
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
//@ts-expect-error
pgm.vertexPosAttrib = gl.getAttribLocation( pgm , 'pos');

// this.gl.useProgram(this.program);  
return pgm; 
}

draw(gl :WebGLRenderingContext){
gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexPosBuffer);
gl.bufferData( gl.ARRAY_BUFFER, new Float32Array(this.vertices), 
gl.STATIC_DRAW);

//@ts-expect-error
gl.enableVertexAttribArray(this.program.vertexPosAttrib);
//@ts-expect-error
gl.vertexAttribPointer(this.program.vertexPosAttrib, 2, gl.FLOAT, false, 0, 0);   
gl.linkProgram(this.program);
gl.useProgram(this.program);


gl.drawArrays(gl.TRIANGLES, 0, 3);    
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