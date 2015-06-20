import Ember from "Ember";

var get = Ember.get;


export default Ember.Component.extend({
	tagName: "a",
	classNameBindings: [ ":external-link" ],
	attributeBindings: [ "href" ],

	href: "#",

	action: "openBrowser",

	click: function( e ) {
		e.preventDefault();
		e.stopImmediatePropagation();
		this.sendAction( "action", get( this, "url" ) );
	},

	didInsertElement: function() {
		this._super.apply( this, arguments );
		this.$().on( "click", function( e ) {
			if ( e.button !== 0 ) {
				e.preventDefault();
				e.stopImmediatePropagation();
			}
		});
	}
});
