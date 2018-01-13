$(document).ready(function(){
    var root = localStorage.getItem("root");
    var id = window.location.hash.substr(1);


    $("#goToEvent").on("click",function(){
	var eventId = window.location.hash.substr(1);
	console.log("event id = "+eventId);
	$.ajax({
	    url:root+"attend/"+eventId,
	    method:"GET",
	    headers:{
    		"jwtToken":localStorage.getItem("jwtToken")
    	    },
	    success:function(data){
		console.log(data);
	    }
	});
    });


    const Item = ({presenter_name }) => `
          <div class="col-12 " style="padding:15px; background-color:white;color:#262626; margin-bottom:10px">
          <span>${presenter_name}</span>
          </div>
	`;


    function successFunction(){
	console.log(id);
	$.ajax({
	    url:root+"event/"+id,
	    method:"GET",
	    success:function(data){
		console.log(data);
		$("#event_name").append(data.event.name);
		$("#event_date").append(data.event.date);
		console.log(Date.parse(data.event.date));
		$("#event_time").append(data.event.time);
		$("#event_location").append(data.event.location);
		$("#event_detail").append(data.event.context);
		$("#organiser_name").append(data.Organiser.name);
		$("#organiser_name").attr("href","profile.html#"+data.Organiser._id);
	    	$("#loader").remove();

		var presenterArray = [];
		
		$.each(data.presenter,function(k,v){
		    var obj = {};
		    obj.presenter_name = v.presenter_username;
		    obj.link = "profile.html#"+v._id;
		    presenterArray.push(obj);
		});
		console.log(presenterArray);
		$('#presenters').html(presenterArray.map(Item).join(''));
	    }
	});

    }

    function failureFunction(){
	window.location=dashboard;
    }

    isLoggedIn(successFunction,failureFunction);    


});

