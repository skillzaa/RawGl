import Engine from "../core/rawGl.js";
import TriFan from "../coreComps/triFan.js";

export default function square(engine :Engine,x:number,y:number,width:number,height:number){

    const triFan = new TriFan(
        x,y,   
        x + width,   y,
        x + width,y +height,
        0,0,1);
        
    triFan.addVertex(x,y+height);
    
triFan.init(engine);
return triFan;     
}

// engine.clear(0,0,0.2);

// triFan.draw(engine.gl());