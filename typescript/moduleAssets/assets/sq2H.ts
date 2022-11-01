import {TriContainer,AssetBuilder,ClrObj, getClrObj} from "../assets.js";

export default class SqH extends AssetBuilder {
constructor(x:number=0,y:number=0,width:number=100,height:number=100){
super(x,y,width,height);
}
/////////////////////////////////////////////
getAsset():TriContainer{
//-------------------------------------------------------|
this.add.rectWH(0,0,100,100, this.palette.color[1]);      
this.add.rectWH(0,50,100,100,this.palette.color[2]);
//-------------------------------------------------------
return super.getAsset();    
}
/////////////////////////////////////////////
}
