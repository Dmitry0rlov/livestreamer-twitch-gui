import Ember from "Ember";
import PreviewImageViewMixin from "mixins/PreviewImageViewMixin";
import template from "text!templates/channel/channel.html.hbs";

var get = Ember.get;


export default Ember.View.extend( PreviewImageViewMixin, {
	template: Ember.HTMLBars.compile( template ),
	tagName: "main",
	classNames: [ "content", "content-channel" ],

	actions: {
		"toggleSettings": function() {
			this.element.classList.add( "animated" );
			get( this, "controller" ).send( "toggleSettings" );
		}
	}
});
