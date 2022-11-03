import { ClrObj } from "../../moduleAssets/assets.js";
import TriangleFifteen from "../triangleFifteen.js";
//////////////////////////////////////////////////////////
///====================================================== 
export default function rect(x1 :number,y1:number,x2 :number,y2:number,x3 :number,y3:number,clr :ClrObj):TriangleFifteen[]{
const ret:TriangleFifteen[] = [];    
const tri1 = new TriangleFifteen(x1,y1, x2,y2, x3,y3, clr);    
const tri2 = new TriangleFifteen(x3,y3, x1,y3, x1,y1, clr);    
ret.push(tri1);  
ret.push(tri2);  
return ret;    
        
        
}