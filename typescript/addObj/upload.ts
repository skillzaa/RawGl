import BaseTriComp from "../core/baseComp.js";
import TriangleFifteen from "./triangleFifteen.js";

/**
* The primtive functions just return 515 objects where as TriContainer  takes in number[] thought its one-and-only "addTri" method.
* This function is tie-up
*/

export default function upload515ToTriCont(triangles:TriangleFifteen[],ctc :BaseTriComp):BaseTriComp{
    for (let i = 0; i < triangles.length; i++) {
        const t = triangles[i];
/////////////////////////////
            ctc.addTri(t.x1(),t.y1(),t.x2(),t.y2(),
            t.x3(),t.y3(),t.r(),t.g(),t.b());   
    }     
return ctc;    
}