// import IGLEngineComp from "./components/IGLEngineComp";
// import Rectangle from "./components/rectangle.js";
// import Triangle from "./components/triangle/triangle.js";
// import Ellipse from "./components/ellipse.js";


// import RgbaObj from "./functions/rgbaObj.js";
// import rgba from "./functions/rgba.js";

// //-----------------------------------------
// export default class CompFactory {
// private gl :WebGLRenderingContext;
// private comps :IGLEngineComp[];
// constructor(gl :WebGLRenderingContext,comps :IGLEngineComp[]){
// this.gl = gl;    
// this.comps = comps;
// }

// rectangle(rgbaObj :RgbaObj ,x :number,y :number, width :number, height :number):Rectangle{
// const comp = new Rectangle(this.gl,rgbaObj,x,y,width,height);
// this.comps.push(comp);
// return comp;
// }
// triangle(rgba :RgbaObj,x1 :number,y1 :number,x2 :number,y2 :number,x3 :number,y3 :number):Triangle{
// const comp = new Triangle(this.gl,rgba,x1,y1,x2,y2,x3,y3);
// this.comps.push(comp);
// return comp;
// }
// ellipse(rgbaObj :RgbaObj,x :number=50,y :number=50, width :number= 10,height :number=20,steps :number= 60,startAngle :number= 0, endAngle :number= 360):Ellipse{
// const comp = new Ellipse(this.gl,rgbaObj,x,y,width,height,steps,startAngle, endAngle);
// this.comps.push(comp);
// return comp;
// }





// }