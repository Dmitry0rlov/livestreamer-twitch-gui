import Ember from "Ember";
import RetryTransitionMixin from "mixins/RetryTransitionMixin";

var get = Ember.get;


export default Ember.Controller.extend( RetryTransitionMixin, {
	auth: Ember.inject.service(),

	scope: function() {
		return get( this, "auth.scope" ).join( ", " );
	}.property( "auth.scope" )
});
