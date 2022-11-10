import {GlUtil,AssetBuilder,AssetsCollection as ACol} from "./rawGl.js";
////////////////////////////////////////////////
const gl = GlUtil.getGl("bilza");

/////////////////////////////////////////////
const flag = new ACol.UnionJack(0,0,100,100).getAsset();
const gridAsset = new ACol.Grid(0,0,100,100);
gridAsset.colorLineHorizontal.set(0.6,0.3,0.3);
gridAsset.colorLineVertical.set(0.3,0.6,0.3);
// gridAsset.lineWidthVertical = 0.5; 

const grid  = gridAsset.getAsset();

GlUtil.clear(gl,0.6,0.6,0.6);

// grid.init(gl);
// flag.init(gl);
flag.update(gl);
flag.draw(gl);
///////////////////////
grid.update(gl);
grid.draw(gl);
