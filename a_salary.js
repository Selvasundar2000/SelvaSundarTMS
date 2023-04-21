var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/", function(request, response, next){

	var query = "SELECT * FROM a_salary ORDER BY id DESC";

	database.query(query, function(error, data){

		if(error)
		{
			throw error; 
		}
		else
		{
			response.render('a_salary', {title:'', action:'list', sampleData:data, message:request.flash('success')});
		}

	});

});

router.get("/add", function(request, response, next){

	response.render("a_salary", {title:'', action:'add'});

});

router.post("/add_a_salary", function(request, response, next){
    var regid = request.regid;

	var nme = request.body.nme;

	var year = request.body.year;

	var bpay = request.body.bpay;

	var deduct = request.body.deduct;

    var total = request.body.total;

	var query = `
	INSERT INTO a_salary
	(regid,nme, year, bpay, deduct,total) 
	VALUES ("${regid}","${nme}", "${year}", "${bpay}", "${deduct}", "${total}")
	`;

	database.query(query, function(error, data){

		if(error)
		{
			throw error;
		}	
		else
		{
			request.flash('success', 'Data Inserted');
			response.redirect("/a_salary");
		}

	});

});

router.get('/edit/:id', function(request, response, next){

	var id = request.params.id;

	var query = `SELECT * FROM a_salary WHERE id = "${id}" `;

	database.query(query, function(error, data){

		response.render('a_salary', {title: '', action:'edit', sampleData:data[0]});

	});

});

router.post('/edit/:id', function(request, response, next){
    var id = request.params.id;

	var regid = request.body.regid;
    var nme = request.body.nme;

	var year = request.body.year;

	var bpay = request.body.bpay;

	var deduct = request.body.deduct;

	var total = request.body.total;

    var query = `
	UPDATE a_salary
	SET regid = "${regid}",
    nme = "${nme}", 
	year = "${year}", 
	bpay = "${bpay}", 
	deduct = "${deduct}",
    total = "${total}" 
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
			response.redirect('/a_salary');
		}

	});

});

router.get('/delete/:id', function(request, response, next){

	var id = request.params.id; 

	var query = `
	DELETE FROM a_salary WHERE id = "${id}"  `;

	database.query(query, function(error, data){

		if(error)
		{
			throw error;
		}
		else
		{
			request.flash('success', 'Data Deleted');
			response.redirect("/a_salary");
		}

	});

});



module.exports = router;