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
				name : "Combat Goose Shape"
				source : ["CoH",2]
				minlevel : 2
				description : "\n " + "When you choose this circle at 2nd level, you gain the ability to use Wild Shape on your turn as a bonus action, rather than as an action. Additionally, you gain access to additional Wild Shape options, listed at the end of this supplement. You don't need to have previously seen these new creatures to transform into them, as"
				eval : "RemoveAction(\"action\", \"Wild Shape\"); AddAction(\"bonus action\", \"Wild Shape\", \"Circle of the Honk\")"
				removeeval : "RemoveAction(\"bonus action\", \"Wild Shape\"); AddAction(\"action\", \"Wild Shape\", \"Druid\")"
			}