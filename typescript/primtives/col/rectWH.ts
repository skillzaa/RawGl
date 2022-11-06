import { ClrObj } from "../../moduleAssets/assets.js";
import TriangleFifteen from "../../formats/triangleFifteen.js";

 

export default function rectWH(x :number,y:number,width:number,height:number,clr :ClrObj):TriangleFifteen[]{
const ret:TriangleFifteen[] = [];    
const tri1 = new TriangleFifteen(x,y, x+width,y, x+width,y+height,clr);    
const tri2 = new TriangleFifteen(x+width,y+height, x,y+height, x,y,clr);    
ret.push(tri1);  
ret.push(tri2);  
return ret;            
}