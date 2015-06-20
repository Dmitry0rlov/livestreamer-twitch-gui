import Ember from "Ember";
import InfiniteScrollRouteMixin from "mixins/InfiniteScrollRouteMixin";
import preload from "utils/preload";

var get = Ember.get;


export default Ember.Route.extend( InfiniteScrollRouteMixin, {
	itemSelector: ".game-component",

	model: function() {
		return this.store.findQuery( "twitchGamesTop", {
			offset: get( this, "offset" ),
			limit : get( this, "limit" )
		})
			.then(function( data ) { return data.toArray(); })
			.then( preload( "@each.game.@each.box.@each.large" ) );
	}
});
