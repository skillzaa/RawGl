import CoreTriContainer from "../coreComps/coreTriContainer.js";
import ColorObj from "../coreComps/colorObj.js";
import VAO from "../coreComps/vao.js";
/**
 * The AssetBuilder takes in instructions and spits out a CoreTriContainer filled with given shapes
 */


export default class AssetBuilder {
public showBackground :boolean;
public color : ColorObj;
public colorBackground : ColorObj;
public x :number;
public y :number;
public width :number;
public height :number;
//----------------
public vertices :VAO;
public bgVertices :VAO;
//----------------
constructor(x:number=0, y:number= 0,width:number= 20,height:number=20){
    this.showBackground = true;
this.color = new ColorObj(0.9,0.9,0.9);
this.colorBackground =  new ColorObj(0.2,0.2,0.2);   
this.vertices = new VAO();
this.bgVertices = new VAO();
this.x = x;
this.y = y;
this.width = width;
this.height = height;
}

getAsset(gl :WebGL2RenderingContext):CoreTriContainer{
const  ctc = new CoreTriContainer(gl,this.x,this.y,this.width,this.height);
if (this.showBackground == true){
this.bgVertices.addTriangle(0,0,100,0,100,100,  1,0,0);
this.bgVertices.addTriangle(100,100,0,100,0,0,  0,1,0);    
}
//------------
ctc.setBgVertices(this.bgVertices);
ctc.setVertices(this.vertices);
return ctc;
}

}