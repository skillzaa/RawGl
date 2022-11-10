import {GlUtil,AssetBuilder,AssetsCollection as ACol} from "../../rawGl.js";
////////////////////////////////////////////////
const gl = GlUtil.getGl("bilza");



function drawFlag(width :number,height :number){
const flag = new ACol.UnionJack(0,0, width , height ).getAsset();
GlUtil.clear(gl,0.6,0.6,0.6);
flag.update(gl);
flag.draw(gl);
}
//////////////////////////////
let width = 10;
let height = 10;

const interval = setInterval(function(){

    drawFlag(width,height);
    width += 0.1;    
    height += 0.1;
        if (width >100 || height > 100){
            clearInterval(interval);
        }
},20)