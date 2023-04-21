var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/", function(request, response, next){

	var query = "SELECT * FROM a_prof ORDER BY id DESC";

	database.query(query, function(error, data){

		if(error)
		{
			throw error; 
		}
		else
		{
			response.render('a_prof', {title:'', action:'list', sampleData:data, message:request.flash('success')});
		}

	});

});

router.get("/add", function(request, response, next){

	response.render("a_prof", {title:'', action:'add'});

});

router.post("/add_a_prof", function(request, response, next){
    
    var regid = request.regid;


	var nme = request.body.nme;

	var gen = request.body.gen;

	var qual = request.body.qual;

	var panid = request.body.panid;

    var exp = request.body.exp;

    var email = request.body.email;
	var query = `
	INSERT INTO a_prof
	(regid,nme, gen, qual, panid,exp,email) 
	VALUES ("${regid}","${nme}", "${gen}", "${qual}", "${panid}", "${exp}","${email}")
	`;

	database.query(query, function(error, data){

		if(error)
		{
			throw error;
		}	
		else
		{
			request.flash('success', 'Data Inserted');
			response.redirect("/a_prof");
		}

	});

});

router.get('/edit/:id', function(request, response, next){

	var id = request.params.id;

	var query = `SELECT * FROM a_prof WHERE id = "${id}" `;

	database.query(query, function(error, data){

		response.render('a_prof', {title: '', action:'edit', sampleData:data[0]});

	});

});

router.post('/edit/:id', function(request, response, next){
    var id = request.params.id;

	var regid = request.body.regid;
    var nme = request.body.nme;

	var gen = request.body.gen;

	var qual = request.body.qual;

	var panid = request.body.panid;

    var exp = request.body.exp;

    var email = request.body.email;

    var query = `
	UPDATE a_prof
	SET regid = "${regid}",
    nme = "${nme}", 
	gen = "${gen}", 
	qual = "${qual}", 
	panid = "${panid}",
    exp = "${exp}",
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
			response.redirect('/a_prof');
		}

	});

});

router.get('/delete/:id', function(request, response, next){

	var id = request.params.id; 

	var query = `
	DELETE FROM a_prof WHERE id = "${id}"  `;

	database.query(query, function(error, data){

		if(error)
		{
			throw error;
		}
		else
		{
			request.flash('success', 'Data Deleted');
			response.redirect("/a_prof");
		}

	});

});



module.exports = router;