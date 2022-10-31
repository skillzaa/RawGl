import { AssetBuilder, ClrObj } from "../assets.js";
export default function sq2X2V(x, y, width, height, clrRect1 = null, clrRect2 = null) {
    const asset = new AssetBuilder(x, y, width, height);
    const localClr = new ClrObj(0.3, 0.3, 0.3);
    asset.setColorBackground(0.2, 0.2, 0.5);
    if (clrRect1 == null) {
        clrRect1 = new ClrObj(1);
    }
    if (clrRect2 == null) {
        clrRect2 = new ClrObj(0, 1);
    }
    asset.vertices.addRectangle(0, 0, 50, 100, clrRect1.r(), clrRect1.g(), clrRect1.b());
    asset.vertices.addRectangle(50, 0, 50, 100, clrRect2.r(), clrRect2.g(), clrRect2.b());
    return asset;
}
