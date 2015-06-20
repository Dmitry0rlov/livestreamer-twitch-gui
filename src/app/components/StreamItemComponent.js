import Ember from "Ember";
import ListItemComponent from "components/ListItemComponent";
import layout from "text!templates/components/stream.html.hbs";

var get = Ember.get;
var alias = Ember.computed.alias;
var and = Ember.computed.and;
var bool = Ember.computed.bool;


export default ListItemComponent.extend({
	layout: Ember.HTMLBars.compile( layout ),
	classNameBindings: [ ":stream-component", "_showGame:show-game", "showFlag:show-flag" ],

	action: "openLivestreamer",

	channel: alias( "content.channel" ),

	showGame: false,
	_showGame: and( "showGame", "channel.game" ),

	showFlag: bool( "settings.gui_flagsvisible" ),

	actions: {
		"startStream": function() {
			this.sendAction( "action", get( this, "content" ) );
		}
	}
});
