

export default class GlPack {
private gl :WebGLRenderingContext;
private program :null | WebGLProgram;

constructor (canvasId :string ="bilza"){
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;

    if (canvas == null){
        throw new Error("canvas not found");
    }

    const gl = canvas.getContext("webgl");
    if (gl == null) {
        throw new Error("Unable to initialize WebGL. Your browser or machine may not support it.");
    }
//---Got gl    
this.gl = gl;
this.program = null;
}
public clear(
    r :number = 0.0,
    g :number = 0.0,
    b :number = 0.8,
    w :number = 1.0
    ){
this.gl.clearColor(r, g, b, w);
this.gl.clear(this.gl.COLOR_BUFFER_BIT);
}
getGl():WebGLRenderingContext{
    return this.gl;
}
addVertices(vertices :number[]){
let vertexPosBuffer = this.gl.createBuffer();
this.gl.bindBuffer(this.gl.ARRAY_BUFFER, vertexPosBuffer);

// var vertices = [-0.5, -0.5, 0.5, -0.5, 0, 0.5];
this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertices), 
this.gl.STATIC_DRAW);
}
///////////////////////////////////////////    
createProgram(vstr :string, fstr :string) {
   this.program = this.gl.createProgram();
   var vshader:WebGLShader = this.createShader(vstr, this.gl.VERTEX_SHADER);
   var fshader :WebGLShader = this.createShader(fstr, this.gl.FRAGMENT_SHADER);
//-----------   
    if (this.program == null){
    throw new Error("program could not be created");   }
   this.gl.attachShader(this.program, vshader);
   this.gl.attachShader(this.program, fshader);
   this.gl.linkProgram(this.program);
//-------------
this.gl.useProgram(this.program);   
}

setVertexPosition(){
if (this.program == null){throw new Error("program not set");}    
//@ts-expect-error
this.program.vertexPosAttrib = this.gl.getAttribLocation(this.program, 'pos');
//@ts-expect-error
this.gl.enableVertexAttribArray(this.program.vertexPosAttrib);
//@ts-expect-error
this.gl.vertexAttribPointer(this.program.vertexPosAttrib, 2, this.gl.FLOAT, false, 0, 0);
}
draw(){
    this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);    
}
// useProgram(){
// if (this.program == null){throw new Error("program not set");}    
// this.gl.useProgram(this.program);
// }
createShader(str :string, type:number):WebGLShader {
    var shader = this.gl.createShader(type);
if (shader == null){
    throw new Error("shaders could not be created");
}
    this.gl.shaderSource(shader, str);
    this.gl.compileShader(shader);
    return shader;
}

}