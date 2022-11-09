import TriangleData from "../triangleData.js";

///////////////////////////////////////////////////////////////
export default function diagonal(x1 :number, y1:number, x2 :number,y2:number,lineWidth:number):TriangleData[]{

const ret:TriangleData[] = [];    

const tri1 = new TriangleData(
    x1,(y1 + lineWidth), 
    x1,(y1 - lineWidth), 

    x2,(y2 - lineWidth) 
    );    

const tri2 = new TriangleData(
    x2,(y2 - lineWidth), 
    x2,(y2 + lineWidth), 

    x1,(y1 + lineWidth)
    );    
    
ret.push(tri1);  
ret.push(tri2);  
return ret;    
}