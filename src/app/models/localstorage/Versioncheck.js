import DS from "EmberData";

var attr = DS.attr;


export default DS.Model.extend({

	checkagain: attr( "number" )

}).reopenClass({

	toString: function() { return "Versioncheck"; }

});
