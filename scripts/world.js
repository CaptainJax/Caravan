
// Stuff about worlds.
var World = {

    // Create a new world.
    new: function(newName) {
        newName =  newName || 'Planet X'; // Human-readable identifier.
        var w = {
            name: newName,
            visitedTurnNum: konst.NOT_VISITED,
            exits: [],
            market: {},
        };

        for (var en = 0; en < parms.world.maxExits; en++)
            w.exits[en] = konst.NO_EXIT;

        for (var c in parms.cargo) {
            var pc = parms.cargo[c];
            w.market[c] = {};
            w.market[c].capacity = pc.capacity;
            w.market[c].price = pc.basePrice;
        }

        return w;
    },

    // Get a product sold by a world.
    getProd: function(w, p) {
        return w.market[p];
    },

    // Get the exit from this world to the next.
    getExitTo: function(w, wn) {
        for (var e = 0; e < w.exits.length; e++)
            if (e.worldNum == wn) return w.exits[e];
        return konst.NO_EXIT;
    },

    // Add an exit from this world to another.
    addExitTo: function(w, wn, d) {
        for (var e = 0; e < w.exits.length; e++)
            if (w.exits[e] === konst.NO_EXIT)
                return w.exits[e] = {worldNum:wn, dist:d};
        return konst.EXITS_FULL;
    },
}
