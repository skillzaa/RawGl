import ClrObj  from "../../color/clrObj.js";
import TriangleFifteen from "../../formats/triangleFifteen.js";

 

export default function tri(x1 :number,y1:number,x2 :number,y2:number,x3 :number,y3:number,clr :ClrObj):TriangleFifteen[]{
const ret:TriangleFifteen[] = [];    
const tri1 = new TriangleFifteen(x1,y1, x2,y2, x3,y3, clr);    
ret.push(tri1);  
return ret;    
        
        
}