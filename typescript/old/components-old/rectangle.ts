// import Triangle from "./triangle/triangle.js";
// import rgba from "../functions/rgba.js";
// import IGLEngineComp from "./IGLEngineComp.js";
// import RgbaObj from "../functions/rgbaObj.js";

// //----------------
// export default class Rectangle implements IGLEngineComp {
// private tri1 :Triangle;
// private tri2 :Triangle;
// constructor(gl :WebGLRenderingContext,rgbaObj :RgbaObj ,x :number,y :number, width :number, height :number){
// this.tri1 = new Triangle(gl,    rgbaObj,
//     x,y,
//     x + width,y,
//     x,y + height
//     );

// this.tri2 = new Triangle(gl,rgbaObj,
//     x + width,y + height,
//     x, y + height,
//     x + width,y
// );

// // this.tri2 = new Triangle(gl,50,10,100,10,40,100,rgba(0,1));

// }

// draw(gl: WebGLRenderingContext): void {
//     this.tri1.draw(gl);
//     this.tri2.draw(gl);
// }

// }