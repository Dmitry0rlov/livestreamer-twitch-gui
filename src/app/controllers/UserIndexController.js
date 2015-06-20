import Ember from "Ember";
import nwGui from "nwjs/nwGui";

var get = Ember.get;
var readOnly = Ember.computed.readOnly;


export default Ember.Controller.extend({
	auth        : Ember.inject.service(),
	notification: Ember.inject.service(),

	notif_running: readOnly( "notification.running" ),
	notif_error  : readOnly( "notification.error" ),

	scope: function() {
		return get( this, "auth.session.scope" ).split( "+" ).join( ", " );
	}.property( "auth.session.scope" ),

	actions: {
		"signout": function() {
			get( this, "auth" ).signout()
				.then(function() {
					this.transitionToRoute( "user.auth" );
				}.bind( this ) );
		},

		"notifications_restart": function() {
			get( this, "notification" ).start();
		},

		"copyToken": function( callback ) {
			var token = get( this, "auth.session.access_token" );
			var cb = nwGui.Clipboard.get();
			if ( !token || !cb ) { return; }

			cb.set( token, "text" );
			if ( callback instanceof Function ) {
				callback();
			}
		}
	}
});
