import TriangleFifteen from "../primtives/triangleFifteen.js";


/////////////////////////////////////////////////////////////

export default function firve15To26(five15 :TriangleFifteen[]):number[]{
    let xy :number[] = [];
    for (let i = 0; i < five15.length; i++) {
        xy.push(five15[i].x1());
        xy.push(five15[i].y1());
        xy.push(five15[i].x2());
        xy.push(five15[i].y2());
        xy.push(five15[i].x3());
        xy.push(five15[i].y3());
        
    }
return xy;    
}
