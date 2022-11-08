/**
 *  version 0.0.1 
*/

//----Components 2 core and 1 facade component
import TriCont from "./facade/triCont.js";
// BaseTriComp has been renames as BaseTri
import BaseTri from "./core/baseTriComp.js";
import Tri from "./core/triComp.js";
///////////////////////////////////////////////////
//----Assets and Asset Builder
import AssetsCollection from "./assets/assetsCollection.js";
import AssetBuilder from "./assetBuilder/assetBuilder.js";

//--finally also export GlUtil so that it can be used later
import GlUtil from "./core/glUtil.js";

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
export {
    BaseTri,
    Tri,
    TriCont,

    AssetsCollection,
    AssetBuilder,
    
    GlUtil
}