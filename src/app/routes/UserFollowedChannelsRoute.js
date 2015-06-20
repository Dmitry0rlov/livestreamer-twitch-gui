import Ember from "Ember";
import UserIndexRoute from "routes/UserIndexRoute";
import InfiniteScrollRouteMixin from "mixins/InfiniteScrollRouteMixin";
import preload from "utils/preload";

var get = Ember.get;


export default UserIndexRoute.extend( InfiniteScrollRouteMixin, {
	itemSelector: ".channel-component",

	model: function() {
		return this.store.findQuery( "twitchChannelsFollowed", {
			offset: get( this, "offset" ),
			limit : get( this, "limit" )
		})
			.then(function( data ) {
				return data.toArray().mapBy( "channel" );
			})
			.then( preload( "@each.logo" ) );
	}
});
