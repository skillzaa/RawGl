import CoreTriContainer from "./coreTriContainer.js";
import ColorObj from "./colorObj.js";
import VAO from "./vao.js";
export default class AssetBuilder {
    showBackground: boolean;
    color: ColorObj;
    colorBackground: ColorObj;
    x: number;
    y: number;
    width: number;
    height: number;
    vertices: VAO;
    bgVertices: VAO;
    constructor(x?: number, y?: number, width?: number, height?: number);
    getAsset(): CoreTriContainer;
}
//# sourceMappingURL=assetBuilder.d.ts.map