


export default function lerp(pt0 :number,pt1 :number, t :number):number{
    if (t > 1 || t < 0 ){throw new Error("t can not be less than zero or greater than one in a lerp function");}    
    return pt0 + ( (pt1 - pt0) * t);     
    
    }