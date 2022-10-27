// import CoreTriComp from "../engine/coreTriComp.js";
// import rgba from "../functions/rgba.js";
// import RgbaObj from "../functions/rgbaObj.js";
// import fragShaderFirst from "../shaders/frag/fragShaderFirst.js";
// import setBwZeroToHundred from "../functions/setBwZeroToHundred.js";
// //----------------
// export default class BaseShape {
// protected coreTri :CoreTriComp;
// protected background :CoreTriComp;
// public showBackground :boolean;

// constructor(rgbaObj :RgbaObj = rgba(1,1,1,1),x :number=50,y :number=50, width :number=40, height :number=20){
// this.showBackground = true;
// this.coreTri = new CoreTriComp(rgbaObj,x,y,width,height);
// //------------------------
// this.background = new CoreTriComp(rgba(0,0,1),x,y,width,height);
// this.addBackgroundRect();
// }

// setBackgroundColor(r:number=0,g:number=0,b:number=0,a:number=1){
// this.background.rgba = rgba(r,g,b,a);
// }
// setColor(r:number=0,g:number=0,b:number=0,a:number=1){
// this.coreTri.rgba = rgba(r,g,b,a);
// }
// addVertex(x :number,y:number){
// this.coreTri.addVertex(this.localizeWidth(x),this.localizeHeight(y));
// }
// addTri(x1 :number,y1:number,x2:number,y2:number,x3:number,y3:number):void{
//     this.coreTri.addTri(
//     this.localizeWidth(x1),this.localizeHeight(y1),
//     this.localizeWidth(x2),this.localizeHeight(y2),
//     this.localizeWidth(x3),this.localizeHeight(y3) );
// }

// addRect(x :number,y:number,width:number,height:number){
// // width = setBwZeroToHundred(width);
// // height = setBwZeroToHundred(height);
//     this.addTri(x,y,x + width,y,x + width,y + height);
//     this.addTri(x,y,
//         x ,y + height, 
//         x + width,y + height);
        
// }
// addBackgroundRect(){
// // this.background.addTri(0,0,100,0,100,100);  
// this.background.addTri(
//     this.localizeWidth(0),this.localizeHeight(0),
//     this.localizeWidth(100),this.localizeHeight(0),
//     this.localizeWidth(100),this.localizeHeight(100) );  
// this.background.addTri(
//     this.localizeWidth(0),this.localizeHeight(0),
//     this.localizeWidth(0),this.localizeHeight(100),
//     this.localizeWidth(100),this.localizeHeight(100) );  

// // this.background.addTri(100,100,100,0,0,0);    
// }

// ////////////////////////////////
// init(gl :WebGLRenderingContext){
//     this.coreTri.init(gl,fragShaderFirst(
//         this.coreTri.rgba.r ,
//         this.coreTri.rgba.g,
//         this.coreTri.rgba.b,
//         this.coreTri.rgba.a,
//          ));
//     this.background.init(gl,fragShaderFirst(
//         this.background.rgba.r ,
//         this.background.rgba.g,
//         this.background.rgba.b,
//         this.background.rgba.a,
//          ));
// }

// draw(gl: WebGLRenderingContext): void {
//     if (this.showBackground == true){
//         this.background.draw(gl);
//     }
//     this.coreTri.draw(gl);
// }

// private localizeWidth(worldXPerc :number):number{
// worldXPerc = setBwZeroToHundred(worldXPerc);    
// const localXPerc = (this.coreTri.width/100) * worldXPerc; 
// return this.coreTri.x + localXPerc; 
// }
// private localizeHeight(worldYPerc :number):number{
// worldYPerc = setBwZeroToHundred(worldYPerc);    
// const localYPerc = (this.coreTri.height/100) * worldYPerc; 
// return this.coreTri.y + localYPerc; 
// }

// }