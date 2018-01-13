$(document).ready(function(){
    var root = localStorage.getItem("root");
    var id = window.location.hash.substr(1);
    console.log(id);
    $.ajax({
	url:root+"user/"+id,
	method:"GET",
	success:function(data){
	    console.log(data);
	    $("#name").append(data.user.name);
	    $("#email").append(data.user.email);
	    $("#age").append(data.user.age);
	    $("#phone").append(data.user.phone);
	    $("#interest").append(data.user.interest);
	    $("#bio").append(data.user.bio);
	    $("#loader").remove();
	}
    });
});

