define(function() {

	/* global requirejs:true */
	return ( requirejs && requirejs.nodeRequire
		? requirejs.nodeRequire
		: global.require
	)( "babel-core" );

});
