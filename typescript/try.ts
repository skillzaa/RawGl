import getClrObj  from "./color/getClrObj.js";
import GlUtil from "./core/glUtil.js";
////////////////////////////////////////////////
import TriComp from "./core/triComp.js";
import upload515ToTriCont from "./formats/upload515ToTriCont.js";
import Primtive from "./primtives/primitives.js";
import AssetsCollection from "./assets/assetsCollection.js";
////////////////////////////////////////////////
////////////////////////////////////////////////

const gl = GlUtil.getGl("bilza");
//////////////////////////////////////

const asset = new AssetsCollection.Sq2X2( 5 , 50 , 40, 40);

const comp = asset.getAsset();

GlUtil.clear(gl,0.2,0.2,0.2);
comp.init(gl);
comp.draw(gl);