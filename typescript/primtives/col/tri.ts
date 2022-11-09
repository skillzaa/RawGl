import TriangleData from "../triangleData.js";
 

export default function tri(x1 :number,y1:number,x2 :number,y2:number,x3 :number,y3:number):TriangleData[]{

const ret:TriangleData[] = [];    
const tri1 = new TriangleData(x1,y1, x2,y2, x3,y3);    
ret.push(tri1);  
return ret;    
        
        
}