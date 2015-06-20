import Ember from "Ember";
import template from "text!templates/channel/settings.html.hbs";


export default Ember.View.extend({
	template: Ember.HTMLBars.compile( template ),
	tagName: "section",
	classNames: [ "content", "content-settings" ]
});
