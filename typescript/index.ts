import EngineGl from "./engineGl/engineGl.js";
import rgba from "./functions/rgba.js";
/////////////////////////////////////////////
const engine = new EngineGl("bilza");
const gl = engine.getGl();
// engine.setBackgroundColor(rgba(0.2,0,0.2));
////////////////////////////////

// const rect = new Rectangle(gl,0,50,75,5);
engine.add().rectangle(rgba(1),70,40,20,50);
engine.add().triangle(rgba(0,1,0),10,10,50,10,30,50);
engine.add().ellipse(rgba(0,1,1),50,50,20,10,60);
engine.draw();
// rect.draw(gl);
console.log("engine",engine);