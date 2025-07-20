import Resize from '/js/system/resize.js';
import system from '/js/system/system.js';
import temp_name from '/js/lib/project/index.js';

let _rAF;

const { scene, renderer, camera, orbit, canvas } = system;

const resize = new Resize(system, canvas);

const clock = new THREE.Clock();

const render = {
   start,
   stop,
};

function checkResize() { 
   resize.check();
};

function tick() {
   renderer.render(scene, camera);
   orbit.src.update();
   temp_name.update(clock.getElapsedTime());
   _rAF = requestAnimationFrame(tick, canvas);
};

function start() {
   tick();
   window.addEventListener('resize', checkResize);
   checkResize();
};

function stop() {
   cancelAnimationFrame(_rAF);
};

window.render = render;
export default render;
