import AssetBuilder from "./assetBuilder.js";
export default class Assets {
    static testComp(gl, x = 0, y = 0.0, width = 100, height = 100) {
        const asset = new AssetBuilder(x, y, width, height);
        asset.vertices.addTriangle(4, 40, 40, 10, 50, 90, 0, 0, 0);
        asset.vertices.addTriangle(20, 20, 80, 20, 60, 80, 0, 0, 1);
        return asset.getAsset(gl);
    }
}
