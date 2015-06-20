import DS from "EmberData";


export default DS.RESTSerializer.extend({

	typeForRoot: function() {
		return "githubReleases";
	},

	normalizePayload: function( payload ) {
		return {
			githubReleases: payload
		};
	}

});
