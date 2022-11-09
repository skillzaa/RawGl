import AssetBuilder from "../assetBuilder/assetBuilder.js";
import ClrObj from "../color/clrObj.js";
import getClrObj from "../color/getClrObj.js";
import TriContComp from "../facade/ContainerComp.js";

export default class Sq2H extends AssetBuilder {
constructor(x:number=0,y:number=0,width:number=100,height:number=100){
super(x,y,width,height);
}
/////////////////////////////////////////////
getAsset():TriContComp{
//-------------------------------------------------------|
this.add.rect(0,0,  50,0, 50,50, this.palette.color[1]);      
// this.add.rectWH(0,50,100,100,this.palette.color[2]);
//-------------------------------------------------------
return super.getAsset();    
}
/////////////////////////////////////////////
}
