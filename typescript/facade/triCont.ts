import TriContCompBase from "../core/triContComp.js";
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
export default class TriCont  extends TriContCompBase{

    public add :Add;

constructor(x:number= 25,y:number= 25,width:number= 50,height:number= 50){
    super(x,y,width,height);
    this.add = new Add();
}
///////----class ends-------------//////
}