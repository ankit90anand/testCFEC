const webpack = require('webpack');

module.exports = {
	webpack: {
		base: {
			entry: {
				index: 'js/index.js'
			},
			ie11: true
		}
	}
};

