function startDataUpload() {
    	alert ("start data upload");

    var qstn = document.getElementById("question").value;
		var optionA = document.getElementById("optionA").value;
		var optionB = document.getElementById("optionB").value;	
    var optionC = document.getElementById("optionC").value;
    var optionD = document.getElementById("optionD").value;
    var solution = document.getElementById("solution").value; 
    var lon = document.getElementById("longitude").value;
    var lat = document.getElementById("latitude").value; 

 

		var postString = "question="+qstn +"&optionA="+optionA+"&optionB="+optionB+"&optionC="+optionC+"&optionD="+optionD+"&solution="+solution+"&longitude="+lon+"&latitude="+lat;
		console.log(postString);
		processData(postString);
}

var client;

function processData(postString) {
   client = new XMLHttpRequest();
   client.open('POST','http://developer.cege.ucl.ac.uk:30301/upload',true);
   client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   client.onreadystatechange = dataUploaded;
   client.send(postString);
}

function dataUploaded() {
  // this function listens out for the server to say that the data is ready - i.e. has state 4
  if (client.readyState == 4) {
    // change the DIV to show the response
    document.getElementById("dataUploadResult").innerHTML = 'The files have been correctly uploaded...';
    }
}