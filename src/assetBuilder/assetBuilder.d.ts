import { TriCont } from "../rawGl.js";
import ClrObj from "../color/clrObj.js";
import Add from "./add.js";
import IAssetBuilder from "./IAssetBuilder.js";
export default class AssetBuilder implements IAssetBuilder {
    showBackground: boolean;
    colorBackground: ClrObj;
    x: number;
    y: number;
    width: number;
    height: number;
    add: Add;
    constructor(x?: number, y?: number, width?: number, height?: number);
    getAsset(): TriCont;
}
//# sourceMappingURL=assetBuilder.d.ts.map