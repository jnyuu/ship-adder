// export const DEFAULT_SHIP_CREATION_OBJECTS = {
//   small: {
//     sizeCategory: "small",
//     description: "0m - 100m",
//     maxAttributelevel: 2,
//     maxAttributes: 2,
//     maxHullPoints: 3,
//     maxDamagePoints: 3,
//     tierMultiplier: 1,
//   },
//   medium: {
//     sizeCategory: "medium",
//     description: "100m - 1km",
//     maxAttributelevel: 4,
//     maxAttributes: 3,
//     maxHullPoints: 8,
//     maxDamagePoints: 8,
//     tierMultiplier: 2,
//   },
//   large: {
//     sizeCategory: "large",
//     description: "1km - 5km",
//     maxAttributelevel: 6,
//     maxAttributes: 4,
//     maxHullPoints: 20,
//     maxDamagePoints: 20,
//     tierMultiplier: 4,
//   },
//   ark: {
//     sizeCategory: "ark",
//     description: "5km - INF",
//     maxAttributelevel: 12,
//     maxAttributes: 5,
//     maxHullPoints: Infinity,
//     maxDamagePoints: Infinity,
//     tierMultiplier: 8,
//   },
// };

export const SHIP_SIZES = {
  small: {
    sizeCategory: "small",
    description: "0m - 100m",
    maxAttributelevel: 2,
    maxAttributes: 2,
    maxHullPoints: 3,
    maxDamagePoints: 3,
    tierMultiplier: 1,
  },
  medium: {
    sizeCategory: "medium",
    description: "100m - 1km",
    maxAttributelevel: 4,
    maxAttributes: 3,
    maxHullPoints: 8,
    maxDamagePoints: 8,
    tierMultiplier: 2,
  },
  large: {
    sizeCategory: "large",
    description: "1km - 5km",
    maxAttributelevel: 6,
    maxAttributes: 4,
    maxHullPoints: 20,
    maxDamagePoints: 20,
    tierMultiplier: 4,
  },
  ark: {
    sizeCategory: "ark",
    description: "5km - INF",
    maxAttributelevel: 12,
    maxAttributes: 5,
    maxHullPoints: Infinity,
    maxDamagePoints: Infinity,
    tierMultiplier: 8,
  },
};

export const SHIP_ATTRIBUTES = {
  positive: {
    scaling: {
      allShips: [
        "Shielding",
        "Jamming",
        "Jamming Resistance",
        // Jamming Resistance is combined from all ships in fleet
        "Cargo Hold",
        "Shielding Boost (support)",
        "Damage Boost (support)",
        "Hull Repair (support)",
        "Mining",
        "Research",
        "Scanning",
        "Hacking",
        "Hacking Resistance",
        // Hacking Resistance is combined from all ships in fleet
        "Luxurious",
        "Long Range Weaponry",
        "Salvaging",
        "Tractor Beam",
      ],
      onlySmallShips: ["evasion/speed"],
    },
    nonScaling: {
      allShips: ["Cloak", "Advanced Cloak", "Flash Warp Drive"],
    },
  },

  negative: {
    scaling: {
      allShips: [
        "Malfunctioning Shields (weaker received shield boost)",
        "Old Weaponry (weaker received damage boost)",
        "Rusty (weaker receiver hull repair)",
      ],
    },
  },
};

export const SHIP_TIERS = {
  t1: {
    bonuses: [],
  },
  t2: {
    bonuses: ["+1 HP"],
  },
  t3: {
    bonuses: ["+1 HP", "+1 DMG"],
  },
  t4: {
    bonuses: ["+1 HP", "+1 DMG", "+1 LEVEL TO HIGHEST LEVEL ATTRIBUTE"],
  },
};
