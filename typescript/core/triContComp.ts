import GlUtil from "./glUtil.js";
import IGPUComp from "./IGPUComp.js"; 
import BaseTriComp from "./baseTriComp.js"; 
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
export default class TriContComp extends BaseTriComp {
// public vertices  :number[];
// private buffer :WebGLBuffer | null;
// ------------------------------------;
private u_xLoc : WebGLUniformLocation | null;
private u_yLoc : WebGLUniformLocation | null;
private u_widthLoc : WebGLUniformLocation | null;
private u_heightLoc : WebGLUniformLocation | null;
public x  :number;
public y  :number;
public width :number;
public height :number;
// private program :WebGLProgram | null;
//---------------------------------
constructor(x:number= 25,y:number= 25,width:number= 50,height:number= 50){
 super();
//--------------------------------------------------  
this.x = x;
this.y=y;
this.width = width;
this.height = height;
// this.program = null;
// this.buffer = null;
//----------------------------
this.u_xLoc = null;
this.u_yLoc = null;
this.u_widthLoc = null;
this.u_heightLoc = null;
////////////////////////////////
this.vertices = []; 
}

//--------------------parent update over written
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