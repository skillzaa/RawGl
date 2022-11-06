import { ClrObj } from "../../moduleAssets/assets.js";
import TriangleFifteen from "../../formats/triangleFifteen.js";

 

export default function triRtR(x1 :number,y1:number,width :number,height:number,clr :ClrObj):TriangleFifteen[]{

const ret:TriangleFifteen[] = [];    

const tri1 = new TriangleFifteen(x1,y1, x1+width,y1, x1+width,y1+height, clr);    
ret.push(tri1);  
return ret;    
        
        
}