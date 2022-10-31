import TriContainer from "./triContainer.js";
import VAO from "./core/vao.js";
import ClrObj from "./core/clrObj.js";

/**
 * The AssetBuilder takes in instructions and spits out a CoreTriContainer filled with given shapes
*/

export default class AssetBuilder {
public showBackground :boolean;
public x :number;
public y :number;
public width :number;
public height :number;
public clrMain :ClrObj;
public clrBg :ClrObj;
//----------------
public vertices :VAO;
public bgVertices :VAO;
//////////////////////////////////////////////////
constructor(x:number=0,y:number=0,width:number=100,height:number=100,clrBg :ClrObj| null=null,clrMain:ClrObj| null=null){

//white-default main
if (clrMain == null){clrMain = new ClrObj(1,1,1);}
//black-default main
if (clrBg == null){clrBg = new ClrObj(0,0,0);}
//--------------------------------------------------
this.clrMain = clrMain;
this.clrBg = clrBg;
//--------------------------------------------------
this.showBackground = true;
this.vertices = new VAO();
this.bgVertices = new VAO();
//--------------------------------------------------
this.x = x;
this.y = y;
this.width = width;
this.height = height;
}


setClrBg(r:number=0,g:number=0,b:number=0){
this.clrBg = new ClrObj(r,g,b);    
}

getAsset():TriContainer{
const  ctc = new TriContainer(this.x,this.y,this.width,this.height);
if (this.showBackground == true){

this.bgVertices.addRectangle(0,0,100,100,  this.clrBg.r(),this.clrBg.g(),this.clrBg.b());

//-----------Add back gr vertices
ctc.vertices.concat(this.bgVertices);
}
//------------
ctc.vertices.concat(this.vertices);
// ctc.setVAO(this.vertices);
return ctc;
}
setClrIfNull(clrobj :ClrObj | null,r:number,g:number,b:number):ClrObj{
if (clrobj == null){
    clrobj = new ClrObj(r,g,b);
}
return clrobj;
}
}