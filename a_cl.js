var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/", function(request, response, next){

	var query = "SELECT * FROM a_cl ORDER BY id DESC";

	database.query(query, function(error, data){

		if(error)
		{
			throw error; 
		}
		else
		{
			response.render('a_cl', {title:'', action:'list', sampleData:data, message:request.flash('success')});
		}

	});

});

router.get("/add", function(request, response, next){

	response.render("a_cl", {title:'', action:'add'});

});

router.post("/add_a_cl", function(request, response, next){

	var nme = request.body.nme;

	var gen = request.body.gen;

	var qual = request.body.qual;

	var phno = request.body.phno;

    var email = request.body.email;

	var query = `
	INSERT INTO a_cl 
	(nme, gen, qual, phno,email) 
	VALUES ("${nme}", "${gen}", "${qual}", "${phno}", "${email}")
	`;

	database.query(query, function(error, data){

		if(error)
		{
			throw error;
		}	
		else
		{
			request.flash('success', 'Data Inserted');
			response.redirect("/a_cl");
		}

	});

});

router.get('/edit/:id', function(request, response, next){

	var id = request.params.id;

	var query = `SELECT * FROM a_cl WHERE id = "${id}" `;

	database.query(query, function(error, data){

		response.render('a_cl', {title: '', action:'edit', sampleData:data[0]});

	});

});

router.post('/edit/:id', function(request, response, next){
    var id = request.params.id;

	var nme = request.body.nme;

	var gen = request.body.gen;

	var qual = request.body.qual;

	var phno = request.body.phno;

	var email = request.body.email;

    var query = `
	UPDATE a_cl 
	SET nme = "${nme}", 
	gen = "${gen}", 
	qual = "${qual}", 
	phno = "${phno}",
    email = "${email}" 
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
			response.redirect('/a_cl');
		}

	});

});

router.get('/delete/:id', function(request, response, next){

	var id = request.params.id; 

	var query = `
	DELETE FROM a_cl WHERE id = "${id}"  `;

	database.query(query, function(error, data){

		if(error)
		{
			throw error;
		}
		else
		{
			request.flash('success', 'Data Deleted');
			response.redirect("/a_cl");
		}

	});

});



module.exports = router;