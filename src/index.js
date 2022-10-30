import Engine from "./core/rawGl.js";
import AssetBuilder from "./coreComps/assetBuilder.js";
const engine = new Engine("bilza");
const asset = new AssetBuilder(10, 10, 40, 25);
const comp = asset.getAsset();
comp.init(engine.gl());
engine.clear(0, 0.3);
comp.update(engine.gl());
comp.draw(engine.gl());
