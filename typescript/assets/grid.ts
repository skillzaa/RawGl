import AssetBuilder from "../assetBuilder/assetBuilder.js";
import ClrObj from "../color/clrObj.js";
import CoreContainerComp from "../core/coreContainerComp.js";
////////////////////////////////////////////////////////////////


export default class Sq2x2 extends AssetBuilder {
colorLineHorizontal :ClrObj;
colorLineVertical :ClrObj;

lineWidthHorizontal :number;
lineWidthVertical :number;

constructor(x:number=0,y:number=0,width:number=100,height:number=100){
super(x,y,width,height);
this.colorLineHorizontal = new ClrObj(0,0,0);
this.colorLineVertical = new ClrObj(0,0,0);

this.lineWidthHorizontal = 0.25;
this.lineWidthVertical = 0.20;
}
/////////////////////////////////////////////
getAsset():CoreContainerComp{
//---horizontal lines    
for (let i = 0; i < 10; i++) {
    this.add.rectWH( 0 , i*10 , 100, this.lineWidthHorizontal, 
this.colorLineHorizontal.r(),this.colorLineHorizontal.g(),this.colorLineHorizontal.b() );
}
//-------------------------------------
//---vertical lines    
for (let i = 0; i < 10; i++) {
    this.add.rectWH( i*10, 0   , this.lineWidthVertical, 100, 
this.colorLineVertical.r(),this.colorLineVertical.g(),this.colorLineVertical.b() );
}
//-------------------------------------
return super.getAsset();    
}
/////////////////////////////////////////////
}
