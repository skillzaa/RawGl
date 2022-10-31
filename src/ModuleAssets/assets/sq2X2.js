import { AssetBuilder } from "../assets.js";
export default function sq2X2(x, y, width, height, clrBg = null, clrMain = null) {
    const asset = new AssetBuilder(x, y, width, height, clrBg, clrMain);
    asset.vertices.addRect(50, 50, 50, 50, asset.clrMain.r(), asset.clrMain.g(), asset.clrMain.b());
    asset.vertices.addRect(0, 50, 50, 50, asset.palette[0].r(), asset.palette[0].g(), asset.palette[0].b());
    asset.vertices.addRect(0, 0, 50, 50, asset.palette[1].r(), asset.palette[1].g(), asset.palette[1].b());
    asset.vertices.addRect(50, 0, 50, 50, asset.palette[2].r(), asset.palette[2].g(), asset.palette[2].b());
    return asset;
}
