import TriangleData from "../triangleData.js";
import Point from "../../core/pointFns/vertex.js";
import lerp from "../../core/pointFns/lerp.js";

////////////////////////////////////////////////////

export default function CurveQuad(x1 :number,y1:number,x2 :number,y2:number,x3 :number,y3:number,width:number=5,height:number=5,gap:number=1):TriangleData[]{
if (gap < 1){throw new Error("gap value can not be less than 1");}
gap = gap/100;
const p1 = new Point( x1 , y1 );   
const p2 = new Point( x2 , y2 );   
const p3 = new Point( x3 , y3 );   
const ret:TriangleData[] = []; 
//---------------------------------------
for (let t = 0; t < 1; t += gap) {

const x1Calc = lerp(p1.x,p2.x,t); //   p0.x + (p1.x - p0.x ) * t;    
const y1Calc = lerp(p1.y,p2.y,t); //   p0.y + (p1.y - p0.y ) * t;

const x2Calc = lerp(p2.x,p3.x,t);
const y2Calc = lerp(p2.y,p3.y,t);

const x = lerp ( x1Calc , x2Calc , t );
const y = lerp ( y1Calc , y2Calc , t );

////////////////////////////////////////////////////
const tri1 = new TriangleData(x,y, x+width,y, x+width,y+height);    
const tri2 = new TriangleData(x+width,y+height, x,y+height, x,y);    

ret.push(tri1);
ret.push(tri2);

}

return ret;            
}


// const vertices = [
//   //x      y           width       red , green , blue    
//    25,     50,         25,          1.0, 0.0,     0.0,
//    50,     50,         50,          1.0, 0.0,     0.0,
//    75,     50,         75,          1.0, 0.0,     0.0,
//   ];
// export default function getFullLine (cpy :number,pointSize=5):number[]{
// const retArray = []; 
// const p0 = new Point(0,50);   
// const p1 = new Point( 50 , cpy);   
// const p2 = new Point(100,50);   

// for (let t = 0; t <= 1; t += 0.01) {

// const x1 = lerp(p0.x,p1.x,t); //   p0.x + (p1.x - p0.x ) * t;    
// const y1 = lerp(p0.y,p1.y,t); //   p0.y + (p1.y - p0.y ) * t;

// const x2 = lerp(p1.x,p2.x,t);
// const y2 = lerp(p1.y,p2.y,t);

// const x = lerp ( x1 , x2 , t );
// const y = lerp ( y1 , y2 , t );

//     // console.log("x",x);
// retArray.push(perc2glCoord(x));    
// retArray.push(perc2glCoord(y));    

// retArray.push( pointSize ); 

//         retArray.push( 1 );    
//         retArray.push( 0 );    
//         retArray.push( 0 );    
// }

// return  retArray;
// }