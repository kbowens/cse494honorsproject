var spawnLogic = require("logic.spawn");
var roleHarvester = require("role.harvester");
var roleUpgrader = require("role.upgrader");
var rolePlain = require("role.plain");
var conductor = require("conductor");

module.exports.loop = function () {


    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if (creep.memory.role == 'plain') {
            rolePlain.run(creep);
        }
    }
    spawnLogic.run();
    conductor.run();
    //console.log(Game.cpu.getUsed());
    //this is a test comment
}
