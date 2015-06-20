import Ember from "Ember";

var alias = Ember.computed.alias;


export default Ember.Controller.extend({
	summary : alias( "model.summary" ),
	featured: alias( "model.featured" ),

	// reference the active stream by id
	// so we can safely go back to the route
	_index: 0
});
