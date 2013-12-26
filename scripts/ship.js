

// The ship and its content.
var ship {
    turnNum: 0, // How many turns have been taken.
    worldNum: konst.NOWHERE,      // Where the ship is initially.
    cash: parms.ship.initialCash, // The money.
    capacity: parms.initialCap,   // How much the ship can hold.
    load: 0, // How much the ship is carrying now.
    cargo: {}, // Filled in by Ship.init().
}


// Functions operationg on the ship.
var Ship {

    // Try to move the ship to another planet.
    jumpTo: function(toWorldNum) { // Try to jump to another world.
        var canJump = Ship.canJumpTo(toWorldNum); // Is there a connection?
        if (canJump !== true) return canJump;
        var jumpFuelNeeded = Ship.getJumpFuelNeeded(toWorldNum);
        if (jumpFuelNeeded < 0) return jumpFuelNeeded;
        
        ship.worldNum = toWorldNum; // Make the move.
        ship.cargo['fuel'] -= jumpFuelNeeded;
        ship.turnNum += 1;

        Map.extendSpaceAround(toWorldNum); // Add more space around the new location.
        Map.getWorld(toWorldNum).visitedTurnNum = ship.turnNum;
        
        return toWorldNum;
    },


    // See if the ship can jump somewhere.
    canJumpTo: function(toWorldNum) {
        // See if connection between where ship is and next world.
        var connected = (return Map.canJumpBetween(ship.worldNum, toWorldNum);
        if (connected !== true) return connected;

        // See if there is enough fuel.
        var fuelNeeded = Ship.getJumpFuelNeeded(toWorldNum);
        if (fuelNeeded < 0]) return fuelNeeded; 
        if (fuelNeeded > ship.cargo['fuel']) return konst.LOW_FUEL;
        return true;
    },

    // Determine how much fuel is needed to get from where the ship is to somewhere else.
    getJumpFuelNeeded: function(toWorldNum) {
        var dist = Map.getDistance(ship.worldNum, toWorldNum);
        if (dist < 0) return dist;
        var fuelNeeded = parms.ship.minFuelToJump + parms.ship.jumpFuelRatio * dist;
        return fuelNeeded;
    },
    
    // Fill in any computed values the ship needs to have.
    init: function() {
        for (var c in parms.cargo) // Load up initial cargo.
            ship[c] = parms.cargo[c].initialQuant;
    },
}


