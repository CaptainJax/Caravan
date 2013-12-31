
// Global variables.
var parms; // The parameters controlling the game.
var ship;  // The player's ship;
var map;   // The map of planets.

// Constants.
var konst = {
    NOWHERE: -1,     // A place that doesn't exist.
    FROM_NOWHERE: -2,// Making an isolated world.
    NOT_VISITED: -3, // World has not been visited.
    NO_EXIT: -3,     // This is not an exit.
    CANT_JUMP: -4,   // Tried and failed to jump.
    LOW_FUEL: -5,    // The reason you can't jump.
    EXITS_FULL: -6,  // Why can't add an exit to a world.
}


// Initialize the globals.
$(window).load(function() { // All assets must be loaded.
    parms.init();   // The parameters controlling the game.
    Map.init();      // The map of planets.
    Ship.init();     // The player's ship;
    UI.updateShipStatus();
    //loadGame(); // Get saved state, or just use what we have now.
});


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Load game state from localStorage, or create it.
function loadGame() {
    if (localStorage.getItem('caravanState')) {
        try {
            var state = JSON.parse(localStorage.caravanState);
            parms = state.parms;
            ship = state.ship;
            map = state.map;;
        }
        catch (e) {
            return fatalError(e);
        }
    }
    else; // Map, ship, etc. already set up for new game by their respective init()!
}


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Save game state to localStorage.
function saveGame() {
    var state = {'parms':parms, 'ship':ship, 'map':map};
    var stateStr = JSON.stringify(state);
    localStorage.caravanState = stateStr;
}


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Utility: Return a random number distributed by args.
// Example: randDist(0, 10, 20, 70) never returns zero, 1 10%, 2 20%, 3 70% of the time.
// Arguments should total 100 when expecting percentages.
function randDist() {
    var dist = Array.prototype.slice.call(arguments, 0)[0]; // Arguments to array.
    for (var i = 1; i < dist.length; i++) dist[i] += dist[i-1]; // Collapse thresholds.

    // Walk a random number up the thresholds and return the index of the one it exceeds.
    var maxDist = dist[dist.length - 1];
    var rand = Math.floor(Math.random() * maxDist);
    for (var distNum = 0; distNum < dist.length; distNum++)
        if (rand < dist[distNum]) return distNum;
    return rand; // JIC.
}


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Something horrible happended.
// Asynchronous code continues to run!
function fatalError(message) {
    throw("Fatal error: " + message);
}
