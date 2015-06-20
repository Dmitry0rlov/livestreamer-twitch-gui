import DS from "EmberData";

var attr = DS.attr;


export default DS.Model.extend({

	background: attr( "string" ),
	banner: attr( "string" ),
	created_at: attr( "date" ),
	display_name: attr( "string" ),
	info: attr( "string" ),
	logo: attr( "string" ),
	name: attr( "string" ),
	updated_at: attr( "date" )

});
