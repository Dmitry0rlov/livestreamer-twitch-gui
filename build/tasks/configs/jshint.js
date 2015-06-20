module.exports = {
	app: {
		options: {
			jshintrc: "src/.jshintrc"
		},
		src    : [
			"src/**/*.js",
			"!src/node_modules/**",
			"!src/vendor/**",
			"!src/test/**"
		]
	},

	test: {
		options: {
			jshintrc: "src/test/.jshintrc"
		},
		src    : [
			"src/test/*.js",
			"src/test/tests/**/*.js"
		]
	},

	tasks: {
		options: {
			jshintrc: "build/tasks/.jshintrc"
		},
		src    : [ "build/tasks/**/*.js" ]
	}
};
