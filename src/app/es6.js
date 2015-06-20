/*
 * Customized requirejs babel plugin
 *
 * modified version of RequireJS-Babel by mikach
 * https://github.com/mikach/requirejs-babel
 * license: MIT
 */

//>>excludeStart('excludeBabel', pragmas.excludeBabel)

var defaultOptions = {
	modules: "amd",
	only: /[^\/]/,
	nonStandard: false,
	whitelist: [
		"es6.templateLiterals",
		"es6.parameters.rest",
		"es6.arrowFunctions",
		"es6.destructuring",
		"es6.spread",
		"es6.parameters.default",
		"es6.properties.computed",
		"es6.properties.shorthand",
		"es6.blockScoping",
		"es6.constants",
		"es6.modules"
	],
	resolveModuleSource: function( source ) {
		// ignore other plugins and don't transform libraries
		return source.indexOf( "!" ) === -1 && source.indexOf( "/" ) !== -1
			? "es6!" + source
			: source;
	}
};

var fetchText;
var fs;

// build cache
var _buildMap = {};

// check if a module is written in AMD
var reAmd = /^(?:\s*\/\/.*\n\s*|\s*\/\*.*\*\/\s*)*define\(/m;
// detect file endings
var reEnd = /\.js$/;

// browser and node contexts
if ( typeof window !== "undefined" && window.navigator && window.document ) {
	fetchText = function fetchText( url, callback ) {
		var xhr = new XMLHttpRequest();
		xhr.open( "GET", url, true );
		xhr.onreadystatechange = function() {
			//Do not explicitly handle errors, those should be
			//visible via console output in the browser.
			if ( xhr.readyState === 4 ) {
				callback( xhr.responseText );
			}
		};
		xhr.send( null );
	};

} else if ( typeof process !== "undefined" && process.versions && !!process.versions.node ) {
	// Using special require.nodeRequire, something added by r.js.
	fs = require.nodeRequire( "fs" );
	fetchText = function fetchText( path, callback ) {
		callback( fs.readFileSync( path, "utf8" ) );
	};
}

//>>excludeEnd('excludeBabel')


define([
	//>>excludeStart('excludeBabel', pragmas.excludeBabel)
	"babel",
	"module"
	//>>excludeEnd('excludeBabel')
], function(
	//>>excludeStart('excludeBabel', pragmas.excludeBabel)
	babel,
	_module
	//>>excludeEnd('excludeBabel')
) {
	//>>excludeStart('excludeBabel', pragmas.excludeBabel)
	var _config = _module.config();
	_config.sourceMap = _config.isBuild
		? false
		: "inline";

	Object.keys( defaultOptions ).forEach(function( key ) {
		if ( !_config.hasOwnProperty( key ) ) {
			_config[ key ] = defaultOptions[ key ];
		}
	});

	function getOptions( options ) {
		Object.keys( _config ).forEach(function( key ) {
			options[ key ] = _config[ key ];
		});
		return options;
	}
	//>>excludeEnd('excludeBabel')

	return {
		//>>excludeStart('excludeBabel', pragmas.excludeBabel)
		load: function( name, req, onload, config ) {
			var url = req.toUrl( name.replace( reEnd, "" ) + ".js" );

			fetchText( url, function( text ) {
				// don't transform modules written in AMD
				var code = reAmd.test( text )
					? text
					: babel.transform( text, getOptions({
						sourceFileName: url
					}) ).code;

				if ( config.isBuild ) {
					_buildMap[ name ] = code;
				}

				onload.fromText( code );
			});
		},

		write: function( pluginName, moduleName, write ) {
			if ( _buildMap.hasOwnProperty( moduleName ) ) {
				write.asModule(
					pluginName + "!" + moduleName,
					_buildMap[ moduleName ]
				);
			}
		}
		//>>excludeEnd('excludeBabel')
	};
});
