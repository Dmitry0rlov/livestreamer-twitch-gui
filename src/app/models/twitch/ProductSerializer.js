import TwitchSerializer from "store/TwitchSerializer";


export default TwitchSerializer.extend({

	primaryKey: "name",

	attrs: {
		emoticons: { deserialize: "records" }
	},

	typeForRoot: function() {
		return "twitchProduct";
	}

});
