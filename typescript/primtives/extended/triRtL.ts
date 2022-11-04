import { ClrObj } from "../../moduleAssets/assets.js";
import TriangleFifteen from "../triangleFifteen.js";

 
export default function triRtL (x :number,y:number,width :number,height:number,clr :ClrObj):TriangleFifteen[]{

const ret:TriangleFifteen[] = [];    
const tri1 = new TriangleFifteen(
    x,                      y, 
    x - width,              y,
    x - width,              y + height, 
    clr
    );    
ret.push(tri1);  
return ret;    
        
        
}