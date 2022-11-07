import TriContCompBase from "../core/triContComp.js";
import Add from "./add.js";
import IGPUComp from "../core/IGPUComp.js";
export default class TriContComp implements IGPUComp {
    private theComp;
    add: Add;
    constructor(x?: number, y?: number, width?: number, height?: number);
    getComp(): TriContCompBase;
    init(gl: WebGL2RenderingContext): void;
    update(gl: WebGL2RenderingContext): void;
    draw(gl: WebGL2RenderingContext): void;
    addTri(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, r: number, g: number, b: number): void;
}
//# sourceMappingURL=triContComp.d.ts.map