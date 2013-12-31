
// User interface functions.

var UI = {

    updateShipStatus: function() {
        console.log('ship at ' + ship.worldNum);
        var w = Map.getWorld(ship.worldNum);
        for (var en = 0; en < parms.world.maxExits; en++) {
            var exit = w.exits[en];
            console.log('  exit ' + en + ': ' + exit.dist + ' AU to ' + exit.worldNum);
        }
    },
};
