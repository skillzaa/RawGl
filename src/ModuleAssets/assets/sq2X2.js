import { AssetBuilder } from "../assets.js";
export default function sq2X2(x, y, width, height, clrBg = null, clrMain = null, clrRect2 = null, clrRect3 = null, clrRect4 = null) {
    const asset = new AssetBuilder(x, y, width, height, clrBg, clrMain);
    clrRect2 = asset.setClrIfNull(clrRect2, 0.9, 0.9, 0.9);
    clrRect3 = asset.setClrIfNull(clrRect3, 0.3, 0.9, 0.3);
    clrRect4 = asset.setClrIfNull(clrRect4, 0, 0, 0.8);
    asset.setClrBg(asset.clrBg.r(), asset.clrBg.g(), asset.clrBg.b());
    asset.vertices.addRectangle(50, 50, 50, 50, asset.clrMain.r(), asset.clrMain.g(), asset.clrMain.b());
    asset.vertices.addRectangle(0, 50, 50, 50, clrRect2.r(), clrRect2.g(), clrRect2.b());
    asset.vertices.addRectangle(0, 0, 50, 50, clrRect3.r(), clrRect3.g(), clrRect3.b());
    asset.vertices.addRectangle(50, 0, 50, 50, clrRect4.r(), clrRect4.g(), clrRect4.b());
    return asset;
}
