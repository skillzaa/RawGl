// import CoreTriComp from "../engine/coreTriComp.js";
// import rgba from "../functions/rgba.js";
// import RgbaObj from "../functions/rgbaObj.js";
// import fragShaderFirst from "../shaders/frag/fragShaderFirst.js";

// //----------------
// export default class Rectangle {
// private coreTri :CoreTriComp;

// constructor(rgbaObj :RgbaObj = rgba(1,1,1,1) ,x :number=50,y :number=50, width :number=40, height :number=20){

// this.coreTri = new CoreTriComp(rgbaObj);
// this.coreTri.addVertex(x,y);
// this.coreTri.addVertex(x + width,y);
// this.coreTri.addVertex(x,y + height);

// ////--triangle - 2    
    
// this.coreTri.addVertex(x + width,y + height );
// this.coreTri.addVertex( x, y + height );
// this.coreTri.addVertex( x + width,y );
    
// }

// init(gl :WebGLRenderingContext){
//     this.coreTri.init(gl,fragShaderFirst(0,0,1));
// }

// draw(gl: WebGLRenderingContext): void {
//     this.coreTri.draw(gl);
// }

// }