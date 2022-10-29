import CoreTri from "../coreComps/coreTri.js";
import WhObj from "./whObj.js";

export default class FillRect extends CoreTri {
// private wh :WhObj;    
constructor(x:number,y:number,width:number=20,height:number=20,r :number=0,g :number=0,b :number=0){
super(r,g,b);
const wh = new WhObj(x,y,width,height);    
this.addTriangle(wh.x,wh.y, wh.rightEdge(),wh.y, wh.x,wh.topEdge());
    this.addTriangle(wh.rightEdge(),wh.topEdge(), wh.x,wh.topEdge(),wh.x,wh.y);
}


}


 
