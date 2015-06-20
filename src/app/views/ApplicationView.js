import Ember from "Ember";
import guiSelectable from "gui/selectable";
import guiSmoothscroll from "gui/smoothscroll";
import template from "text!templates/application.html.hbs";

var get = Ember.get;


export default Ember.View.extend({
	template: Ember.HTMLBars.compile( template ),
	tagName: "body",
	classNames: [ "wrapper", "vertical" ],

	willInsertElement: function() {
		document.documentElement.removeChild( document.body );
	},

	didInsertElement: function() {
		guiSelectable();
		guiSmoothscroll();

		document.documentElement.addEventListener( "keyup", function( e ) {
			var f5    = e.keyCode === 116;
			var ctrlR = e.keyCode ===  82 && e.ctrlKey === true;
			if ( f5 || ctrlR ) {
				get( this, "controller" ).send( "refresh" );
			}
		}.bind( this ), false );
	}
});
