var db 	= require('./connection.js');

exports.index = function(req, res) {
	db.query('SELECT * FROM users',function(error, results) {
		if(error) throw error;

		res.status(200).send(results);
	})
};