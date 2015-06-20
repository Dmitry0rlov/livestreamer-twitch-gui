import Ember from "Ember";
import ListItemComponent from "components/ListItemComponent";
import layout from "text!templates/components/channel.html.hbs";


export default ListItemComponent.extend({
	layout: Ember.HTMLBars.compile( layout ),
	classNames: [ "channel-component" ]
});
