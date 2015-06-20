import Ember from "Ember";
import template from "text!templates/featured.html.hbs";

var get = Ember.get,
    set = Ember.set;


export default Ember.View.extend({
	template: Ember.HTMLBars.compile( template ),
	tagName: "main",
	classNames: [ "content", "content-featured", "wrapper", "vertical" ],

	createCursor: function() {
		var $cursor = Ember.$( "<i>" ).addClass( "cursor fa fa-caret-down" );
		this.$( ".channels" )
			.append( $cursor )
			.append( $cursor.clone().addClass( "cursor-hover" ) );
	}.on( "willInsertElement" ),

	actions: {
		"switchFeatured": function( index ) {
			if ( index === get( this, "controller._index" ) ) { return; }
			this.element.classList.add( "animated" );
			set( this, "controller._index", index );
		}
	}
});
