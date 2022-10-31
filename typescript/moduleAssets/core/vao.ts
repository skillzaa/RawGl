
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
public addTriangle(x1 :number,y1:number,x2:number,y2:number,x3:number,y3:number,r:number=1,g:number=0,b:number=0){
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
public addRectangle(x :number,y:number,width:number=30,height:number=20,r:number=1,g:number=0,b:number=0){
    this.addTriangle( x,y, x+width,y, x+width,y+height, r,g,b);
    this.addTriangle( x+width,y+height, x,y+height, x,y, r,g,b);
}

public getVertices():number[]{
    return this.vertices;
}
public concat(vao :VAO):void{
this.vertices = this.vertices.concat(vao.getVertices());
}

}