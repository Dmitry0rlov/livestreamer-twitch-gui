import Ember from "Ember";
import InfiniteScrollRouteMixin from "mixins/InfiniteScrollRouteMixin";
import preload from "utils/preload";

var get = Ember.get;
var set = Ember.set;


export default Ember.Route.extend( InfiniteScrollRouteMixin, {
	itemSelector: ".stream-component",

	model: function( params ) {
		if ( arguments.length > 0 ) {
			set( this, "game", get( params || {}, "game" ) );
		}

		return this.store.findQuery( "twitchStream", {
			game	: get( this, "game" ),
			offset	: get( this, "offset" ),
			limit	: get( this, "limit" )
		})
			.then(function( data ) { return data.toArray(); })
			.then( preload( "@each.preview.@each.medium_nocache" ) );
	},

	setupController: function( controller ) {
		this._super.apply( this, arguments );

		set( controller, "game", get( this, "game" ) );
	}
});
