import AssetBuilder from "../assetBuilder/assetBuilder.js";
import ClrObj from "../color/clrObj.js";
import CoreContainerComp from "../core/coreContainerComp.js";
////////////////////////////////////////////////////////////////


export default class Mountains extends AssetBuilder {

public color : ClrObj;

//////////////////////////////////////////////    
constructor(x:number=10,y:number=40,width:number= 30,height:number=50){
super(x,y,width,height);
this.color = new ClrObj(1,0,0);
}
/////////////////////////////////////////////
getAsset():CoreContainerComp{
//-------------------------------------------------------|
this.add.rectWH(0,0,100,100,   0,0,1);
this.add.curveQuad(10,10,   50,100,           97,10,      
    2,4.5,      1,0,0,   0.2);

//-------------------------------------------------------
return super.getAsset();    
}
/////////////////////////////////////////////
}

