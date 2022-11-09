import Primitive from "../primtives/primitives.js";
///////////////////////////////////////////////
import ClrObj from "../color/clrObj.js";
// import getClrObj from "../../color/getClrObj.js"; 
///////////////////////////////////////////////
import TriangleFifteen from "../formats/triangleFifteen.js";


///////////////////////////////////////////////
export default class Add {
private triangles :TriangleFifteen[];
constructor(){
this.triangles = [];
}

tri(x1 :number,y1:number,x2 :number,y2:number,x3 :number,y3:number,clr :ClrObj){
const t = Primitive.tri(x1,y1,x2,y2,x3,y3,clr);
this.triangles = this.triangles.concat(t); 
}
 
diagonal(x1 :number, y1:number, x2 :number,y2:number,lineWidth:number,clr :ClrObj){
const t = Primitive.diagonal(x1, y1, x2,y2,lineWidth,clr);
this.triangles = this.triangles.concat(t); 
}

rect(x1 :number,y1:number,x2 :number,y2:number,x3 :number,y3:number,clr :ClrObj){
const t = Primitive.rect(x1,y1,x2,y2,x3,y3,clr);
this.triangles = this.triangles.concat(t); 
}

rectWH(x :number,y:number,width:number,height:number,clr :ClrObj){
const t = Primitive.rectWH(x,y,width,height,clr);
this.triangles = this.triangles.concat(t); 
}

polygon(x :number=50,y :number=50, width :number= 10,height :number=20,steps :number= 60,clr :ClrObj){
const t = Primitive.polygon(x,y, width,height,steps,clr);
this.triangles = this.triangles.concat(t); 
}
//////////////////////////////////////
public getDb():TriangleFifteen[]{
return this.triangles;
}
//////////////////////////////////////
//////////////////////////////////////
}