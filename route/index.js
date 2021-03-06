var main = require("./main"),
	error = require("./error"),
	dbcheck = require("./dbcheck");

module.exports = function (app) {
	app.get('/', main.home);
	app.get('/articles/:id', main.article);
	app.get('/admin', main.admin_page);
	app.get('/admin/add', main.add_new_post);
	app.post('/admin/submit', main.submit_new_post);
	app.post('/admin', main.add_post_to_db);
	app.get('/db/*', dbcheck.main);
};