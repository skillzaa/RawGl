import AssetBuilder from "../assetBuilder/assetBuilder.js";
import ClrObj from "../color/clrObj.js";
import getClrObj from "../color/getClrObj.js";
import TriContComp from "../core/triContComp.js";
////////////////////////////////////////////////////////////
export default class SqV extends AssetBuilder {
public clrSq2 :ClrObj;
constructor(x:number=0,y:number=0,width:number=100,height:number=100){
super(x,y,width,height);
this.clrSq2 = getClrObj(0,0,0);
}
/////////////////////////////////////////////
getAsset():TriContComp{
//--------------------------
this.add.rectWH(0,0,50,100,  this.palette.color[1]);
this.add.rectWH(50,0,50,100, this.palette.color[2]);
//-------------------------------------
return super.getAsset();    
}
/////////////////////////////////////////////
}
