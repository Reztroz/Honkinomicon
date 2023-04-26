SourceList["Honk"] = {
	name : "Honkonomicon",
	abbreviation : "Honk",
	abbreviationSpellsheet : "H",
	date : "2023/04/01",
	defaultExcluded : true,
}
SourceList["CoH"] = {
	name : "Circle of the Honk",
	abbreviation : "CoH",
	abbreviationSpellsheet : "CoH",
	date : "2023/04/01",
	defaultExcluded : true,
}
AddSubClass(
	"druid",
	"coh",
	{
		regExpSearch : /circleofthehonk/i,
		subname : "Circle of the Honk",
		source : ["CoH",2],
		features : {
			"subclassfeature2" : {
				name : "Circle Forms"
				source : ["CoH",2]
				minlevel : 2
				description : desc("")
			}
			"subclassfeature2.wild shape" : {
				name : "Combat Goose Shape"
				source : ["CoH",2]
				minlevel : 2,
				description : desc([
					"As an action, I assume the shape of a beast I have seen before with these rules:",
					" \u2022 I gain all its game statistics except Intelligence, Wisdom, or Charisma",
					" \u2022 I get its skill/saving throw prof. while keeping my own, using whichever is higher",
					" \u2022 I assume the beast's HP and HD; I get mine back when I revert back",
					" \u2022 I can't cast spells in beast form, but transforming doesn't break concentration",
					" \u2022 I retain features from class, race, etc., but I don't retain special senses",
					" \u2022 I can choose whether equipment falls to the ground, merges, or stays worn",
					" \u2022 I revert if out of time or unconscious; if KOd by damage, excess damage carries over"
					" \u2022 I gain additional Wild Shape options, that I do not have to have seen before."
				]),
				usages : [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, "\u221E\xD7 per "],
				recovery : "short rest",
				additional : levels.map(function (n) {
					if (n < 2) return "";
					var cr = Math.max(1, Math.floor(n/3));
					var hr = Math.floor(n/2);
					var restr = n < 4 ? ", no fly/swim" : n < 8 ? ", no fly" : "";
					return "CR " + cr + restr + "; " + hr + (restr.length ? " h" : " hours");
				}),
				action : ["bonus action", " (start/stop)"],
				eval : function() {
					processActions(false, "Druid: Wild Shape", ClassList.druid.features["subclassfeature2.wild shape"].action, "Wild Shape");
			},
			"subclassfeature2.1" : {
				name : "Combat Goose Shape",
				description : desc([
					"\u2022 I can use Wild Shape as a Bonus Action",
					"\u2022 I gain additional Wild Shape options, that I do not have to have seen before."
				])		
			},
			"subclassfeature3" : {
				name : "Circle Spells",
				source : ["CoH",2],
				minlevel : 3,
				description: desc([
					"My mystical connection with my Goose Circle infuses me with the ability to cast certain spells",
					"These are always prepared, but don't count against the number of spells I can prepare",
				]),
				spellcastingExtra : ["illusory gander","elemental goose","hada's harrowing honks","gosling gaggle"]
			},
			"subclassfeature6" : {
				name : "Theiving Pecks",
				minlevel : 3,
				description : (),
			},
			"subclassfeature10" : {
				name : "Peace Was Never An Option",
				minlevel : 10,
				description : ([
					"u\2022 I can't be charmed or frightened.",
					"u\2022 I gain resistance to bludgeoning, piercing and slashing damage in goose form.",
					"u\2022 When using a goose form's Honk action, creatures have disadvantage on saving throws against it."
				]),
			},
			"subclassfeature14" : {
				name : "Honk Of Defiance",
				minlevel : 14,
				description : "",
			}
			
CreatureList["pond goose"] = {
	name : "Pond Goose",
	source : ["CoH",5],
	defaultExcluded : true,
	size : 4,
	type : "Beast",
	alignment : "Unaligned",
	ac : 12,
	hp : 21,
	hd : [6,6],
	speed : "25 ft., fly 40ft., swim 25ft.",
	proficiencyBonus : 2,
	challengeRating : "1/4",
	scores : [7, 14, 10, 3, 11, 10],
	senses : "",
	attacksAction : 1,
	attacks : [{
		name : "Beak",
		ability : 2,
		damage : [1, 6, "piercing"],
		range : "Melee (5 ft)",
	},
	{
		name: "Honk(1/Day)",
		ability : 0,
		damage : [0, 0, ""],
		range : "15 ft",
		description : "The goose honks in a 15-foot-radius sphere. Make a DC 12 Wisdom saving throw or be frightened 1 min."
	}],
	skills : {
		"perception" : 2,
	},
	traits : [{
		name : "Hold Breath",
		description : "The goose can hold its breath for 10 minutes while underwater"
	}],
};
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