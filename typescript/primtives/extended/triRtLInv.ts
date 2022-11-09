import TriangleData from "../triangleData.js";

 
export default function triRtLInv (x :number,y:number,width :number,height:number):TriangleData[]{

const ret:TriangleData[] = [];    
const tri1 = new TriangleData(
    x,              y, 
    x,              y + height,
    x + width,      y + height
    );    
ret.push(tri1);  
return ret;    
        
        
}

// x,                      y, 
// x - width,              y,
// x - width,              y - height,