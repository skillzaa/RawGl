import { AssetBuilder } from "../assets.js";
export default function multiply(x = 25, y = 25, width = 50, height = 50, clrBg = null, clrMain = null, lineWidth = 5) {
    const asset = new AssetBuilder(x, y, width, height, clrBg, clrMain);
    asset.setClrBg(asset.clrBg.r(), asset.clrBg.g(), asset.clrBg.b());
    asset.vertices.addDiagonal(5, 95, 5, asset.clrMain.r(), asset.clrMain.g(), asset.clrMain.b());
    asset.vertices.addDiagonal(95, 5, 5, asset.clrMain.r(), asset.clrMain.g(), asset.clrMain.b());
    return asset;
}
