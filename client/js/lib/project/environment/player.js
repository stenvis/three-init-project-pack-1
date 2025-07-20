let player_mesh;

function create() {
   const 
      { scene } = THREE_APP.system,
      { models } = THREE_APP.dataset;

   player_mesh = models.getObject('xbot').scene;

   scene.add(player_mesh);
};

const player = {
   create,
};

export default player;