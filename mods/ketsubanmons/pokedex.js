exports.BattlePokedex = {
	eevee:{
		inherit: true,
		evos:["vaporeon","jolteon","flareon","espeon","umbreon","leafeon","glaceon","sylveon","toxieon"]
	},
	toxeon:{num:-62,species:"Toxeon",types:["Poison"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:80,atk:130,def:95,spa:85,spd:55,spe:100},abilities:{0:"Poison Touch",1:"Corrosive Aura"},heightm:1,weightkg:29,color:"Green",prevo:"eevee",evoLevel:1,eggGroups:["Field"]},
	typhlosion:{
		inherit:true,
		otherFormes:["typhlosionmega"]
	},
	feraligatr:{
		inherit:true,
		otherFormes:["feraligatrmega"]
	},
	golem:{
		inherit:true,
		otherFormes:["golemmega"]
	},
	clefable:{
                inherit:true,
                otherFormes:["clefablemega"]
	},
	empoleon:{
                inherit:true,
                otherFormes:["empoleonmega"]
	},
	flygon:{
		inherit:true,
                otherFormes:["flygonmega"]
	},
	typhlosionmega:{num:157,species:"Typhlosion-Mega",baseSpecies:"Typhlosion",forme:"Mega",formeLetter:"M",types:["Fire"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:78,atk:94,def:83,spa:149,spd:90,spe:140},abilities:{0:"Mold Breaker"},heightm:1.7,weightkg:79.5,color:"Yellow",prevo:"quilava",evoLevel:36,eggGroups:["Field"]},
	feraligatrmega:{num:160,species:"Feraligatr-Mega",baseSpecies:"Feraligatr",forme:"Mega",formeLetter:"M",types:["Water","Dark"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:85,atk:145,def:130,spa:79,spd:93,spe:98},abilities:{0:"Strong Jaw"},heightm:2.3,weightkg:88.8,color:"Blue",prevo:"croconaw",evoLevel:30,eggGroups:["Monster","Water 1"]},
	golemmega:{num:76,species:"Golem-Mega",baseSpecies:"Golem",forme:"Mega",formeLetter:"M",types:["Rock","Ground"],baseStats:{hp:80,atk:170,def:150,spa:45,spd:95,spe:55},abilities:{0:"Mineralate"},heightm:1.4,weightkg:300,color:"Brown",prevo:"graveler",evoLevel:25,eggGroups:["Mineral"]},
	clefablemega:{num:36,species:"Clefable-Mega",baseSpecies:"Clefable",forme:"Mega",formeLetter:"M",types:["Fairy"],genderRatio:{M:0.25,F:0.75},baseStats:{hp:108,atk:85,def:80,spa:95,spd:120,spe:45},abilities:{0:"Unaware"},heightm:1.3,weightkg:40,color:"Pink",prevo:"clefairy",evoLevel:1,eggGroups:["Fairy"]},
	empoleonmega:{num:395,species:"Empoleon-Mega",baseSpecies:"Empoleon",forme:"Mega",formeLetter:"M",types:["Water","Steel"],genderRatio:{M:0.875,F:0.125},baseStats:{hp:84,atk:86,def:108,spa:141,spd:131,spe:80},abilities:{0:"Flare Boost"},heightm:1.7,weightkg:84,color:"Blue",prevo:"prinplup",evoLevel:36,eggGroups:["Water 1", "Field"]},
	flygonmega:{num:330,species:"Flygon-Mega",baseSpecies:"Flygon",forme:"Mega",formeLetter:"M",types:["Ground","Dragon"],genderRatio:{M:0.5,F:0.5},baseStats:{hp:120,atk:140,def:100,spa:95,spd:50,spe:115},abilities:{0:"Adaptability"},heightm:2,weightkg:82,color:"Green",prevo:"vibrava",evoLevel:45,eggGroups:["Bug"]}
};
