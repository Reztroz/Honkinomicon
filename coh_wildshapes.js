CreatureList["dire goose"] = {
	name : "Dire Goose",
	source : ["CoH",5],
	defaultExcluded : true,
	size : 2,
	type : "Beast",
	alignment : "Unaligned",
	ac : 13,
	hp : 39,
	hd : [6,10],
	speed : "40 ft., fly 60ft., swim 40ft.",
	proficiencyBonus : 2,
	challengeRating : "1",
	scores : [16, 14, 12, 4, 14, 11],
	senses : "",
	attacksAction : 1,
	attacks : [{
		name : "Beak",
		ability : 1,
		damage : [1, 8, "piercing"],
		range : "Melee (5 ft)",
	}],
	Skills : {
		"Perception" : 4,
		"Intimidation" : 2,
	}
		
}