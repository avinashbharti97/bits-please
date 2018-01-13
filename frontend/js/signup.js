$(document).ready(function(){
    var root = localStorage.getItem("root");
    var dashboard = "dashboard.html";
    var $form = $("#signupForm");
    $form.on("submit",function(e){
	//var data = $form.serialize() +"&date="+(new Date()) +"";
	var data = $form.serialize();
	console.log(data);
	$.ajax({
	    url: root+'signup',
	    method:"POST",
	    data:data,
	    success:function(data){
		if(data.status == 'success'){
		    window.location = "login.html";
		}
	    },
	    error:function(data){
		console.log("Error");
		console.log(data);
	    }
	});
	e.preventDefault();
    });

    function successFunction(){
	window.location=dashboard;
    }

    function failureFunction(){
	$("#loader").remove();
    }

    isLoggedIn(successFunction,failureFunction);

})
