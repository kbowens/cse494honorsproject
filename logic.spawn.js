var spawnLogic = {

    run: function(){

        var creepsAlive = (Object.keys(Game.creeps).length);
        //count roles
        var number_of_plain_creeps = 0;
        var number_of_upgraders = 0;
        for (var i = 0; i < creepsAlive.length; i++) {
            if (creepsAlive[i].memory.role == 'plain') {
                number_of_plain_creeps = number_of_plain_creeps + 1;
            }
            if (creepsAlive[i].memory.role == 'upgrader') {
                number_of_upgraders = number_of_upgraders + 1;
            }
        }

        if ((creepsAlive < 5) && (Game.spawns['Spawn1'].energy >= 250)) {
            if (number_of_plain_creeps <= number_of_upgraders) {
                Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE, MOVE], (Math.random().toString(36).substr(2)), {memory: {role: 'plain'}})
            } else {
                Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE, MOVE], (Math.random().toString(36).substr(2)), {memory: {role: 'upgrader'}})
            }
            
            //console.log('hi');
        }
    }
};
module.exports = spawnLogic;
