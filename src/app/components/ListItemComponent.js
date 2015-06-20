import Ember from "Ember";
import PreviewImageViewMixin from "mixins/PreviewImageViewMixin";

var set = Ember.set;


export default Ember.Component.extend( PreviewImageViewMixin, {
	tagName: "li",
	classNameBindings: [ "isNewItem:newItem" ],

	isNewItem: false,

	init: function() {
		this._super.apply( this, arguments );

		var settings = this.container.lookup( "record:settings" );
		set( this, "settings", settings );
	}
});
