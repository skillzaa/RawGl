import AssetBuilder from "../assetBuilder/assetBuilder.js";
import ClrObj from "../color/clrObj.js";
import CoreContainerComp from "../core/coreContainerComp.js";
export default class Sq2x2 extends AssetBuilder {
    colorLineHorizontal: ClrObj;
    colorLineVertical: ClrObj;
    lineWidthHorizontal: number;
    lineWidthVertical: number;
    constructor(x?: number, y?: number, width?: number, height?: number);
    getAsset(): CoreContainerComp;
}
//# sourceMappingURL=grid.d.ts.map