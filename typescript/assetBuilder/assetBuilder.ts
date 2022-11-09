import TriContComp from "../core/coreContainerComp.js";;

import Add from "../addObj/add.js";
import IAssetBuilder from "./IAssetBuilder.js";
/**  
The AssetBuilder takes in instructions and spits out a TriCont Comp filled with given shapes.
*/
export default class AssetBuilder implements IAssetBuilder{

public x :number;
public y :number;
public width :number;
public height :number;
//----------------
public add :Add; //add is a database here
//////////////////////////////////////////////////
constructor(x:number=0,y:number=0,width:number=100,height:number=100){

this.add = new Add();
//--------------------------------------------------
this.x = x;
this.y = y;
this.width = width;
this.height = height;
//----------
}

getAsset():TriContComp{
const  ctc = new TriContComp(this.x,this.y,this.width,this.height);
ctc.setData(this.add.get515Triangles());
return ctc;
}
////////////////////////////////////////
}