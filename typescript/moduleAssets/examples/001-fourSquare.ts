import {AssetBuilder,AssetsCollection,TriContainer,GlUtil,ClrObj,getClrObj } from "../assets.js";


////////////////////////////////////////////////
const gl = GlUtil.getGl("bilza");
const asset = AssetsCollection.fourRect(0,0,100,100,
    getClrObj(1,0,0),               //--rectangle - colors
    getClrObj(0,1,0),             
    getClrObj(0.8,0.8,0.8),
    getClrObj(1,1,0),
    );
///////////
const comp = asset.getAsset(gl);
comp.init(gl);
GlUtil.clear(gl,0,1,0);
comp.draw( gl );
