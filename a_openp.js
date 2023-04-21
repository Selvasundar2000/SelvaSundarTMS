var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/", function(request, response, next){

	var query = "SELECT * FROM a_openp ORDER BY id DESC";

	database.query(query, function(error, data){

		if(error)
		{
			throw error; 
		}
		else
		{
			response.render('a_openp', {title:'', action:'list', sampleData:data, message:request.flash('success')});
		}

	});

});

router.get("/add", function(request, response, next){

	response.render("a_openp", {title:'', action:'add'});

});

router.post("/add_a_openp", function(request, response, next){

	var depart = request.body.depart;

	var post = request.body.post;

	var dat = request.body.dat;

	var query = `
	INSERT INTO a_openp 
	(depart, post, dat) 
	VALUES ("${depart}", "${post}", "${dat}")
	`;

	database.query(query, function(error, data){

		if(error)
		{
			throw error;
		}	
		else
		{
			request.flash('success', 'Data Inserted');
			response.redirect("/a_openp");
		}

	});

});

router.get('/edit/:id', function(request, response, next){

	var id = request.params.id;

	var query = `SELECT * FROM a_openp WHERE id = "${id}"`;

	database.query(query, function(error, data){

		response.render('a_openp', {title: '', action:'edit', sampleData:data[0]});

	});

});

router.post('/edit/:id', function(request, response, next){

	var id = request.params.id;

    var depart = request.body.depart;

	var post = request.body.post;

	var dat = request.body.dat;

	var query = `
	UPDATE a_openp 
	SET depart = "${depart}", 
	post = "${post}", 
	dat = "${dat}"
	WHERE id = "${id}"
	`;

	database.query(query, function(error, data){

		if(error)
		{
			throw error;
		}
		else
		{
			request.flash('success', 'Data Updated');
			response.redirect('/a_openp');
		}

	});

});

router.get('/delete/:id', function(request, response, next){

	var id = request.params.id; 

	var query = `
	DELETE FROM a_openp WHERE id = "${id}"
	`;

	database.query(query, function(error, data){

		if(error)
		{
			throw error;
		}
		else
		{
			request.flash('success', 'Data Deleted');
			response.redirect("/a_openp");
		}

	});

});


module.exports = router;