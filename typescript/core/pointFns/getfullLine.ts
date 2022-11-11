import perc2glCoord from "../perc2glCoord.js";
import Point from "./vertex.js";
import lerp from "./lerp.js";
// const vertices = [
//   //x      y           width       red , green , blue    
//    25,     50,         25,          1.0, 0.0,     0.0,
//    50,     50,         50,          1.0, 0.0,     0.0,
//    75,     50,         75,          1.0, 0.0,     0.0,
//   ];
export default function getFullLine (cpy :number,pointSize=5):number[]{
const retArray = []; 
const p0 = new Point(0,50);   
const p1 = new Point( 50 , cpy);   
const p2 = new Point(100,50);   

for (let t = 0; t <= 1; t += 0.01) {

const x1 = lerp(p0.x,p1.x,t); //   p0.x + (p1.x - p0.x ) * t;    
const y1 = lerp(p0.y,p1.y,t); //   p0.y + (p1.y - p0.y ) * t;

const x2 = lerp(p1.x,p2.x,t);
const y2 = lerp(p1.y,p2.y,t);

const x = lerp ( x1 , x2 , t );
const y = lerp ( y1 , y2 , t );

    // console.log("x",x);
retArray.push(perc2glCoord(x));    
retArray.push(perc2glCoord(y));    

retArray.push( pointSize ); 

        retArray.push( 1 );    
        retArray.push( 0 );    
        retArray.push( 0 );    
}

return  retArray;
}