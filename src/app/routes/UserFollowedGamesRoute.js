import Ember from "Ember";
import UserIndexRoute from "routes/UserIndexRoute";
import InfiniteScrollRouteMixin from "mixins/InfiniteScrollRouteMixin";
import preload from "utils/preload";

var get = Ember.get;


export default UserIndexRoute.extend( InfiniteScrollRouteMixin, {
	itemSelector: ".game-component",

	model: function() {
		return this.store.findQuery( "twitchGamesFollowed", {
			offset: get( this, "offset" ),
			limit : get( this, "limit" )
		})
			.then(function( data ) {
				return data.toArray();
			})
			.then( preload( "@each.box.@each.large" ) );
	}
});
