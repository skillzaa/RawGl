import Primitive from "../primtives/primitives.js";
import ClrObj from "../color/clrObj.js";
import TriContCompBase from "../core/triContComp.js";
import TriangleFifteen from "../formats/triangleFifteen.js";
import upload515ToTriCont from "../formats/upload515ToTriCont.js";
///////////////////////////////////////////////

///////////////////////////////////////////////
export default class Add {
private theComp :TriContCompBase;
constructor(theComp :TriContCompBase){
this.theComp = theComp;
}

tri(x1 :number,y1:number,x2 :number,y2:number,x3 :number,y3:number,clr :ClrObj){
const t = Primitive.tri(x1,y1,x2,y2,x3,y3,clr);
this.upload(t);
}

diagonal(x1 :number, y1:number, x2 :number,y2:number,lineWidth:number,clr :ClrObj){
const t = Primitive.diagonal(x1, y1, x2,y2,lineWidth,clr);
this.upload(t); 
}

rect(x1 :number,y1:number,x2 :number,y2:number,x3 :number,y3:number,clr :ClrObj){
const t = Primitive.rect(x1,y1,x2,y2,x3,y3,clr);
this.upload(t); 
}

rectWH(x :number,y:number,width:number,height:number,clr :ClrObj){
const t = Primitive.rectWH(x,y,width,height,clr);
this.upload(t); 
}

polygon(x :number=50,y :number=50, width :number= 10,height :number=20,steps :number= 60,clr :ClrObj){
const t = Primitive.polygon(x,y, width,height,steps,clr);
this.upload(t); 
}
//////////////////////////////////////
// public getDb():TriangleFifteen[]{
// return this.triangles;
// }
//////////////////////////////////////
private upload(tri :TriangleFifteen[]){
    upload515ToTriCont(tri,this.theComp);
}
//////////////////////////////////////
}