import RgbaObj from "./rgbaObj.js";
export default function rgba(r = 0, g = 0, b = 0, a = 1) {
    return new RgbaObj(r, g, b, a);
}
