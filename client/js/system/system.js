import { canvas_bg_color } from "/configs/configs.js";
import SYSTEM_PRESETS from "/js/system/presets.js";
import OrbitControl from "/js/lib/3D/controls/orbit.js";

const {
   CTX_PRESETS,
   ORBIT_CONTROL_PRESETS,
} = SYSTEM_PRESETS;

const canvas = document.getElementById('canvas');

const 
   scene = new THREE.Scene(),
   renderer = new THREE.WebGLRenderer({
      canvas,
      ...CTX_PRESETS,
   });


scene.background = new THREE.Color(canvas_bg_color);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
const orbit = new OrbitControl(camera, canvas, ORBIT_CONTROL_PRESETS);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 2);
scene.add(ambientLight);

const hemiLight = new THREE.HemisphereLight(0x03dffc, 0x3d362b, 2);
hemiLight.position.set(0, 20, 0);
scene.add(hemiLight);

camera.position.set(12, 0, 0);

const system = {
   canvas,
   scene,
   renderer,
   camera,
   orbit,
};

window.THREE_APP.system = system; 

export default system;