import TriangleFifteen from "./triangleFifteen.js";
import { ClrObj } from "../assets.js";
import {TriContainer} from "../assets.js";

/**
 * FiveFifteenDb allow us to add triangles with a clrObj ref, this ref values can be changed and once uploadData happens it happens with the changed colors.
 * FiveFifteenDb - Also provides interface for adding primtives into it. We can give primtives a seperate class and add then here as "add" object.
 */
export default class FiveFifteenDb {

private triangles :TriangleFifteen[];    
constructor(){
this.triangles = [];    
}
/**This is very important function-Entries from this fn will go to triContainer addTri method */
public addTri(x1 :number,y1:number,x2:number,y2:number,x3:number,y3:number,clr: ClrObj){
///////////////---------vertex 1
const tri = new TriangleFifteen(x1,y1,x2,y2,x3,y3,clr);
this.triangles.push(tri);
}
    
///////////////////////////////////////////    
public  addRect(x :number,y:number,width:number=30,height:number=20,clr :ClrObj){
this.addTri(x,y, x+width,y, x+width,y+height,clr);    
this.addTri(x+width,y+height, x,y+height, x,y,clr);
}
public  addRectVer(x1 :number,y1:number,x2 :number,y2:number,x3 :number,y3:number,x4 :number,y4:number,clr :ClrObj){
    this.addTri( x1,y1, x2,y2, x3,y3, clr);
    this.addTri( x3,y3, x2,y2, x1,y1, clr);
}
public  addDiagonal(y1 :number = 0, y2 :number =100,lineWidth :number=4,clr :ClrObj ){
    this.addTri( 0,y1 - lineWidth,  0,y1,   100,y2, clr);
    this.addTri( 100,y2,  100,y2 - lineWidth,   0,y1 - lineWidth, clr);
}
///////////////////////////////////////////////////
private uploadData(ctc :TriContainer):TriContainer{
    for (let i = 0; i < this.triangles.length; i++) {
        const t = this.triangles[i];
/////////////////////////////
            ctc.addTri(t.x1(),t.y1(),t.x2(),t.y2(),
            t.x3(),t.y3(),t.r(),t.g(),t.b());   
    }     
return ctc;    
}
///////////////////////////////////////////    
}