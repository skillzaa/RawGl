import TriContainer from "./triContainer.js";
import VAO from "./core/vao.js";
import ClrObj from "./core/clrObj.js";
export default class AssetBuilder {
    showBackground: boolean;
    x: number;
    y: number;
    width: number;
    height: number;
    clrMain: ClrObj;
    clrBg: ClrObj;
    vertices: VAO;
    bgVertices: VAO;
    constructor(x?: number, y?: number, width?: number, height?: number, clrBg?: ClrObj | null, clrMain?: ClrObj | null);
    setClrBg(r?: number, g?: number, b?: number): void;
    getAsset(): TriContainer;
    setClrIfNull(clrobj: ClrObj | null, r: number, g: number, b: number): ClrObj;
}
//# sourceMappingURL=assetBuilder.d.ts.map