import TwitchSerializer from "store/TwitchSerializer";


export default TwitchSerializer.extend({

	primaryKey: "id",

	attrs: {
		product: { deserialize: "records" }
	},

	typeForRoot: function() {
		return "twitchTicket";
	}

});
