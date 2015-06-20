import Ember from "Ember";
import layout from "text!templates/components/statsrow.html.hbs";


export default Ember.Component.extend({
	layout: Ember.HTMLBars.compile( layout ),
	tagName: "div",
	classNameBindings: [ ":stats-row", "class" ],

	withFlag: true
});
