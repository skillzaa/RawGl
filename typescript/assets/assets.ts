import CoreTriContainer from "../coreComps/coreTriContainer.js";
import AssetBuilder from "./assetBuilder.js";

export default class Assets {



static testComp():CoreTriContainer{
    const asset = new AssetBuilder(10,10,40,25);
    asset.vertices.addTriangle(4,40, 40,10, 50,90,  0,0,0);
    asset.vertices.addTriangle(20,20, 80,20, 60,80,  0,0,1);
return asset.getAsset();    
}




}