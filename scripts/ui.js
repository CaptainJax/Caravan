
// User interface functions.

// Initialize the UI event bindings.
$(window).load(function() { // All assets must be loaded.
});


var UI = {

    takeExit: function(e) { // Handle click on an exit.
    }

    updateShipStatus: function() { // Make display reflect the ship.
        console.log('ship at ' + ship.worldNum);
        var w = Map.getWorld(ship.worldNum);
        for (var en = 0; en < parms.world.maxExits; en++) {
            var exit = w.exits[en];
            console.log('  exit ' + en + ': ' + exit.dist + ' AU to ' + exit.worldNum);
        }
    },
};
