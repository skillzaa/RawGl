import Engine from "../../engine/engine";
import rgba from "../../functions/rgba.js";
export default class RawGl {
    constructor(canvasId = "bilza", color = rgba(0, 0, 1)) {
        this.engine = new Engine(canvasId, color);
    }
}
