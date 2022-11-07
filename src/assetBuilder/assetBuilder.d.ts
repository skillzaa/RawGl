import TriContComp from "../facade/triContComp.js";
import ClrObj from "../color/clrObj.js";
import Palette from "./palette.js";
import Add from "./add.js";
export default class AssetBuilder {
    showBackground: boolean;
    x: number;
    y: number;
    width: number;
    height: number;
    palette: Palette;
    sizes: number[];
    switches: boolean[];
    add: Add;
    constructor(x?: number, y?: number, width?: number, height?: number);
    getAsset(): TriContComp;
    setClrIfNull(clrobj: ClrObj | null, r: number, g: number, b: number): ClrObj;
}
//# sourceMappingURL=assetBuilder.d.ts.map