import Ember from "Ember";
import InfiniteScrollRouteMixin from "mixins/InfiniteScrollRouteMixin";
import preload from "utils/preload";

var get = Ember.get;


export default Ember.Route.extend( InfiniteScrollRouteMixin, {
	itemSelector: ".stream-component",

	model: function() {
		return this.store.findQuery( "twitchStream", {
			offset: get( this, "offset" ),
			limit : get( this, "limit" )
		})
			.then(function( data ) { return data.toArray(); })
			.then( preload( "@each.preview.@each.medium_nocache" ) );
	}
});
