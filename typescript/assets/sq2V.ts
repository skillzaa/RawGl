import AssetBuilder from "../assetBuilder/assetBuilder.js";
import ClrObj from "../color/clrObj.js";
import CoreContainerComp from "../core/coreContainerComp.js";
////////////////////////////////////////////////////////////
export default class Sq2V extends AssetBuilder {
    public sq1Color :ClrObj;
    public sq2Color :ClrObj;
////////////////////////////////////////////////////////////
constructor(x:number=0,y:number=0,width:number=100,height:number=100){
super(x,y,width,height);
this.sq1Color = new ClrObj(1,0,0);
this.sq2Color = new ClrObj(0,1,0);
}
///////////////////////////////////////////////////////////
getAsset():CoreContainerComp{
//--------------------------
this.add.rectWH(0,0,50,100,  
    this.sq1Color.r(),this.sq1Color.g(),this.sq1Color.b());

this.add.rectWH(50,0,50,100, 
    this.sq2Color.r(),this.sq2Color.g(),this.sq2Color.b());
//-------------------------------------
return super.getAsset();    
}
/////////////////////////////////////////////
}
