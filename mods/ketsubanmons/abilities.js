exports.BattleAbilities = {
  "corrosiveaura": {
		desc: "No status healing moves or foe berries",
		shortDesc: "No status healing moves or foe berries",
		onStart: function (pokemon) {
			this.add('-ability', pokemon, 'Corrosive Aura');
		},
		onAnyTryPrimaryHit: function (target, source, move) {
			if (move && move.id in {rest:1, healbell:1, aromatherapy:1}) {
				this.add('-activate', this.effectData.target, 'ability: Corrosive Aura', '[of] ' + target);
				return null;
			}
		},
		onFoeEatItem: false,
		id: "corrosiveaura",
		name: "Corrosive Aura"
	},
	"mineralate": {
		desc: "This Pokemon's Normal-type moves become Rock-type moves and have their power multiplied by 1.3. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Rock type and have 1.3x power.",
		onModifyMovePriority: -1,
		onModifyMove: function (move, pokemon) {
			if (move.type === 'Normal' && move.id !== 'naturalgift') {
				move.type = 'Rock';
				if (move.category !== 'Status') pokemon.addVolatile('mineralate');
			}
		},
		effect: {
			duration: 1,
			onBasePowerPriority: 8,
			onBasePower: function (basePower, pokemon, target, move) {
				return this.chainModify([0x14CD, 0x1000]);
			}
		},
		id: "mineralate",
		name: "Mineralate"
	}
};
