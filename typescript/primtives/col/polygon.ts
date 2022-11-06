import ClrObj  from "../../color/clrObj.js";

import TriangleFifteen from "../../formats/triangleFifteen.js";

 

export default function polygon(x :number=50,y :number=50, width :number= 10,height :number=20,steps :number= 60,clr :ClrObj):TriangleFifteen[]{

if (steps < 3){throw new Error("steps can not be less than 3");}

const stepSlice = (360/steps);
const ret:TriangleFifteen[] = [];    

for (let i = 0; i < steps; i++) {
    const sangle = i * stepSlice;
    const eangle = sangle + stepSlice;
    //     this.getCircleTri(gl,sangle, eangle);    
    const tri   = getCircleTri(x,y,width,height,sangle,eangle,clr); 
    ret.push(tri);  
}
return ret;    
        
}

//////////////////////////////////////////////////////////////
function getCircleTri(x:number,y:number,width :number, height :number=1,startAngle :number, endAngle :number,clr :ClrObj):TriangleFifteen{
    
const angle2rad = Math.PI/180;     

const x1 = width * Math.cos(angle2rad * startAngle);
const y1 = height * Math.sin(angle2rad * startAngle);

const x2 =  width * Math.cos(angle2rad * endAngle );
const y2 = height * Math.sin(angle2rad * endAngle );

const tri = new TriangleFifteen(
    x          , y,
    x + x1     , y + y1,
    x + x2     , y + y2,
    clr
); 
return tri;
}


