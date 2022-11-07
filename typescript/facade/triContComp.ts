import TriContCompBase from "../core/triContComp.js";
import Add from "./add.js";


////////////////////////////////////////////////////////////
export default class TriContComp  extends TriContCompBase{
// private theComp :TriContCompBase;
public add :Add;
constructor(x:number= 25,y:number= 25,width:number= 50,height:number= 50){
super(x,y,width,height);
// this.theComp = new TriContCompBase(x,y,width,height);
this.add = new Add(this);

}
// getComp():TriContCompBase{
// return this.theComp;
// }
// public init (gl :WebGL2RenderingContext){
// this.theComp.init(gl);    
// }
// public update (gl :WebGL2RenderingContext){
// this.theComp.update(gl);    
// }
// public draw (gl :WebGL2RenderingContext){
// this.theComp.draw(gl);    
// }

// public addTri(x1 :number,y1:number,x2:number,y2:number,x3:number,y3:number,r:number,g:number,b:number):void{
// this.theComp.addTri(x1,y1,x2,y2,x3,y3,r,g,b);
// }










}