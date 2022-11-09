
import TriangleData from "../triangleData.js";

/////////////////////////////////////////////////////
 
export default function triRtR(x1 :number,y1:number,width :number,height:number):TriangleData[]{

const ret:TriangleData[] = [];    

const tri1 = new TriangleData(x1,y1, x1+width,y1, x1+width,y1+height);    
ret.push(tri1);  
return ret;    
                
}