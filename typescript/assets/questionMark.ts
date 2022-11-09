import AssetBuilder from "../assetBuilder/assetBuilder.js";
import getClrObj from "../color/getClrObj.js";
import TriContComp from "../facade/ContainerComp.js";

export default class QuestionMark extends AssetBuilder {
constructor(x:number=10,y:number=40,width:number= 30,height:number=50){
super(x,y,width,height);

this.palette.color[0].set(0,0,1);
this.palette.color[1].set(1);
}
/////////////////////////////////////////////
getAsset():TriContComp{
//-------------------------------------------------------|
this.showBackground = true;

// this.add.rectWH(stPtX,0,  lineWdX,100, this.palette.color[1]);      
this.add.rectWH( 0,100, 100,10, 
    this.palette.color[1] );

this.add.rectWH( 90,50, 10,50, 
    this.palette.color[1]  );

this.add.rectWH( 0,50, 100,10, 
    this.palette.color[1]  );

this.add.rectWH( 0,20, 10,30, 
    this.palette.color[1]  );

this.add.rectWH( 0,0, 10,10, 
    this.palette.color[1]  );

//-------------------------------------------------------
return super.getAsset();    
}
/////////////////////////////////////////////
}

