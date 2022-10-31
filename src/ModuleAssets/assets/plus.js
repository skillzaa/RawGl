import { AssetBuilder } from "../assets.js";
export default function plus(x = 25, y = 25, width = 50, height = 50, clrBg = null, clrMain = null) {
    const asset = new AssetBuilder(x, y, width, height, clrBg, clrMain);
    asset.setClrBg(asset.clrBg.r(), asset.clrBg.g(), asset.clrBg.b());
    asset.vertices.addRectangle(0, 40, 100, 20, asset.clrMain.r(), asset.clrMain.g(), asset.clrMain.b());
    asset.vertices.addRectangle(40, 0, 20, 100, asset.clrMain.r(), asset.clrMain.g(), asset.clrMain.b());
    return asset;
}
