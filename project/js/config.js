localStorage.setItem("root","localhost:3000/")

function isLoggedIn(successCallback,failureCallback){
    var root = localStorage.getItem("root");
    $.ajax({
    	url: root+'validate',
    	type:"GET",
    	headers:{
    	    "jwtToken":localStorage.getItem("jwtToken")
    	},
    	success:function(data){
	    console.log(data);
	    if(data.status == 'success'){
		successCallback();
	    }
	    else{
		failureCallback();
	    }
    	},
	error:function(data){
	    failureCallback();
	}
    });
    return false;
}

function getFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}

