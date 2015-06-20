import DS from "EmberData";

var belongsTo = DS.belongsTo;


export default DS.Model.extend({

	stream: belongsTo( "twitchStream" )

}).reopenClass({

	toString: function() { return "kraken/search/streams"; }

});
