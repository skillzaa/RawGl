import CoreTriContainer from "./coreComps/coreTriContainer.js";
import engine from "./core/rawGl.js";
import GlUtil from "./core/glUtil.js";
import AssetBuilder from "./assets/assetBuilder.js";
////////////////////////////////////////////////
const gl = GlUtil.getGl("bilza");
const asset = new AssetBuilder(0,50,50,50);

// asset.setColorBackground(0.2,0.2,0.5);

asset.vertices.addRectangle(0,0,50,50, 1,0,0);
asset.vertices.addRectangle(0,50,50,50, 0,1,0);
asset.vertices.addRectangle(50,0,50,50, 0,0,1);
asset.vertices.addRectangle(50,50,50,50, 1,1,0);

///////////
const core = asset.getAsset(gl);
core.x = 10;
core.y = 25;
core.init(gl);
// core.update(gl);
GlUtil.clear(gl,0,0,0.2);
core.draw( gl );

console.log("core", core );
