import AssetBuilder from "../assetBuilder/assetBuilder.js";
import ClrObj from "../color/clrObj.js";
import CoreContainerComp from "../core/coreContainerComp.js";
export default class UnionJack extends AssetBuilder {
    colorCross: ClrObj;
    colorSideTriangles: ClrObj;
    colorBackground: ClrObj;
    constructor(x?: number, y?: number, width?: number, height?: number);
    getAsset(): CoreContainerComp;
}
//# sourceMappingURL=unionJack.d.ts.map