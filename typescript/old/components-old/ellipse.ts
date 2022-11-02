// import Triangle from "./triangle/triangle.js";
// import rgba from "../functions/rgba.js";
// import RgbaObj from "../functions/rgbaObj.js";
// import IGLEngineComp from "./IGLEngineComp.js";
// import getRandom from "../functions/getRandom.js";
// import angle2rad from "../functions/angle2rad.js";
// //----------------
// export default class Ellipse implements IGLEngineComp {
// public readonly width :number;
// public readonly height :number;
// public readonly x :number;
// public readonly y :number;
// public readonly startAngle :number;
// public readonly endAngle :number;
// public readonly steps :number;
// public readonly stepSlice :number;
// public readonly rgba :RgbaObj;
// private tris :Triangle[];

// constructor(gl :WebGLRenderingContext,rgbaObj :RgbaObj,x :number=50,y :number=50, width :number= 10,height :number=20,steps :number= 60,
//     startAngle :number= 0, endAngle :number= 360 ){

//         this.tris = [];
// this.width = width;
// this.height = height;
// this.x = x;
// this.y = y;
// if (steps < 3){throw new Error("steps can not be less than 3");
// }
// this.steps = steps;
// this.rgba = rgbaObj;
// this.startAngle = startAngle; 
// this.endAngle = endAngle; 
// //////////////////////////////////////////////////
// this.stepSlice = (360/steps);

// for (let i = 0; i < steps   ; i++) {
//     const sangle = i * this.stepSlice;
//     const eangle = sangle + this.stepSlice;
//     this.getCircleTri(gl,sangle, eangle);    
// }
// //////////////////////////////////////////////////
// }

// private getCircleTri(gl :WebGLRenderingContext,startAngle :number = 0, endAngle :number = 20){
    
// const x1 = this.width * Math.cos(angle2rad(startAngle));
// const y1 = (this.height) * Math.sin(angle2rad( startAngle ));

// const x2 = this.width * Math.cos(angle2rad(endAngle));
// const y2 = (this.height ) * Math.sin(angle2rad( endAngle ));

// const tri = new Triangle(gl,this.rgba,
//     this.x          , this.y,
//     this.x + x1     , this.y + y1,
//     this.x + x2     , this.y + y2
// ); 
//         this.tris.push(tri);
// }


// draw(gl: WebGLRenderingContext): void {
// for (let i = 0; i < this.steps   ; i++) {
// this.tris[i].draw(gl);    
// }
    
// }

// }