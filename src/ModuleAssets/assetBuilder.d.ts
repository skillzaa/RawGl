import TriContainer from "./triContainer.js";
import ClrObj from "./core/clrObj.js";
import FiveFifteenDb from "./fiveFifteen/fiveFifteenDb.js";
export default class AssetBuilder {
    showBackground: boolean;
    x: number;
    y: number;
    width: number;
    height: number;
    palette: ClrObj[];
    clrMain: ClrObj;
    clrBg: ClrObj;
    add: FiveFifteenDb;
    constructor(x?: number, y?: number, width?: number, height?: number, clrBg?: ClrObj | null, clrMain?: ClrObj | null);
    setColorBg(r?: number, g?: number, b?: number): void;
    getAsset(): TriContainer;
    setClrIfNull(clrobj: ClrObj | null, r: number, g: number, b: number): ClrObj;
    private initPalette;
}
//# sourceMappingURL=assetBuilder.d.ts.map