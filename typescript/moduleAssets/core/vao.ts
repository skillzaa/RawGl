
/**
 * VAO Vertex Array Object :
 */
export default class VAO {
private vertices :number[];
constructor(){
this.vertices = []
}

/**
 * addTriangle is the main method which insert data into table. Each and every other method (addRectangle, addCircle, addPlus) must call this method (internally).
 * Every Triangle has 15 data points 5 for each vertex.
 * Array index 0-14
 */
public addTri(x1 :number,y1:number,x2:number,y2:number,x3:number,y3:number,r:number=1,g:number=0,b:number=0){
///Following is placed for testing to cut off RGB    
// r=1;g=0;b=0;    
///////////////---------vertex 1
this.vertices.push((x1));
this.vertices.push((y1));  
this.vertices.push((r));  
this.vertices.push((g));  
this.vertices.push((b));  
///////////////---------vertex 2
this.vertices.push((x2));
this.vertices.push((y2));  
this.vertices.push((r));  
this.vertices.push((g));  
this.vertices.push((b));
///////////////---------vertex 3
this.vertices.push((x3));
this.vertices.push((y3));  
this.vertices.push((r));  
this.vertices.push((g));  
this.vertices.push((b));  
}
public addRect(x :number,y:number,width:number=30,height:number=20,r:number=1,g:number=0,b:number=0){
    this.addTri( x,y, x+width,y, x+width,y+height, r,g,b);
    this.addTri( x+width,y+height, x,y+height, x,y, r,g,b);
}
public addRectVer(x1 :number,y1:number,x2 :number,y2:number,x3 :number,y3:number,x4 :number,y4:number,r:number=1,g:number=0,b:number=0){

    this.addTri( x1,y1, x2,y2, x3,y3, r,g,b);
    this.addTri( x3,y3, x2,y2, x1,y1, r,g,b);
}
public addDiagonal(y1 :number = 0, y2 :number =100,lineWidth :number=4,r:number=1,g:number=0,b:number=0 ){
//=========================
this.addTri( 0,y1 - lineWidth,  0,y1,   100,y2, r,g,b);
this.addTri( 100,y2,  100,y2 - lineWidth,   0,y1 - lineWidth, r,g,b);
}

public getVertices():number[]{
    return this.vertices;
}
public concat(vao :VAO):void{
this.vertices = this.vertices.concat(vao.getVertices());
}

}