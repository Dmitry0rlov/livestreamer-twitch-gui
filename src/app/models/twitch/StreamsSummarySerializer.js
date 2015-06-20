import TwitchSerializer from "store/TwitchSerializer";


export default TwitchSerializer.extend({

	primaryKey: "id",

	normalizePayload: function( payload ) {
		return {
			twitchStreamsSummaries: [{
				id: 1,
				channels: payload.channels,
				viewers: payload.viewers
			}]
		};
	}

});
