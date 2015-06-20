import TwitchSerializer from "store/TwitchSerializer";


export default TwitchSerializer.extend({

	primaryKey: "regex",

	typeForRoot: function() {
		return "twitchProductEmoticon";
	}

});
