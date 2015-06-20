import Ember from "Ember";
import metadata from "text!root/metadata.json";

var alias = Ember.computed.alias;

var _metadata = JSON.parse( metadata );


export default Ember.Service.extend({
	"metadata"    : _metadata,

	"package"     : alias( "metadata.package" ),
	"config"      : alias( "metadata.package.config" ),
	"dependencies": alias( "metadata.dependencies" ),
	"contributors": alias( "metadata.contributors" )
});
