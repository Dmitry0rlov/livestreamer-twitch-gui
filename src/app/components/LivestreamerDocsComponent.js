import Ember from "Ember";
import ExternalLinkComponent from "components/ExternalLinkComponent";
import layout from "text!templates/components/livestreamerdocs.html.hbs";

var get = Ember.get;


export default ExternalLinkComponent.extend({
	metadata: Ember.inject.service(),

	layout: Ember.HTMLBars.compile( layout ),

	tagName: "span",
	classNameBindings: [ ":docs" ],
	attributeBindings: [ "title" ],
	title: "Read the documentation of this livestreamer parameter",

	url: function() {
		var url = get( this, "metadata.config.livestreamer-docs-url" );
		var cmd = get( this, "cmd" );

		return url.replace( "{cmd}", cmd );
	}.property( "cmd" )
});
