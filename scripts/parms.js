
// Parameters controlling gameplay.
var parms = {
    world: { // Stuff about worlds.
        homeworldName: 'Dirt', // The name of the first world.
        maxExits: 4,         // How many places might a world be linked to?
        numExitsProb: [0, 10, 35, 35, 20], // Probability of 0, 1, 2, 3, and 4 exits.

        exitLoopProb: 0.2, // Probability exit will go to an existing world instead of creating a new one.
        exitDistProb: [0, 0, 20, 30, 40, 10], // Probability of distance 0, 1, 2, 3, 4, 5.

        minFuelToJump: 3,    // Just making a jump uses this much, plus the distance.
        jumpFuelRatio: 3.75, // Jump fuel required is dist * ratio (rounded up).
        numWorldImages: 13, // Number of images for worlds.
    },

    ship: {
        initialCash: 1000, // The dough the player starts out with.
        initialCap: 100,     // Initial maximum capacity of cargo hold.
        fuelPercent: 0.5,  // Initially, this much of the hold is fuel (used by init).
    },

    cargo: { // This is where what constitues cargo is found.
            food: {
                initialQuant: 0, // How much in the ship's hold for new game.
                capacity: 100,   // Maximum size of planet's warehouse.
                basePrice: 10,   // Price is never lower.
                demandAdj: 0.03, // Price change based on quantity on hand and available space.
                prodRate: 0.1,   // Production per turn.
            },
            metal: {
                initialQuant: 0,
                capacity: 50,
                basePrice: 50,
                demandAdj: 0.1,
                prodRate: 0.03,
            },
            waste: {
                initialQuant: 0,
                capacity: 200,
                basePrice: 1,
                demandAdj: 0.7,
                prodRate: 0.5,
            },
            artifacts: {
                initialQuant: 0,
                capacity: 10,
                basePrice: 100,
                demandAdj: 2,
                prodRate: 0.01,
            },
            fuel: {
                initialQuant: 10, // Set by init.
                capacity: 500,
                basePrice: 50,
                demandAdj: 0.1,
                prodRate: 5,
            },
            ammo: {
                initialQuant: 50, // Set by init.
                capacity: 500,
                basePrice: 50,
                demandAdj: 0.1,
                prodRate: 5,
            },
    },

    init: function() { // Set up any and all computed parameter values.
        this.cargo.fuel.initialQuant =
            Math.round(this.ship.capacity * this.ship.fuelPercent);
    },
}
