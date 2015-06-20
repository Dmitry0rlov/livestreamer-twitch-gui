import Ember from "Ember";


export default Ember.ArrayController.extend({
	auth: Ember.inject.service(),

	sortAscending: false,
	sortProperties: [ "started" ]
});
