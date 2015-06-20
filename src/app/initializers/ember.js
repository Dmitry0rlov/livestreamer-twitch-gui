import Ember from "Ember";
import inflector from "utils/ember/inflector";
import helpers from "utils/ember/helpers";

Ember.$.extend( true, Ember.Inflector.inflector.rules, inflector );

Ember.Application.initializer({
	name: "helpers",

	initialize: function() {
		Object.keys( helpers ).forEach(function( name ) {
			Ember.Handlebars.helper( name, helpers[ name ] );
		});
	}
});
