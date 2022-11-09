import TriContComp from "../core/coreContainerComp.js";
import Add from "../addObj/add.js";

/**
 * 2022-Nov-08
 * triContComp extends TriContCompBase from "core/triContComp.js
 * The Add object exposes Primtives or any other Triangles that we want to add. So we can extend but not change
 * The reasons for creating this obj are :
 *  - Provide a suitable name to user.
 *  - Add the "Add" object (very valid reason)
 *  - In future if there are changes the base class is not touched
 */
////////////////////////////////////////////////////////////
export default class TriCont  extends TriContComp{

    public add :Add;

constructor(x:number= 25,y:number= 25,width:number= 50,height:number= 50){
    super(x,y,width,height);
    this.add = new Add();
}
 
public init(gl: WebGL2RenderingContext): void {
this.setData(this.add.get515Triangles());
super.init(gl);    
}
///////----class ends-------------//////
}