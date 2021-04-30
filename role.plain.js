var rolePlain = {
    run: function(creep) {
        if (creep.memory.task == 'gathering') {
            if (creep.carry.energy == creep.store.getCapacity()) {
              creep.memory.task = 'storing'
            } else {
              var sources = creep.room.find(FIND_SOURCES);
              var closest_source = 10000
              for (var i = 0; i < sources.length; i++) {
                  if (creep.pos.getRangeTo(sources[i]) < closest_source) {
                      closest_source = sources[i]
                  }
              }
              if(creep.harvest(closest_source) == ERR_NOT_IN_RANGE) {
                  creep.moveTo(closest_source);
              }
          }
      } else if (creep.memory.task == 'storing'){
          if (creep.carry.energy == 0) {
            creep.memory.task = 'gathering'
          }
          if (Game.spawns['Spawn1'].energy < Game.spawns['Spawn1'].energyCapacity) {
            if(creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns['Spawn1']);
            }
          } else {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
          }
      } else {
        creep.memory.task = 'gathering'
      }
    }
}
module.exports = rolePlain;
