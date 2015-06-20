import TwitchSerializer from "store/TwitchSerializer";


export default TwitchSerializer.extend({

	typeForRoot: function() {
		return "twitchToken";
	},

	normalizePayload: function( payload ) {
		return {
			twitchToken: [ payload.token ]
		};
	},

	normalize: function( type, hash ) {
		hash.id = 1;
		return hash;
	}

});
