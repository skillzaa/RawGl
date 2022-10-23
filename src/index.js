import EngineGl from "./engineGl/engineGl.js";
import rgba from "./functions/rgba.js";
import T2P from "./components/t2p.js";
const engine = new EngineGl("bilza");
const gl = engine.getGl();
engine.setBackgroundColor(rgba(0.2, 0, 0.2, 0.2));
console.log("engine", engine);
const t2p = new T2P(gl, rgba(1), 50, 50, 40, 10);
t2p.draw(gl);
