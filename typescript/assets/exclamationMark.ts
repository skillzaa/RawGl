import AssetBuilder from "../assetBuilder/assetBuilder.js";
import getClrObj from "../color/getClrObj.js";
import TriContComp from "../facade/ContainerComp.js";


export default class ExclamationMark extends AssetBuilder {
constructor(x:number=10,y:number=40,width:number= 30,height:number=50){
super(x,y,width,height);

this.palette.color[0].set(0,0,1);
this.palette.color[1].set(1);
}
/////////////////////////////////////////////
getAsset():TriContComp{
//-------------------------------------------------------|
this.add.rectWH( 
    0,25, 
    100,75, 
    this.palette.color[1]  );

this.add.rectWH( 
    0,0, 
    100,20, 
    this.palette.color[1]  );

// this.add.polygon(
//     30,10,
//     50,10,120,
//     this.palette.color[1]
// );


//-------------------------------------------------------
return super.getAsset();    
}
/////////////////////////////////////////////
}

