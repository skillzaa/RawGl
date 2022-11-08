import AssetBuilder from "../assetBuilder/assetBuilder.js";
import ClrObj from "../color/clrObj.js";
import getClrObj from "../color/getClrObj.js";
import TriContComp from "../facade/triCont.js";

export default class Sq2x2 extends AssetBuilder {
constructor(x:number=0,y:number=0,width:number=100,height:number=100){
super(x,y,width,height);
}
/////////////////////////////////////////////
getAsset():TriContComp{
//--------------------------
this.add.rectWH(0,0, 100,5, getClrObj(1));

// this.add.tri(0,0, 100,0, 100,100,  getClrObj(1));

// this.add.rectWH(0,50,50,50,         this.palette.color[2]);
// this.add.rectWH(0,0,50,50,          this.palette.color[3]);
// this.add.rectWH(50,0,50,50,         this.palette.color[4]);
//-------------------------------------
return super.getAsset();    
}
/////////////////////////////////////////////
}
