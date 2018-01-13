$(document).ready(function(){
    var root = localStorage.getItem("root");

    const Item = ({ link,name, organiser_name, time,hue }) => `
	  <div class="col-12 col-md-3">
	  <a href = "${link}">
          <div class="event-card" style="background-color:hsl(${hue},70%,50%);font-size:30px;">
          <span>${name}</span><br />
          <span>${organiser_name}</span><br />
          <span>${time}</span>
          </div>
	</a>
        </div>
	`;
    // $('#live_events').html([
    // 	{ name: 'foo', organiser_name: 'foo.png', time: 'Foo item' },
    // ].map(Item).join(''));
    //$("#live_events").html({name:"whatsup",organiser_name:"hackerearth",time:"12 13 14"}.map(Item).join(''));
    $.ajax({
	url:root+"events",
	method:"GET",
	success:function(data){
	    console.log(data);
	    var templateData = [];
	    hue = 10;
	    $.each(data,function(k,v){
		var obj = {};
		obj.link = "event.html#"+v._id;
		obj.name = v.name;
		obj.organiser_name = v.organiser_name;
		obj.time = v.date;
		obj.hue = hue;
		templateData.push(obj);
		hue+=20;
	    });
	    console.log(templateData);
	    $('#live_events').html(templateData.map(Item).join(''));
	    $("#loader").remove();
	}
    });

})
