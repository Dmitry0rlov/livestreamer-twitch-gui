import Ember from "Ember";
import template from "text!templates/error.html.hbs";


export default Ember.View.extend({
	template: Ember.HTMLBars.compile( template ),
	tagName: "main",
	classNames: [ "content", "content-error" ]
});
