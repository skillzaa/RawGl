import CoreTriContainer from "../coreComps/coreTriContainer.js";
import ColorObj from "../coreComps/colorObj.js";
import VAO from "../coreComps/vao.js";
/**
 * The AssetBuilder takes in instructions and spits out a CoreTriContainer filled with given shapes
 */


export default class AssetBuilder {
public showBackground :boolean;
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
this.colorBackground =  new ColorObj(0.2,0.2,0.2);   
this.vertices = new VAO();
this.bgVertices = new VAO();
this.x = x;
this.y = y;
this.width = width;
this.height = height;
}


setColorBackground(r:number=0,g:number=0,b:number=0){
this.colorBackground = new ColorObj(r,g,b);    
}

getAsset(gl :WebGL2RenderingContext):CoreTriContainer{
const  ctc = new CoreTriContainer(this.x,this.y,this.width,this.height);
if (this.showBackground == true){

this.bgVertices.addTriangle(0,0,100,0,100,100,  this.colorBackground.r(),this.colorBackground.g(),this.colorBackground.b());

this.bgVertices.addTriangle(100,100,0,100,0,0,  this.colorBackground.r(),this.colorBackground.g(),this.colorBackground.b());    
//-----------
ctc.vertices.concat(this.bgVertices);
}
//------------
ctc.vertices.concat(this.vertices);
// ctc.setVAO(this.vertices);
return ctc;
}

}