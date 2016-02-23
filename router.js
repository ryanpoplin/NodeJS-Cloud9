"use strict"

var routes = []

module.exports = {

	register: function (method, route, handler) {
		// add objects of routes to the routes array
		routes.push({
			method: method,
			route: route,
			handler: handler 
		})
	},

	process: function (req, res, next) {
		// url?
		const urlInfo = url.parse(req.url, true)
		console.log(urlInfo)
		const info = {
			get: urlInfo.query,
			post: {},
			path: urlInfo.pathname,
			method.req.method
		}
		for (var i = 0; i < routes.length; i++) {
			
		}
	}

}