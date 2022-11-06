import {TriContainer,AssetBuilder,ClrObj, getClrObj} from "../moduleAssets/assets.js";

export default class Plus extends AssetBuilder {
constructor(x:number=10,y:number=40,width:number= 30,height:number=50){
super(x,y,width,height);
this.sizes[0] = 4;
this.sizes[1] = 4;
}
/////////////////////////////////////////////
getAsset():TriContainer{
const lineWdX = this.sizes[0];    
const lineWdY = this.sizes[1];    
const stPtX = (100 - lineWdX)/2;
const stPtY = (100 - lineWdY)/2;
//-------------------------------------------------------|
this.add.rectWH(stPtX,0,  lineWdX,100, this.palette.color[1]);      

this.add.rectWH(0,stPtY,  100, lineWdY, this.palette.color[2]);      
// this.add.rectWH(40,0,  20,100,  this.palette.color[1]);
//-------------------------------------------------------
return super.getAsset();    
}
/////////////////////////////////////////////
}

