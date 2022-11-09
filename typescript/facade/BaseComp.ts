import BaseTriComp from "../core/baseComp.js";
import Add from "../addObj/add.js";

////////////////////////////////////////////////////////////
export default class BaseTri  extends BaseTriComp{

public add :Add;

constructor(){
    super();
    this.add = new Add();
}
 
public init(gl: WebGL2RenderingContext): void {
this.setData(this.add.get515TriGlCoords());
super.init(gl);    
}
///////----class ends-------------//////
}