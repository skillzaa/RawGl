import verShaderFirst from "../../shaders/vertex/verShaderFirst.js";
import fragShaderFirst from "../../shaders/fragment/fragShaderFirst.js";
import Rgba from "../../functions/rgba.js";
export default class Triangle {

private program : WebGLProgram;
private vertexPosBuffer :WebGLBuffer;
private vertices :number[];

constructor (gl :WebGLRenderingContext,vertices :number[],rgba :Rgba){

this.vertices = vertices;
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
pgm.vertexPosAttrib = gl.getAttribLocation( pgm , 'pos');

// this.gl.useProgram(this.program);  
return pgm; 
}

private setVertexPosition(gl :WebGLRenderingContext){
// if (this.program == null){throw new Error("program not set");}    
// this.program.vertexPosAttrib = gl.getAttribLocation(this.program, 'pos');
// gl.enableVertexAttribArray(this.program.vertexPosAttrib);
// gl.vertexAttribPointer(this.program.vertexPosAttrib, 2, gl.FLOAT, false, 0, 0);
}
draw(gl :WebGLRenderingContext){
gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexPosBuffer);
gl.bufferData( gl.ARRAY_BUFFER, new Float32Array(this.vertices), 
gl.STATIC_DRAW);

// this.setVertexPosition(gl); 
gl.enableVertexAttribArray(this.program.vertexPosAttrib);
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