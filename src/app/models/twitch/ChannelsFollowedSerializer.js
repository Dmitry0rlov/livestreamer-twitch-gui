import TwitchSerializer from "store/TwitchSerializer";


export default TwitchSerializer.extend({

	attrs: {
		channel: { deserialize: "records" }
	},

	normalizeHash: {
		follows: function( hash ) {
			hash.id = hash.channel.name;
			return hash;
		}
	},

	typeForRoot: function() {
		return "twitchChannelsFollowed";
	}

});
