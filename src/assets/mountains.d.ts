import AssetBuilder from "../assetBuilder/assetBuilder.js";
import ClrObj from "../color/clrObj.js";
import CoreContainerComp from "../core/coreContainerComp.js";
export default class Mountains extends AssetBuilder {
    mtn1Color: ClrObj;
    mtn2Color: ClrObj;
    mtn3Color: ClrObj;
    mtn1height: number;
    mtn2height: number;
    mtn3height: number;
    constructor(x?: number, y?: number, width?: number, height?: number);
    getAsset(): CoreContainerComp;
}
//# sourceMappingURL=mountains.d.ts.map