


export default interface IGPUComp {

setData(vertices  :number[]):void;

// init(gl: WebGL2RenderingContext):void;

update(gl: WebGL2RenderingContext):void;

draw(gl: WebGL2RenderingContext):void;

}