import loadModels from './loaders/models.js'
import models from './onload/models.js';
import stage_1 from './stages/stage1.js';

let simple_stage_executed = false;

function getOnloadCount() {
   return loadModels.getOnloadCount();
};

function getLoadedCount() {
   return loadModels.getReadyCount();
};

function checkLoadStatus() {
   const onload_count = getOnloadCount(), loaded_count = getLoadedCount();

   if (onload_count == loaded_count) {
      if (simple_stage_executed) console.warn('%c Simple stage already executed, loading leak!', 'color: red');
      stage_1.start();
      simple_stage_executed = true;
   };
};

function basicLoader() {
   loadModels.start(models, checkLoadStatus);
};

export default basicLoader;