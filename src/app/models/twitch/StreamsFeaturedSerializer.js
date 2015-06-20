import TwitchSerializer from "store/TwitchSerializer";


export default TwitchSerializer.extend({

	attrs: {
		stream: { deserialize: "records" }
	},

	typeForRoot: function() {
		return "twitchStreamsFeatured";
	},

	normalizeHash: {
		featured: function( hash ) {
			hash.id = hash.stream._id;
			return hash;
		}
	}

});
