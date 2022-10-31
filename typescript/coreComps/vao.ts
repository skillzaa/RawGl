



export default class VAO {
private vertices :number[];
constructor(){
this.vertices = []
}

// public addRectangle(x :number,y :number,width :number,height :number,r:number=0,g:number=0,b:number=0){
// this.addTriangle(x,y,    x+width,y,   x + width,y+height, r,g,b);
// }

public addTriangle(x1 :number,y1:number,x2:number,y2:number,x3:number,y3:number,r:number=1,g:number=0,b:number=0){
// r=1;g=0;b=0;    ///was placed for testing
///////////////---------x1
this.vertices.push((x1));
this.vertices.push((y1));  
this.vertices.push((r));  
this.vertices.push((g));  
this.vertices.push((b));  

this.vertices.push((x2));
this.vertices.push((y2));  
this.vertices.push((r));  
this.vertices.push((g));  
this.vertices.push((b));


this.vertices.push((x3));
this.vertices.push((y3));  
this.vertices.push((r));  
this.vertices.push((g));  
this.vertices.push((b));  

}
// public unShiftTriangle(x1 :number,y1:number,x2:number,y2:number,x3:number,y3:number,r:number=1,g:number=0,b:number=0){
// // r=1;g=0;b=0;    ///was placed for testing
// ///////////////---------x1
// this.vertices.unshift((x1));
// this.vertices.unshift((y1));  
// this.vertices.unshift((r));  
// this.vertices.unshift((g));  
// this.vertices.unshift((b));  

// this.vertices.unshift((x2));
// this.vertices.unshift((y2));  
// this.vertices.unshift((r));  
// this.vertices.unshift((g));  
// this.vertices.unshift((b));


// this.vertices.unshift((x3));
// this.vertices.unshift((y3));  
// this.vertices.unshift((r));  
// this.vertices.unshift((g));  
// this.vertices.unshift((b));  

// }

public getVertices():number[]{
    return this.vertices;
}
public concat(vao :VAO):void{
this.vertices = this.vertices.concat(vao.getVertices());
}

}