import Primitive from "../primtives/primitives.js";
// Primtives return data in TriangleData
import TriangleData from "../primtives/triangleData.js";
import TriangleDataWColor from "./triangleDataWColor.js";
///////////////////////////////////////////////
// There are 2 tirangle formats since the Primtives dont care about color they just return triangle vertex thus we add colors here bu inserting TriangleData into TriangleDataWColor. 
// Simple we get r,g,b but we dont send that to Primtives module and that made Primtives module very simple. 
///////////////////////////////////////////////
export default class Add {
private triangles :TriangleDataWColor[];
constructor(){
this.triangles = [];
}

tri(x1 :number,y1:number,x2 :number,y2:number,x3 :number,y3:number,r :number=0, g :number=0, b :number=0){
const t = Primitive.tri(x1,y1,x2,y2,x3,y3);
this.save(t,r,g,b);
}

diagonal(x1 :number, y1:number, x2 :number,y2:number,lineWidth:number,r :number=0, g :number=0, b :number=0){
const t = Primitive.diagonal(x1, y1, x2,y2,lineWidth );
this.save(t ,r,g,b); 
}

rect(x1 :number,y1:number,x2 :number,y2:number,x3 :number,y3:number,r :number=0, g :number=0, b :number=0){
const t = Primitive.rect(x1,y1,x2,y2,x3,y3);
this.save(t ,r,g,b); 
}

rectWH(x :number,y:number,width:number,height:number,r :number=0, g :number=0, b :number=0){
const t = Primitive.rectWH(x,y,width,height );
this.save(t ,r,g,b); 
}

polygon(x :number=50,y :number=50, width :number= 10,height :number=20,steps :number= 60,r :number=0, g :number=0, b :number=0){
const t = Primitive.polygon(x,y, width,height,steps );
this.save(t ,r,g,b); 
}
////////////////////////////////////////////////////////
public getTriangles():TriangleDataWColor[]{
return this.triangles;    
}

//XX//XX//XX//XX//XX//XX//XX//XX//XX//XX//XX//XX//XX//XX//XX//XX    
//-----------very important code
//XX//XX//XX//XX//XX//XX//XX//XX//XX//XX//XX//XX//XX//XX//XX//XX 
/**
 * getGlTriangles is the main method which insert data into comp. Each and every other triangle into comp must go through this format.
 * Every Triangle has 15 data points 5 for each vertex.
 * Array index 0-14
 * Private so that I can only use it with expect-error
 */

public get515Triangles():number[]{
const retNmbArr:number[] = [];
for (let i = 0; i < this.triangles.length; i++) {
    const tri = this.triangles[i];
    //-------- first vertex
    retNmbArr.push(tri.x1());
    retNmbArr.push(tri.y1());
    retNmbArr.push(tri.r());
    retNmbArr.push(tri.g());
    retNmbArr.push(tri.b());
    //-------- Second vertex
    retNmbArr.push(tri.x2());
    retNmbArr.push(tri.y2());
    retNmbArr.push(tri.r());
    retNmbArr.push(tri.g());
    retNmbArr.push(tri.b());
    //-------- Third vertex
    retNmbArr.push(tri.x3());
    retNmbArr.push(tri.y3());
    retNmbArr.push(tri.r());
    retNmbArr.push(tri.g());
    retNmbArr.push(tri.b());
}    
return retNmbArr;
}
//XX//XX//XX//XX//XX//XX//XX//XX//XX//XX//XX//XX//XX//XX//XX//XX    
//XX//XX//XX//XX//XX//XX//XX//XX//XX//XX//XX//XX//XX//XX//XX//XX      

private save(incommingTri :TriangleData[],r :number, g :number, b :number){
        for (let i = 0; i < incommingTri.length; i++) {
            const tri = incommingTri[i];
        const triWColor = new TriangleDataWColor(
            tri.x1(), tri.y1(),
            tri.x2(), tri.y2(),
            tri.x3(), tri.y3(),
            r,g,b);    
        //---here we add this to our main array    
        this.triangles.push(triWColor);    
        }
}
//////////////////////////////////////
// private addGlTri(x1 :number,y1:number,x2:number,y2:number,x3:number,y3:number,r:number=1,g:number=0,b:number=0){
// ///Following is placed for testing to cut off RGB    
// // r=1;g=0;b=0;    
// ///////////////---------vertex 1
// this.vertices.push((x1));
// this.vertices.push((y1));  
// this.vertices.push((r));  
// this.vertices.push((g));  
// this.vertices.push((b));  
// ///////////////---------vertex 2
// this.vertices.push((x2));
// this.vertices.push((y2));  
// this.vertices.push((r));  
// this.vertices.push((g));  
// this.vertices.push((b));
// ///////////////---------vertex 3
// this.vertices.push((x3));
// this.vertices.push((y3));  
// this.vertices.push((r));  
// this.vertices.push((g));  
// this.vertices.push((b));  
// }

//////////////////////////////////////
}