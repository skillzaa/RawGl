

/**
 * invT = (1 - t)
P = P1 * invT^3 +
    P2 * 3 * t * invT^2 +
    P3 * 3 * invT * t^2 +
    P4 * t^3
 */
export default function bezier(t :number , initial :number , p1 :number, p2 :number, final :number){
    return (1 - t) * (1 - t) * (1 - t) * initial
            +
            3 * (1 - t) * (1 - t) * t * p1
            +
            3 * (1 - t) * t * t * p2
            +
            t * t * t * final;
    
}
    
export function bezier02(t :number , P1 :number , P2 :number, P3 :number, P4 :number):number{
const invT = (1 - t)
const P = P1 * invT^3 +
    P2 * 3 * t * invT^2 +
    P3 * 3 * invT * t^2 +
    P4 * t^3;
return P;
}

export function lerp(pt1 :number,pt2 :number, t :number):number{
if (t > 1 ){throw new Error("t can not be greater than 1 in a lerp function");}    
return pt1 + ( (pt2 - pt1) * t);     

}