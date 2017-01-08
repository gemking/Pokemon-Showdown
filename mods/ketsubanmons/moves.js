exports.BattleMovedex = {
  "baneburst": {
		accuracy: 95,
		basePower: 70,
		category: "Physical",
		desc: "Bane Burst deals damage and has a 30% chance of poisoning the foe. If used on a Poison-type Pokémon, this move ignores the type effectiveness of this move's type against Posion and treats it as being super effective against Poison types instead",
		shortDesc: "Bane Burst deals damage",
		id: "baneburst",
		name: "Bane Burst",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onEffectiveness: function (typeMod, type) {
			if (type === 'Poison') return 1;
		},
		secondary: {
			chance: 30,
			status: 'psn'
		},
		target: "allAdjacentFoes",
		type: "Poison"
	}
}
