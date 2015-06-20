import DS from "EmberData";

var belongsTo = DS.belongsTo;


export default DS.Model.extend({

	channel: belongsTo( "twitchChannel" )

}).reopenClass({

	toString: function() { return "kraken/search/channels"; }

});
