import TwitchSerializer from "store/TwitchSerializer";


export default TwitchSerializer.extend({

	typeForRoot: function() {
		return "twitchUserSubscription";
	},

	normalizePayload: function( payload ) {
		payload._id = payload.channel.name;
		payload.channel = null;
		return {
			twitchUserSubscription: payload
		};
	}

});
