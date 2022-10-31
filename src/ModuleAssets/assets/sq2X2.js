import { AssetBuilder, ClrObj } from "../assets.js";
export default function sq2X2(x, y, width, height, clrRect1 = null, clrRect2 = null, clrRect3 = null, clrRect4 = null) {
    const asset = new AssetBuilder(x, y, width, height);
    const localClr = new ClrObj(0.3, 0.3, 0.3);
    asset.setClrBg(0.2, 0.2, 0.5);
    if (clrRect1 == null) {
        clrRect1 = new ClrObj(1);
    }
    if (clrRect2 == null) {
        clrRect2 = new ClrObj(0, 1);
    }
    if (clrRect3 == null) {
        clrRect3 = new ClrObj(0, 0, 1);
    }
    if (clrRect4 == null) {
        clrRect4 = new ClrObj(1, 1, 0);
    }
    asset.vertices.addRectangle(50, 50, 50, 50, clrRect1.r(), clrRect1.g(), clrRect1.b());
    asset.vertices.addRectangle(0, 50, 50, 50, clrRect2.r(), clrRect2.g(), clrRect2.b());
    asset.vertices.addRectangle(0, 0, 50, 50, clrRect3.r(), clrRect3.g(), clrRect3.b());
    asset.vertices.addRectangle(50, 0, 50, 50, clrRect4.r(), clrRect4.g(), clrRect4.b());
    return asset;
}
