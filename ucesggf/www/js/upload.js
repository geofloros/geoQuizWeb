//This file is responsible to upload the filled forms to the server (Source: Code adapted from Ellul, 2018:Practical 5: Web and Mobile Apps and Programming – Servers and AJAX)
function startDataUpload() {
    	alert ("start data upload");
//we are getting the values for every variable there is in the form that the administrator fills
    var qstn = document.getElementById("question").value;
		var optionA = document.getElementById("optionA").value;
		var optionB = document.getElementById("optionB").value;	
    var optionC = document.getElementById("optionC").value;
    var optionD = document.getElementById("optionD").value;
    var solution = document.getElementById("solution").value; 
    var lon = document.getElementById("longitude").value;
    var lat = document.getElementById("latitude").value; 

 
//creating a string format of the result of the values
		var postString = "question="+qstn +"&optionA="+optionA+"&optionB="+optionB+"&optionC="+optionC+"&optionD="+optionD+"&solution="+solution+"&longitude="+lon+"&latitude="+lat;
		console.log(postString);
		processData(postString);
}

//Making the request to the server
var client;

function processData(postString) {
   client = new XMLHttpRequest();
   client.open('POST','http://developer.cege.ucl.ac.uk:30301/upload',true); //this time we send data, thus the 'post'
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