// import verShaderFirst from "../shaders/vertex/verShaderFirst.js";
import fragShaderFirst from "../shaders/frag/fragShaderFirst.js";
import RgbaObj from "../functions/rgbaObj.js";
import perc2glCoord from "../functions/perc2glCoord.js";
import verShaderFirst from "../shaders/vertex/verShaderFirst.js";
//----------------------------------
export default class CoreTriComp {
public drawMode : "triangles" | "lines" | "points";
public width :number;
public height :number;
public x :number;
public y :number;


private program : WebGLProgram | null;
private vertexPosBuffer :WebGLBuffer | null;
private vertices :number[];
rgba :RgbaObj;

//--------------------------------------------------------
constructor (rgba :RgbaObj,x :number=0,y:number=0,width:number=20,height :number=10){
//-----------------------
this.x = x;
this.y = y;
this.width = width;
this.height = height;
//------------------------
this.rgba = rgba;    
this.vertices =  [ ];
//     -1.0, -1.0,          1.0, 0.0, 0.0,    // reg
//     0.0,   1.0,          0.0, 1.0, 0.0,    // green
//     1.0,  -1.0,          0.0, 0.0, 1.0,    // blue
//   ];
this.vertexPosBuffer  =  null;//this.getBuffer(gl);
this.program = null;
this.drawMode = "triangles";
}

addVertex( x :number , y :number, r:number=0,g:number=0,b:number=0){
 this.vertices.push(perc2glCoord( x ));
 this.vertices.push(perc2glCoord( y ));
 this.vertices.push(r);
 this.vertices.push(g);
 this.vertices.push(b);
//  this.vertices.push(a);
}
addTri( x1 :number , y1 :number,x2 :number , y2 :number,x3 :number , y3 :number, r:number=0,g:number=0,b:number=0){
this.addVertex(x1,y1,r,g,b);    
this.addVertex(x2,y2,r,g,b);    
this.addVertex(x3,y3,r,g,b);    
}

setColor(rgba :RgbaObj){
this.rgba = rgba;
}
init(gl :WebGLRenderingContext){
this.program = this.getProgram(gl, verShaderFirst(),
fragShaderFirst());    
this.vertexPosBuffer  =  this.getBuffer(gl);

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
//--Bind Buffer and Adding data to the butter
gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexPosBuffer);
gl.bufferData( gl.ARRAY_BUFFER, new Float32Array(this.vertices), 
gl.STATIC_DRAW);

//---link program
gl.linkProgram(this.program);
gl.useProgram(this.program);
//----Attrib pointer can just be obtained if program is linked
const vertexPosAttrib = gl.getAttribLocation(this.program, 'a_pos');
const vertexColorAttrib = gl.getAttribLocation(this.program, 'a_clr');

/////////////////////--unforms
/////////////////////--unforms
/////////////////////--unforms
/////////////////////--unforms
// const u_cosLoc = gl.getUniformLocation(this.program, "u_cos");
// const u_sinLoc = gl.getUniformLocation(this.program, "u_sin");
// const angle = 90;
// const rads = Math.PI * angle / 180;
// const cosB = Math.cos(rads);
// const sinB = Math.sin(rads);

// gl.uniform1f(u_cosLoc,cosB);
// gl.uniform1f(u_sinLoc,sinB);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
gl.enableVertexAttribArray( vertexPosAttrib);
gl.enableVertexAttribArray( vertexColorAttrib);

gl.vertexAttribPointer( 
vertexPosAttrib, //index 
2,               //number of components =2 x and y
gl.FLOAT,       //data type
false,          //normalized
5 * 4 ,         //stride - the comple vertex row bytes
0               //offset = 0 
); 
gl.vertexAttribPointer( 
vertexColorAttrib, //index 
3,               //number of components =3 r g b
gl.FLOAT,       //data type
false,          //normalized
5 * 4 ,         //stride - the comple vertex row bytes
2 * 4           //offset = 2 elements of 4 bytes of x andy be skiped 
); 

gl.drawArrays(gl.TRIANGLES , 0, 3); 

}

private createShader(gl :WebGLRenderingContext,str :string, type:number):WebGLShader {
    var shader = gl.createShader(type);
if (shader == null){
    throw new Error("shaders could not be created");
}
    gl.shaderSource(shader, str);
    gl.compileShader(shader);

    let compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!compiled) {
      // There are errors, so display them
      var errors = gl.getShaderInfoLog(shader);
      console.log('Failed to compile with these errors:' + "type:" + type, errors );
    }
    return shader;
}

}