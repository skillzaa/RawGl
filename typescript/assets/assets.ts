import CoreTriContainer from "../coreComps/coreTriContainer.js";
import AssetBuilder from "./assetBuilder.js";

export default class Assets {



static testComp(gl :WebGL2RenderingContext,x:number= 0,y:number= 0.0,width:number= 100,height:number= 100):CoreTriContainer{
    const asset = new AssetBuilder(x,y,width,height);
    asset.vertices.addTriangle(4,40, 40,10, 50,90,  0,0,0);
    asset.vertices.addTriangle(20,20, 80,20, 60,80,  0,0,1);
    // const as = asset.getAsset(gl);
return asset.getAsset(gl);    
}




}