import GlUtil from "../../core/glUtil.js";
import AC  from "../../assets/assetsCollection.js";

import Sq2x2 from "../../assets/sq2X2.js";
////////////////////////////////////////////////
const gl = GlUtil.getGl("bilza");


const asset = new AC.Sq2X2(0);
//////////////////////////////////////////////////
//-----------change properties
//////////////////////////////////////////////////
//---Extract the asset
const assetcomp = asset.getAsset();
//////////////////////////////////////////////////
//---Update so that the changes take effect
assetcomp.update(gl);
//////////////////////////////////////////////////
//--- draw
GlUtil.clear(gl,0.3,0.3,0.3);
assetcomp.draw(gl);
