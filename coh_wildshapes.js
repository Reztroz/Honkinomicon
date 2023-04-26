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
		description : ""
	},
	{
		name: "Honk(1/Day)",
		ability : 0,
		damage : [0, 0, ""],
		range : "15 ft",
		description : "The goose honks in a 15-foot-radius sphere. Make a DC 12 Wisdom saving throw or be frightened 1 min."
	}],
	skills : {
		"perception" : 4,
		"intimidation" : 2
	},
	actions : [{
		name : "Multiattack",
		description : "The goose makes two beak attacks."
	}],
	traits : [{
		name : "Fearless Fowl",
		description : "The goose has the advantage on saving throws against being frightened"
	},
	{
		name : "Hold Breath",
		description : "The goose can hold its breath for 10 minutes while underwater"
	},
	{
		name : "Savage Attacker(1/Short Rest)",
		description : "When the goose rolls damage for a melee weapon attack, it can reroll the attack's damage dice and use either total."
	}],
};