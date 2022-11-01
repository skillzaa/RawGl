import TriContainer from "./triContainer.js";
import GlUtil from "./glUtil.js";
const gl = GlUtil.getGl("bilza");
const first = new TriContainer(0, 80, 25, 20);
first.update(gl);
first.draw(gl);
