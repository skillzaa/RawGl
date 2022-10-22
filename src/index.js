import EngineGl from "./engineGl/engineGl.js";
import rgba from "./functions/rgba.js";
const engine = new EngineGl("bilza");
const gl = engine.getGl();
engine.add().rectangle(rgba(1), 70, 40, 20, 50);
engine.add().triangle(rgba(0, 1, 0), 10, 10, 50, 10, 30, 50);
engine.add().ellipse(rgba(0, 1, 1), 50, 50, 20, 10, 60);
engine.draw();
console.log("engine", engine);
