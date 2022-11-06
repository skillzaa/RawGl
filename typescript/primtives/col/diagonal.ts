import ClrObj  from "../../color/clrObj.js";
import TriangleFifteen from "../../formats/triangleFifteen.js";

 

export default function diagonal(x1 :number, y1:number, x2 :number,y2:number,lineWidth:number,clr :ClrObj):TriangleFifteen[]{

const ret:TriangleFifteen[] = [];    

const tri1 = new TriangleFifteen(
    x1,(y1 + lineWidth), 
    x1,(y1 - lineWidth), 

    x2,(y2 - lineWidth), 
    clr);    

const tri2 = new TriangleFifteen(
    x2,(y2 - lineWidth), 
    x2,(y2 + lineWidth), 

    x1,(y1 + lineWidth), 
    clr);    
    
ret.push(tri1);  
ret.push(tri2);  
return ret;    
// this.tri( 0,y1,     0,y1 - lineWidth,       100,y2,     clr);
// this.tri( 100,y2,  100,y2-lineWidth,   0,y1-lineWidth , clr);
        
}