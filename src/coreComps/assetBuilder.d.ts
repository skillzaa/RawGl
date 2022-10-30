import CoreTriContainer from "./coreTriContainer.js";
import ColorObj from "./colorObj.js";
export default class AssetBuilder {
    showBackground: boolean;
    color: ColorObj;
    colorBackground: ColorObj;
    x: number;
    y: number;
    width: number;
    height: number;
    private vertices;
    private bgVertices;
    constructor(x?: number, y?: number, width?: number, height?: number);
    getAsset(): CoreTriContainer;
}
//# sourceMappingURL=assetBuilder.d.ts.map