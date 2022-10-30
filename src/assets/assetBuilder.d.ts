import CoreTriContainer from "../coreComps/coreTriContainer.js";
import ColorObj from "../coreComps/colorObj.js";
import VAO from "../coreComps/vao.js";
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
    getAsset(gl: WebGL2RenderingContext): CoreTriContainer;
}
//# sourceMappingURL=assetBuilder.d.ts.map