import Ember from "Ember";
import layout from "text!templates/components/checkbox.html.hbs";


export default Ember.Component.extend({
	defaultLayout: Ember.HTMLBars.compile( layout ),
	tagName: "label"
});
