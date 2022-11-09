import AssetBuilder from "../assetBuilder/assetBuilder.js";
import ClrObj from "../color/clrObj.js";
import CoreContainerComp from "../core/coreContainerComp.js";
////////////////////////////////////////////////////////////////


export default class Mountains extends AssetBuilder {

public mtn1Color : ClrObj;
public mtn2Color : ClrObj;
public mtn3Color : ClrObj;

public mtn1height : number;
public mtn2height : number;
public mtn3height : number;

//////////////////////////////////////////////    
constructor(x:number=10,y:number=40,width:number= 30,height:number=50){
super(x,y,width,height);
this.mtn1Color = new ClrObj(1,0,0);
this.mtn2Color = new ClrObj(0,1,0);
this.mtn3Color = new ClrObj(0,0,1);
this.mtn1height = 50;
this.mtn2height = 90;
this.mtn3height = 45;
}
/////////////////////////////////////////////
getAsset():CoreContainerComp{
//-------------------------------------------------------|
this.add.tri(0,0,  50,0,  25, this.mtn1height, 
    this.mtn1Color.r(),this.mtn1Color.g(),this.mtn1Color.b());      

this.add.tri(50,0,100,0, 75, this.mtn2height, 
    this.mtn2Color.r(),this.mtn2Color.g(),this.mtn2Color.b());

this.add.tri(25,0, 75,0, 50, this.mtn1height, 
    this.mtn3Color.r(),this.mtn3Color.g(),this.mtn3Color.b());     

//-------------------------------------------------------
return super.getAsset();    
}
/////////////////////////////////////////////
}

