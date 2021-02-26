const path = require('path');
const mergeFunction = require('config-extend');

module.exports = function (grunt) {
	'use strict';

	//if we want to track the time each task takes
	//require('time-grunt')(grunt);

	// Load all grunt configurations in grunt/ folder
	require('load-grunt-config')(grunt,
		{
			configPath: path.join(process.cwd(), './node_modules/composer-front-end-config/conf/grunt/'),
			overridePath: path.join(process.cwd(), 'grunt'),
			mergeFunction,

			jitGrunt: {
				// here you can pass options to jit-grunt (or just jitGrunt: true)
				staticMappings: {
					// here you can specify static mappings, for example:
					'generateAliases': 'grunt-webpack-aliases-generator',
					'coverageEnforcer': 'grunt-karma-coverage-enforcer'
				}
			}
		});
};