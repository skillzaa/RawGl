import GlUtil from "./core/glUtil.js";
import AC from "./assets/assetsCollection.js";
import getClrObj from "./color/getClrObj.js";
////////////////////////////////////////////////

const gl = GlUtil.getGl("bilza");
GlUtil.clear(gl,0.2,0.2,0.2);

const container = new AC.ExclamationMark( 10, 3,5,60);

container.palette.color[1].set(1);
// container.showBackground = true;
container.palette.color[0].set(1,1);
//////////////////////////////////////
const comp= container.getAsset();
comp.init(gl);
////////////////////////////////////////
const inter = setInterval(function(){    
GlUtil.clear(gl,0,0,1);
comp.update(gl);
comp.draw(gl);
// comp.
    // if (comp.width >100 || comp.height > 100){
    //     clearInterval(inter)
    // }else {
    //     // comp.width +=0.5;
    //     comp.height +=0.05;
    // }
}, 20);
////////////////////////////////////////