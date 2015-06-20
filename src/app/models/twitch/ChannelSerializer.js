import TwitchSerializer from "store/TwitchSerializer";


export default TwitchSerializer.extend({

	primaryKey: "name",

	attrs : {
		teams: { deserialize: "records" }
	},

	normalizePayload: function( payload ) {
		return {
			twitchChannel: payload
		};
	},

	typeForRoot: function() {
		return "twitchChannel";
	}

});
