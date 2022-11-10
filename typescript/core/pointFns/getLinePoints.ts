import perc2glCoord from "../perc2glCoord.js";


// const vertices = [
//   //x      y           width       red , green , blue    
//    25,     50,         25,          1.0, 0.0,     0.0,
//    50,     50,         50,          1.0, 0.0,     0.0,
//    75,     50,         75,          1.0, 0.0,     0.0,
//   ];
export default function getLinePoints (x1 :number=0,x2:number=100, gap:number=10):number[]{
const retArray = [];    
const delta  = x2-x1;

const steps = 100/gap;
for (let i = 0; i < steps; i++) {
const x = x1 + (delta/100 * i);  

retArray.push(perc2glCoord(x));    
retArray.push(perc2glCoord(50));    

retArray.push( 20 );    
retArray.push( 1 );    
retArray.push( 0 );    
retArray.push( 0 );    
}

return  retArray;
}