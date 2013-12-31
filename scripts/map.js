
// The actual map.
var map = {
    worlds: [],
}


// Functions related to the map.
var Map = {
    getNumWorlds: function() {
        return map.worlds.length;
    },

    getWorld: function(worldNum) {
        return map.worlds[worldNum];
    },

    getDistance: function(fromWn, toWn) {
        var exit = Map.getExitBetween(fromWn, toWn);
        return exit.dist;
    },

    addWorld: function(fromWorldNum, name) {
        var newWorldNum = Map.getNumWorlds();
        name = name || ('Planet ' + newWorldNum);
        var newWorld = World.new(name);
        // Make new world and plug it into the map.
        if (fromWorldNum != konst.FROM_NOWHERE) {
            var fromWorld = this.getWorld(fromWorldNum);
            var dist = randDist(parms.world.exitDistProb);
            World.addExitTo(newWorld, fromWorldNum, dist); // Add reciprocol path.
            World.addExitTo(fromWorld, newWorldNum, dist);
            // TODO: add link to existing world?
        }
        map.worlds.push(newWorld);

        return newWorldNum;
    },

    extendSpaceAround: function(fromWorldNum, forcedNumExits) {
        var world = Map.getWorld(fromWorldNum);
        if (world.visitedTurnNum != konst.NOT_VISITED) return; // Only extend once on first visit!

        // Fill in one or more exits.
        var numExits = randDist(parms.world.numExitsProb);
        if (typeof forcedNumExits === 'number') numExits = forcedNumExits; console.log(numExits);
        for (var exitNum = 0; exitNum < numExits; exitNum++)
            Map.addWorld(fromWorldNum);
    },

    init: function() {
        map.worlds = [];
        var hwNum = Map.addWorld(konst.FROM_NOWHERE, parms.world.homeworldName);
        Map.extendSpaceAround(hwNum, parms.world.maxExits);
    },
}
