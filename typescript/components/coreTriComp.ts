import verShaderFirst from "../shaders/vertex/verShaderFirst.js";
import fragShaderFirst from "../shaders/frag/fragShaderFirst.js";
import circle from "../shaders/frag/circle.js";
import RgbaObj from "../functions/rgbaObj.js";
import perc2glCoord from "../functions/perc2glCoord.js";

//----------------------------------
export default class CoreTriComp {

private program : WebGLProgram | null;
private vertexPosBuffer :WebGLBuffer | null;
private vertices :number[];
rgba :RgbaObj;

// private vertexPosAttrib :number;

constructor (rgba :RgbaObj){
this.rgba = rgba;    
this.vertices = [ ];

this.vertexPosBuffer  =  null;//this.getBuffer(gl);
this.program = null;

}

addVertex( x :number , y :number){
//  this.vertices.push(perc2glCoord( x ));
//  this.vertices.push(perc2glCoord( y ));
 this.vertices.push( x );
 this.vertices.push( y );
}
setColor(rgba :RgbaObj){
this.rgba = rgba;
}
init(gl :WebGLRenderingContext,fragShaderStr :string){
this.vertexPosBuffer  =  this.getBuffer(gl);

this.program = this.getProgram(gl,verShaderFirst(),
fragShaderStr);    
// fragShaderFirst(0,0,1,1) );    
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
if (this.program == null){throw new Error("init error");
}    
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


gl.drawArrays(gl.TRIANGLES, 0, this.vertices.length);    
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