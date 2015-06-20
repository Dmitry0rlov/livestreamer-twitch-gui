import Ember from "Ember";
import template from "text!templates/user/index.html.hbs";

var set = Ember.set;


export default Ember.View.extend({
	template: Ember.HTMLBars.compile( template ),
	tagName: "main",
	classNames: [ "content", "content-user", "content-user-index" ],

	showTokenForm: false,

	actions: {
		"showTokenForm": function() {
			set( this, "showTokenForm", true );
			Ember.run.next( this, function() {
				this.$( "input" ).focus();
			});
		}
	}
});
