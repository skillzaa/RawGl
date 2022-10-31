import GlUtil from "./glUtil.js";

/**
 * TriContainer is among the 2 most important objects of this module.
 * It does not need to know the colors and just concern with the VOA
 */
////////////////////////////////////////////////
const vertexShaderSrc = `
attribute highp vec2 a_pos;

attribute highp vec3 a_clr;
varying highp vec3 v_clr;


uniform float u_width;
uniform float u_height;
uniform float u_x;
uniform float u_y;

void main(void) {
v_clr = a_clr;
//-------------------------------------------------------
    gl_PointSize = 1.0;
    gl_Position = vec4( 
                        ( (u_x + ( u_width * a_pos.x)) - 1.0 ),
                        ( (u_y + (u_height * a_pos.y)) - 1.0 ),
                        1.0,
                        1.0 );
}
`;
//------------------------------------------- 
const fragShaderSrc = `
varying highp vec3 v_clr;

void main(void) {
  gl_FragColor = vec4 (v_clr , 1.0);
}
` ;
//////////////////////////////////////////
export default class TriContainer {
public vertices  :number[];
private buffer :WebGLBuffer | null;
// ------------------------------------;
private u_xLoc : WebGLUniformLocation | null;
private u_yLoc : WebGLUniformLocation | null;
private u_widthLoc : WebGLUniformLocation | null;
private u_heightLoc : WebGLUniformLocation | null;
public x  :number;
public y  :number;
public width :number;
public height :number;
private program :WebGLProgram | null;
//---------------------------------
constructor(x:number= 0,y:number= 0.0,width:number= 100,height:number= 100){

//--------------------------------------------------  
this.x = x;
this.y=y;
this.width = width;
this.height = height;
this.program = null;
this.buffer = null;
//----------------------------
this.u_xLoc = null;
this.u_yLoc = null;
this.u_widthLoc = null;
this.u_heightLoc = null;
////////////////////////////////
this.vertices = []; 
}
/**
 * addTriangle is the main method which insert data into table. Each and every other method (addRectangle, addCircle, addPlus) must call this method (internally).
 * Every Triangle has 15 data points 5 for each vertex.
 * Array index 0-14
 * Private so that I can only use it with expect-error
 */
public addTri(x1 :number,y1:number,x2:number,y2:number,x3:number,y3:number,r:number=1,g:number=0,b:number=0){
///Following is placed for testing to cut off RGB    
// r=1;g=0;b=0;    
///////////////---------vertex 1
this.vertices.push((x1));
this.vertices.push((y1));  
this.vertices.push((r));  
this.vertices.push((g));  
this.vertices.push((b));  
///////////////---------vertex 2
this.vertices.push((x2));
this.vertices.push((y2));  
this.vertices.push((r));  
this.vertices.push((g));  
this.vertices.push((b));
///////////////---------vertex 3
this.vertices.push((x3));
this.vertices.push((y3));  
this.vertices.push((r));  
this.vertices.push((g));  
this.vertices.push((b));  
}

//--------------------new - init
public init (gl :WebGL2RenderingContext){

const vertexShader = GlUtil.createShader(gl,vertexShaderSrc,gl.VERTEX_SHADER);
const fragmentShader = GlUtil.createShader(gl, fragShaderSrc,gl.FRAGMENT_SHADER);

this.program = GlUtil.getProgram(gl,vertexShader,fragmentShader);
this.buffer = GlUtil.getBuffer(gl);
GlUtil.bindBuffer(gl,this.buffer, this.vertices);//-move to draw then update
GlUtil.linkNuseProgram(gl, this.program);
//------------bind attri and uniforms
GlUtil.setAttribute(gl, "a_pos",this.program, 2 , 4 * 5,0);
GlUtil.setAttribute(gl, "a_clr",this.program, 3 , 4 * 5, 2 * 4);
//--------------------------------
this.u_xLoc = GlUtil.getUniformLocation(gl,this.program, "u_x");
this.u_yLoc = GlUtil.getUniformLocation(gl,this.program, "u_y");
this.u_widthLoc = GlUtil.getUniformLocation(gl,this.program, "u_width");
this.u_heightLoc = GlUtil.getUniformLocation(gl,this.program, "u_height");
//------------>>>check following line
this.update(gl); // so the new item just need init and not init n update
}
/////////////////////////////////////////////////
public update(gl: WebGL2RenderingContext){
const twoDivBy100 = 2/100;

gl.uniform1f(this.u_xLoc, (twoDivBy100 * this.x));
gl.uniform1f(this.u_yLoc,(twoDivBy100 * this.y));
// this.x += 0.001;
// this.y += 0.001;
const wdForShader = twoDivBy100 * this.width;
gl.uniform1f(this.u_widthLoc, (wdForShader /100) );
const htForShader = twoDivBy100 * this.height;
gl.uniform1f(this.u_heightLoc, (htForShader/100) );

if (this.buffer==null){throw new Error("buffer is null the comp may not be initialized");}    
}
///////////////////
public draw(gl :WebGL2RenderingContext){
//we need to bind twice
if (this.buffer == null){throw new Error("buffer is null the comp may not be initialized");
}
/////-->>>>>>>>>>>> draw <<<<<<<<<<<<<<-----
GlUtil.bindBuffer(gl,this.buffer,this.vertices);  
gl.drawArrays(gl.TRIANGLES , 0, (this.vertices.length) ); 
}


////////////////////////////////////
}