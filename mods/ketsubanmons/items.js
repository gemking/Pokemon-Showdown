exports.BattleItems = {
	"typhlosite": {
		id: "typhlosite",
		name: "Typhlosite",
		megaStone: "Typhlosion-Mega",
		megaEvolves: "Typhlosion",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		gen: 6,
		desc: "If holder is a Typhlosion, this item allows it to Mega Evolve in battle."
	},
	"feralite": {
		id: "feralite",
		name: "feralite",
		megaStone: "Feraligatr-Mega",
		megaEvolves: "Feraligatr",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		gen: 6,
		desc: "If holder is a Feraligatr, this item allows it to Mega Evolve in battle."
	},
	"golemite": {
		id: "golemite",
		name: "golemite",
		megaStone: "Golem-Mega",
		megaEvolves: "Golem",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		gen: 6,
		desc: "If holder is a Golem, this item allows it to Mega Evolve in battle."
	},
	"clefablite": {
		id: "clefablite",
		name: "Clefablite",
		megaStone: "Clefable-Mega",
		megaEvolves: "Clefable",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		gen: 6,
		desc: "If holder is a Clefable, this item allows it to Mega Evolve in battle."
	},
	"empoleonite": {
		id: "empoleonite",
		name: "Empoleonite",
		megaStone: "Empoleon-Mega",
		megaEvolves: "Empoleon",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		gen: 6,
		desc: "If holder is an Empoleon, this item allows it to Mega Evolve in battle."
	},
	"flygonite": {
		id: "flygonite",
		name: "Flygonite",
		megaStone: "Flygon-Mega",
		megaEvolves: "Flygon",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		gen: 6,
		desc: "If holder is an Flygon, this item allows it to Mega Evolve in battle."
	}
};
