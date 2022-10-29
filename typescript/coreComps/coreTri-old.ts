import perc2glCoord from "../functions/perc2glCoord.js";
import Engine from "../core/rawGl.js";

export default class CoreTri {
private  vertices :number[];
private u_ColorLoc :WebGLUniformLocation | null;
  // private ptSize :number;
private vertexShaderSrc :string;
private fragShaderSrc :string;
protected r:number;
protected g:number;
protected b:number;
protected a:number;

constructor(r:number=0.4,g:number=0,b:number=0,a:number=1){  
// this.ptSize = 10;
this.u_ColorLoc = null;
this.r = r;
this.g = g;
this.b = b;
this.a = a;
//--------------
this.vertices = [];
//--------------
this.vertexShaderSrc = `
attribute highp vec2 a_pos;

void main(void) {
    gl_PointSize = 1.0;
    gl_Position = vec4( 
                        a_pos.x,
                        a_pos.y,
                        1.0,
                        1.0 );
}
`; 
this.fragShaderSrc = `
uniform highp vec3 u_Color;
void main(void) {
  gl_FragColor = vec4 (u_Color , 1.0);
}
`;
}
init(engine :Engine){
////////////-hide this block-----------------
const programe = engine.createProgram(this.vertexShaderSrc,this.fragShaderSrc);
///////////////////////////////////////////////////////
//////////////--ATTRIBUTES AND UNIFORMS---/////////////
engine.setAttribute("a_pos",programe, 2 ,4*2,0);
// engine.setAttribute("a_clr",programe, 3 , 4*5,2 * 4);
//----------------
this.u_ColorLoc = engine.getUniformLocation(programe, "u_Color");
///////////////////////////////////////////////////////////////
}
addTriangle(x1 :number,y1:number,x2:number,y2:number,x3:number,y3:number){

this.vertices.push(perc2glCoord (x1));
this.vertices.push(perc2glCoord (y1));  
this.vertices.push(perc2glCoord (x2));
this.vertices.push(perc2glCoord (y2));  
this.vertices.push(perc2glCoord (x3));
this.vertices.push(perc2glCoord (y3));

}

///////////////////////////

///////////////////////////
///////////////////////////
draw(gl :WebGL2RenderingContext){
gl.uniform3fv(this.u_ColorLoc,[this.r,this.g,this.b]);
gl.drawArrays(gl.TRIANGLES , 0, this.vertices.length); 

}

}