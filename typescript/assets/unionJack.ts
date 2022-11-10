import AssetBuilder from "../assetBuilder/assetBuilder.js";
import ClrObj from "../color/clrObj.js";
import CoreContainerComp from "../core/coreContainerComp.js";
////////////////////////////////////////////////////////////////


export default class UnionJack extends AssetBuilder {
    public colorCross :ClrObj;
    public colorSideTriangles :ClrObj;
    public colorBackground :ClrObj;

constructor(x:number=0,y:number=0,width:number=100,height:number=100){
super(x,y,width,height);

this.colorCross = new ClrObj(1,0,0);
this.colorSideTriangles = new ClrObj(0,0,1);
this.colorBackground = new ClrObj(0.8,0.8,0.8);
}
/////////////////////////////////////////////
getAsset():CoreContainerComp{
//--------------------------
// this.add.rectWH(0,0,100,100, 
    // this.colorBackground.r(),this.colorBackground.g(),this.colorBackground.b());

//---vertical plus    
this.add.rect(44,0,   56,0,   56,100, 
    this.colorCross.r(),this.colorCross.g(),this.colorCross.b());    
//---horizontal plus
this.add.rect(0,40,   100,40,   100,60, 
    this.colorCross.r(),this.colorCross.g(),this.colorCross.b());    

//////////////////large triangles
this.add.tri(42,100,   42,80,    20,100, 
    this.colorSideTriangles.r(),this.colorSideTriangles.g(),this.colorSideTriangles.b());

this.add.tri(58,100,   58,80,    80,100, 
    this.colorSideTriangles.r(),this.colorSideTriangles.g(),this.colorSideTriangles.b());  
    //-------------------------------------
return super.getAsset();    
}
/////////////////////////////////////////////
}
