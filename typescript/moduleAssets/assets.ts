import AssetBuilder from "./assetBuilder/assetBuilder.js"
import AssetsCollection from "./assetsCollection.js"
import TriContainer from "../core/triContComp.js"
import GlUtil from "../core/glUtil.js";
import ClrObj from "./assetBuilder/clrObj.js";
import getClrObj from "./assetBuilder/getClrObj.js";
/**
 * AssetBuilder : To build own assets
 * AssetsCollection : Collection of existing assets
 * TriContainer : This can be used independently as well.
 * GlUtil : We need this to get gl and later on engine will also be built on it.
 */

export {
    AssetBuilder,
    AssetsCollection,
    TriContainer,
    ClrObj,
    GlUtil,
    getClrObj
}