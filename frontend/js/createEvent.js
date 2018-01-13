$(document).ready(function(){
    var root = localStorage.getItem("root");
    var $form = $("#createEvent");

    $form.on("submit",function(e){
	//var data = $form.serialize() +"&date="+(new Date()) +"";
	var presenters = $(".chips-autocomplete").material_chip('data');
	var presentersArray = [];

	$.each(presenters,function(k,v){
	    presentersArray.push(v.tag);
	});
	
	var data = getFormData($form);
	data.presenters = presentersArray;
	data.organiser_id = localStorage.getItem("jwtToken");
	console.log(data);

	$.ajax({
	    url: root+'createEvent',
	    method:"POST",
	    data:data,
	    success:function(data){
		console.log(data);
		window.location="dashboard.html";
	    },
	    error:function(data){
		
	    }
	});
	e.preventDefault();
    });

    var autocompleteData = {};
    $.ajax({
	url: root+'users',
	method:"GET",
	success:function(data){
	    console.log(data);
	    $.each(data,function(key,value){
		autocompleteData[value.name] = value.email
	    });
	    console.log(autocompleteData);

            $('.chips-autocomplete').material_chip({
		autocompleteOptions: {
		    data:autocompleteData,
		    limit: Infinity,
		    minLength: 1,
		}
	    });
	},
	error:function(data){
	    
	}
    });

    function successFunction(){
	$("#loader").remove();
    }

    function failureFunction(){
	console.log("redirecting");
	window.location = "login.html";
    }

    isLoggedIn(successFunction,failureFunction);

})
