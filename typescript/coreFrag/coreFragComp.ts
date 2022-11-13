import GlUtil from "../core/glUtil.js";
import IGPUComp from "../core/IGPUComp.js";  

const input :number[] = [
    -1.0, -1.0, 
    1.0, -1.0,  
    1.0,  1.0,  
    ////////////
    1.0,  1.0,  
    -1.0, 1.0,  
    -1.0, -1.0, 
    ];
    
////////////////////////////////////////////////
const vertexShaderSrc = `#version 300 es
precision mediump float;
in vec2 a_pos;

void main () {
    gl_Position = vec4( a_pos.x, a_pos.y, 0.0, 1.0); // x,y,z,w
}
`;
//------------------------------------------- 
const fragShaderSrc = `#version 300 es
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;

out vec4 outColor;

void main()
{
    vec2 uv = gl_FragCoord.xy/u_resolution;
    // outColor = vec4(0.5 + 0.5*cos(u_time+uv.yxy),1.0);
    outColor = vec4( 0.0   , 0.0,   1.0,     1.0);
}
` ;
//////////////////////////////////////////
export default class CoreFragComp implements IGPUComp{
protected vertices  :number[];
protected buffer :WebGLBuffer | null;
protected program :WebGLProgram | null;
//---------------------------------
constructor(vertices  :number[]=input){
this.program = null;
this.buffer = null;
this.vertices = vertices; 
}
////////////////////////////////////////////////
setData(vertices  :number[]){
  this.vertices = vertices; 
}

//--------------------new - init
public update (gl :WebGL2RenderingContext){

const vertexShader = GlUtil.createShader(gl,vertexShaderSrc,gl.VERTEX_SHADER);
const fragmentShader = GlUtil.createShader(gl, fragShaderSrc,gl.FRAGMENT_SHADER);

this.program = GlUtil.getProgram(gl,vertexShader,fragmentShader);
this.buffer = GlUtil.getBuffer(gl);
GlUtil.bindBuffer(gl,this.buffer, this.vertices);//-move to draw then update
GlUtil.linkNuseProgram(gl, this.program);
//------------bind attri and uniforms
GlUtil.setAttribute(gl, "a_pos",this.program, 2 , 2 * 4,0);
// GlUtil.setAttribute(gl, "a_clr",this.program, 3 , 4 * 5, 2 * 4);
//--------------------------------
}
////--no uniforms thus update is emty
// public update(gl :WebGL2RenderingContext):void{}

///////////////////
public draw(gl :WebGL2RenderingContext){
//we need to bind twice
if (this.buffer == null){throw new Error("buffer is null the comp may not be initialized");
}
/////-->>>>>>>>>>>> draw <<<<<<<<<<<<<<-----
GlUtil.bindBuffer(gl,this.buffer,this.vertices);  
gl.drawArrays(gl.TRIANGLES , 0, (this.vertices.length) ); 
// gl.drawArrays(gl.TRIANGLE_STRIP , 0, 4 ); 

}


////////////////////////////////////
}