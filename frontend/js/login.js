$(document).ready(function(){
    var root = localStorage.getItem("root");
    var dashboard = "dashboard.html"
    var $form = $("#loginForm");

    $form.on("submit",function(e){
	//var data = $("form").serialize() +"&date="+(new Date()) +"";
	var data = $form.serialize();
	console.log(data);
	$.ajax({
	    url: root+'login',
	    method:"POST",
	    data:data,
	    success:function(data){
		console.log(data);
		if(data.status == 'success'){
		    localStorage.setItem("jwtToken",data.jwtToken);
		    localStorage.setItem("_id",data._id);
		    window.location = dashboard;
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
