import TriContComp from "../core/coreContainerComp.js";
import Add from "../addObj/add.js";
import IAssetBuilder from "./IAssetBuilder.js";
export default class AssetBuilder implements IAssetBuilder {
    x: number;
    y: number;
    width: number;
    height: number;
    add: Add;
    constructor(x?: number, y?: number, width?: number, height?: number);
    getAsset(): TriContComp;
}
//# sourceMappingURL=assetBuilder.d.ts.map