import DS from "EmberData";

var attr = DS.attr;
var belongsTo = DS.belongsTo;


export default DS.Model.extend({

	box: belongsTo( "twitchImage" ),
	giantbomb_id: attr( "number" ),
	logo: belongsTo( "twitchImage" ),
	name: attr( "string" ),
	popularity: attr( "number" )

}).reopenClass({

	toString: function() { return "kraken/games"; }

});
