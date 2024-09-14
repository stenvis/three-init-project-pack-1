import DOM from '/js/storage/dom.js';
import SYSTEM_PRESETS from '/js/system/presets.js';
import Configer from '/js/lib/3D/configer/configer.js';
import Camera from '/js/lib/3D/camera/camera.js';
import OrbitControls from '/js/lib/3D/controls/orbit.js';
import HemisphereLight from '/js/lib/3D/light/hemisphere.js';
import Workspace from '/js/lib/abstractions/workspace/workspace.js';

// development
import Stats from '/dependencies/three/stats/stats.js'; // FPS
//

const 
   { canvas } = DOM,
   { 
      CTX_PRESETS,
      CHARACTER_CAMERA_PRESETS,
      ORBIT_CONTROL_PRESETS,
      HEMISPHERE_LIGHT_PRESETS,
   } = SYSTEM_PRESETS;

const 
   scene = new THREE.Scene(),
   clock = new THREE.Clock(),
   renderer = new THREE.WebGLRenderer({
      canvas,
      ...CTX_PRESETS,
   });

const 
   configer = new Configer(),
   workspace = new Workspace(scene);

configer.setRenderer(renderer);

const 
   camera = new Camera(CHARACTER_CAMERA_PRESETS),
   orbit = new OrbitControls(camera.src, canvas, ORBIT_CONTROL_PRESETS),
   stats = new Stats(),
   hemisphere_light = new HemisphereLight(HEMISPHERE_LIGHT_PRESETS); 

scene.add(hemisphere_light);

document.body.appendChild(stats.dom);

const system = {
   scene,
   renderer,
   camera,
   clock,
   stats,
};

window.THREE_APP.system = system; 
window.THREE_APP.workspace = workspace; 

export default system;
