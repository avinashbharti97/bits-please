$(document).ready(function(){
    var root = localStorage.getItem("root");

    const Item = ({ link,name, organiser_name, date,time,hue }) => `
	  <div class="col-12 col-md-3">
	  <a href = "${link}">
          <div class="event-card" style="background-color:hsl(${hue},70%,50%);font-size:30px;">
          <span>${name}</span><br />
          Organised By:<span>${organiser_name}</span><br />
          <span>${date}</span><br />
          <span>${time}</span>
          </div>
	</a>
        </div>
	`;
    // $('#live_events').html([
    // 	{ name: 'foo', organiser_name: 'foo.png', time: 'Foo item' },
    // ].map(Item).join(''));
    //$("#live_events").html({name:"whatsup",organiser_name:"hackerearth",time:"12 13 14"}.map(Item).join(''));
    function successFunction(){
	$.ajax({
	    url:root+"events",
	    method:"GET",
	    success:function(data){
		console.log(data);
		var templateData = [];
		var hue = 10;
		$.each(data,function(k,v){
		    var obj = {};
		    obj.link = "event.html#"+v._id;
		    obj.name = v.name;
		    obj.organiser_name = v.organiser_name;
		    obj.date = v.date;
		    obj.time = v.time;
		    obj.hue = hue; 
		    templateData.push(obj);
		    hue += 20;
		});
		console.log(templateData);
		$('#live_events').html(templateData.map(Item).join(''));
		$("#loader").remove();
	    }
	});
    }

    function failureFunction(){
	console.log("redirecting");
	window.location = "login.html";
    }

    isLoggedIn(successFunction,failureFunction);
    

    $(".fa-user-circle").on("click",function(){
	window.location = "profile.html#"+localStorage.getItem("_id");
    });

    $(".fa-plus-square").on("click",function(){
	window.location = "createEvent.html";
    });    

})
