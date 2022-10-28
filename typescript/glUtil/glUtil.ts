

export default class GlUtil {


static getGl(canvasId :string ="bilza"):WebGLRenderingContext{
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;

    if (canvas == null){
        throw new Error("canvas not found");
    }

    const gl = canvas.getContext("webgl");
    if (gl == null) {
        throw new Error("Unable to initialize WebGL. Your browser or machine may not support it.");
    }
//---Got gl    
return gl;
}

static getProgram(gl :WebGLRenderingContext,vshader:WebGLShader, fshader :WebGLShader) :WebGLProgram {
    const pgm = gl.createProgram();
     
 if (pgm == null){throw new Error("failed to create program");}   
 //-----------   
    gl.attachShader(pgm, vshader);
    gl.attachShader(pgm, fshader);
 //-------------
 // pgm.vertexPosAttrib = gl.getAttribLocation( pgm , 'pos');
 // this.gl.useProgram(this.program);  
 return pgm; 
 }

static getBuffer(gl :WebGLRenderingContext):WebGLBuffer{
    let b  =  gl.createBuffer();
    if (b == null){throw("failed to create buffer");}
    return b;
}

static createShader(gl :WebGLRenderingContext, shaderSource :string, shaderType:number):WebGLShader {
    var shader = gl.createShader(shaderType);
if (shader == null){
    throw new Error("shaders could not be created");
}
    gl.shaderSource(shader, shaderSource);
    gl.compileShader(shader);

    let compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!compiled) {
      // There are errors, so display them
      var errors = gl.getShaderInfoLog(shader);
      console.log('Failed to compile with these errors:' + "type:" + shaderType, errors );
    }
return shader;
}
static bindBuffer(gl :WebGLRenderingContext,buff :WebGLBuffer,buffData :number[]){
gl.bindBuffer(gl.ARRAY_BUFFER, buff);
gl.bufferData( gl.ARRAY_BUFFER, new Float32Array(buffData), 
gl.STATIC_DRAW);

}
static linkNuseProgram(gl :WebGLRenderingContext,prgrm :WebGLProgram){
    gl.linkProgram(prgrm);
    gl.useProgram(prgrm);
}
static clear(gl :WebGLRenderingContext,r:number=0,g:number=0,b:number=0,a:number=1){
    gl.clearColor(r,g,b,a);
    gl.clear(gl.COLOR_BUFFER_BIT);
}
////////////////////////////////////////////////////
static setAttribute(gl :WebGLRenderingContext,nameStr :string,programe :WebGLProgram,numberOfComps :number,stride:number, offset :number=0){

const vertexPosAttrib = gl.getAttribLocation( programe, `${nameStr}`);
gl.enableVertexAttribArray( vertexPosAttrib);

gl.vertexAttribPointer( 
vertexPosAttrib, //index 
numberOfComps,               //number of components =2 x and y
gl.FLOAT,       //data type
false,          //normalized
stride ,         //stride - the comple vertex row bytes
offset               //offset = 0 
); 
}




///////////////////////////////////////////////
}