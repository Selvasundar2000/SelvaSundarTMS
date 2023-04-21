var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/", function(request, response, next){

	var query = "SELECT * FROM sample_data2 ORDER BY id DESC";

	database.query(query, function(error, data){

		if(error)
		{
			throw error; 
		}
		else
		{
			response.render('sample_data2', {title:'Node.js MySQL CRUD-2 Application', action:'list', sampleData:data, message:request.flash('success')});
		}

	});

});

router.get("/add", function(request, response, next){

	response.render("sample_data2", {title:'Insert Data into MySQL-2', action:'add'});

});

router.post("/add_sample_data2", function(request, response, next){

	var first_name = request.body.first_name;

	var last_name = request.body.last_name;

	var age = request.body.age;

	var gender = request.body.gender;
var d1 = request.body.d1;
var d2= request.body.d2;

	var query = `
	INSERT INTO sample_data2 
	(first_name, last_name, age, gender,d1,d2) 
	VALUES ("${first_name}", "${last_name}", "${age}", "${gender}","${d1}","${d2}")
	`;

	database.query(query, function(error, data){

		if(error)
		{
			throw error;
		}	
		else
		{
			request.flash('success', 'Sample Data Inserted');
			response.redirect("sample_data2");
		}

	});

});

router.get('/edit/:id', function(request, response, next){

	var id = request.params.id;

	var query = `SELECT * FROM sample_data2 WHERE id = "${id}"`;

	database.query(query, function(error, data){

		response.render('sample_data2', {title: 'Edit MySQL Table Data-2', action:'edit', sampleData:data[0]});

	});

});

router.post('/edit/:id', function(request, response, next){

	var id = request.params.id;

	var first_name = request.body.first_name;

	var last_name = request.body.last_name;

	var age = request.body.age;

	var gender = request.body.gender;
	var d1=request.body.d1;

	var d2=request.body.d2;

	var query = `
	UPDATE sample_data2 
	SET first_name = "${first_name}", 
	last_name = "${last_name}", 
	age = "${age}", 
	gender = "${gender}",
	d1 = "${d1}",
	d2= "${d2}" 
	WHERE id = "${id}"
	`;

	database.query(query, function(error, data){

		if(error)
		{
			throw error;
		}
		else
		{
			request.flash('success', 'Sample Data Updated');
			response.redirect('sample_data2');
		}

	});

});

router.get('/delete/:id', function(request, response, next){

	var id = request.params.id; 

	var query = `
	DELETE FROM sample_data2 WHERE id = "${id}"
	`;

	database.query(query, function(error, data){

		if(error)
		{
			throw error;
		}
		else
		{
			request.flash('success', 'Sample Data Deleted');
			response.redirect("sample_data2");
		}

	});

});

module.exports = router;