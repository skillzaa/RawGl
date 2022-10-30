import Engine from "./core/rawGl.js";
import Assets from "./assets/assets.js";
import AssetBuilder from "./assets/assetBuilder.js";

// import CoreTriContainer from "./coreComps/coreTriContainer.js";
////////////////////////////////////////////////
const engine = new Engine("bilza");
// const asset = new AssetBuilder(10,10,40,25);
// asset.vertices.addTriangle(4,40, 40,10, 50,90,  0,0,0);
// asset.vertices.addTriangle(20,20, 80,20, 60,80,  0,0,1);

const asset = new AssetBuilder(10,10,40,25);
asset.vertices.addTriangle(4,40, 40,10, 50,90,  0,0,0);
asset.vertices.addTriangle(20,20, 80,20, 60,80,  0,0,1);

const comp =  asset.getAsset( engine.gl() );    
// const comp = Assets.testComp();
// const comp = new CoreTriContainer();

// comp.init(engine.gl());


  engine.clear(0,0.3);
  // comp.update(engine.gl());
  comp.draw(engine.gl());
  
  // setInterval(function(){
  // comp.update(engine.gl());
//   comp.draw(engine.gl());
//   engine.clear(0,0.3);
// },20);

