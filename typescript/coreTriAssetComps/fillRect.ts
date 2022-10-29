// import Engine from "../core/rawGl.js";
// import Tri from "../coreComps/coreTri.js";
// import BaseAssetComp from "../components/baseComp.js";


// export default class FillRect extends BaseAssetComp{
// private tri :Tri;
// constructor(engine :Engine,x:number=50,y:number=50,width:number=30,height:number=20,r:number=0,g:number=0,b:number=0){
// super();    

//     this.tri = new Tri(
//         x,y,   
//         x + width,   y,
//         x + width,y +height,
//         r,g,b);
        
//     this.tri.addTriangle(
//         x + width,y+height,
//         x , y+height,
//         x,y
//         );
// //---------------------------
// this.tri.init(engine);
// }
// draw(gl :WebGL2RenderingContext){
//     this.tri.draw(gl);
// }
// }
