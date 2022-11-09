// import ClrObj  from "../color/clrObj.js";
// import getClrObj  from "../color/getClrObj.js";

// import GlUtil from "../core/glUtil.js";
// ////////////////////////////////////////////////
// import TriangleFifteen from "../formats/triangleFifteen.js";
// import TriComp from "../core/triComp.js";
// import upload515ToTriCont from "../formats/upload515ToTriCont.js";
// import Primtive from "../primtives/primitives.js";

// ////////////////////////////////////////////////
// ////////////////////////////////////////////////

// const gl = GlUtil.getGl("bilza");
// GlUtil.clear(gl,0.2,0.2,0.2);
// //////////////////////////////////////
// function grid(r:number,g:number,b:number){
// const comp = new TriComp();
// //-------------------
// //--Verticals
// for (let i = 0; i < 10; i++) {
//     const triangles = 
//     Primtive.rectWH(i * 10 ,0 , 0.25,100     , 
//         getClrObj(r,g,b) );
//     upload515ToTriCont( triangles ,comp);    
// }
// //--horizontals
// for (let i = 0; i < 10; i++) {
//     const triangles = 
//     Primtive.rectWH( 0, i * 10 , 100,0.25     , 
//         getClrObj( r,g,b ) );
//     upload515ToTriCont( triangles ,comp);    
// }
// //--
// comp.init(gl);
// comp.draw(gl);
// }
// /////////////////////////////////////////////////
// grid(1,1,0);
// //////////////////////////////////////////////////////
// function draw(tri :TriangleFifteen[]){
// const comp = new TriComp();
// upload515ToTriCont(tri,comp);    
// comp.init(gl);
// comp.draw(gl);
// }