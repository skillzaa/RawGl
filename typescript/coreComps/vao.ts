



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
public addRectangle(x :number,y:number,width:number=30,height:number=20,r:number=1,g:number=0,b:number=0){
    this.addTriangle( x,y, x+width,y, x+width,y+height, r,g,b);
    this.addTriangle( x+width,y+height, x,y+height, x,y, r,g,b);

    // this.bgVertices.addTriangle(100,100,0,100,0,0,  this.colorBackground.r(),this.colorBackground.g(),this.colorBackground.b());    
    


}

public getVertices():number[]{
    return this.vertices;
}
public concat(vao :VAO):void{
this.vertices = this.vertices.concat(vao.getVertices());
}

}