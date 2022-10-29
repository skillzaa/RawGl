// import Engine from "../core/rawGl.js";
// import Tri from "../coreComps/coreTri.js";



// export default class BaseComp {
// protected tri :Tri; //-keep private
// public  x :number;
// public  y :number;
// public  width :number;
// public  height :number;
// public  r :number;
// public  g :number;
// public  b :number;
// ////////////////////////////////////
// constructor(engine :Engine,x:number=50,y:number=50,width:number=30,height:number=20,r:number=0,g:number=0,b:number=0){
// //---------------------------
// this.x = x ; 
// this.y = y ; 
// this.width = width ; 
// this.height = height ; 
// this.r = r ; 
// this.g = g ; 
// this.b = b ; 
// //---------------------------
// this.tri = new Tri(r,g,b);
// //---------------------------
// //--shd init since there is no more adding of vertex
// // this.tri.init(engine);
// }
// update(dtMs :number){
// this.tri.ve
//     x,y,   
//     x + width,   y,
//     x + width,y +height,
// }
// draw(gl :WebGL2RenderingContext){
//     this.tri.draw(gl);
// }

// protected localX(xPerc:number):number{
// return (this.width/100) * xPerc;
// }
// protected localY(yPerc:number):number{
// return (this.height/100) * yPerc;
// }



// }
