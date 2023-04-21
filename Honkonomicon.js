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
					"As a bonus action, I assume the shape of a beast I have seen before with these rules:",
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
	}],
	Skills : {
		"Perception" : 2,
	}
		
}
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