import Ember from "Ember";
import ListItemComponent from "components/ListItemComponent";
import layout from "text!templates/components/game.html.hbs";

var get = Ember.get;
var any = Ember.computed.any;


export default ListItemComponent.extend({
	layout: Ember.HTMLBars.compile( layout ),
	classNames: [ "game-component" ],

	action: "goto",

	game: any( "content.game", "content" ),
	hasStats: any( "content.channels", "content.viewers" ),

	click: function() {
		this.sendAction( "action", "games.game", get( this, "game.name" ) );
	}
});
