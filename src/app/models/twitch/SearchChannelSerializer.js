import TwitchSerializer from "store/TwitchSerializer";


export default TwitchSerializer.extend({

	attrs: {
		channel: { deserialize: "records" }
	},

	typeForRoot: function() {
		return "twitchSearchChannel";
	},

	normalizePayload: function( payload ) {
		return {
			channels: ( payload.channels || [] ).map(function( hash ) {
				return { channel: hash };
			})
		};
	},

	normalizeHash: {
		channels: function( hash ) {
			hash.id = hash.channel.name;
			return hash;
		}
	}

});
