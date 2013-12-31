
// User interface functions.

// Initialize the UI event bindings.
$(window).load(function() { // All assets must be loaded.

    for (var np = 0; np < parms.world.maxExits; np++) {
        addHandler('#navPoint' + (np + 1), UI.takeExit);
    }


    function addHandler(id, fn) {
        $(id).click(UI.takeExit);
    }

});


var UI = {

    takeExit: function(e) { // Handle click on an exit.
        var w = Map.getWorld(ship.worldNum);
        var exitNum = e.toElement.parentNode.id.substr(-1) - 1;
        var e = w.exits[exitNum];
        if (e != konst.NO_EXIT) {
            Ship.jumpTo(e.worldNum);
        }
        else {
        }
    },


    updateShipStatus: function() { // Make display reflect the ship.
        var w = Map.getWorld(ship.worldNum);
        showExits(w.exits);

        function showExits(exits) {
            for (var en = 0; en < parms.world.maxExits; en++) {
                var exit = w.exits[en];
                var img = $('#navPoint' + (en + 1) + ' > img')[0];
                var npName = $('#navPoint' + (en + 1) + 'Name')[0];
                if (exit != konst.NO_EXIT) {
                    img.src = 'assets/planet_' + zpad(exit.worldNum % parms.world.numWorldImages) + '.png';
                    img.title = npName.innerHTML = Map.getWorld(exit.worldNum).name;
                }
                else {
                    img.src = 'assets/planet_none.png';
                    img.title = npName.innerHTML = '----';
                }
            }
        }
    },
};
