	console.log("JavaScript works!");

	var inputdata;

	function temperatureConverter() {
	var inputdata=document.getElementById("data").value;
		if (document.getElementById("far").checked) {
			var c=Math.round((inputdata-32)*5/9);
			c=Math.round(c);
			
			console.log("temperature is",c,"Celsius");
			document.getElementById("result").innerHTML="<p style='color: white; font-size: 5em'>"+c+" &#176;F</p>";
		} else 
		{ 
			var f=9*inputdata/5+32;
			f=Math.round(f);
			console.log("temperature is",f,"Fahrenheit");
			document.getElementById("result").innerHTML="<p style='color: white; font-size: 5em'>"+f+" &#176;F</p>";
		}
	}

	document.addEventListener('DOMContentLoaded', function() {
	console.log("DOM loaded");

	document.getElementById("submit").addEventListener("click", function() {
		temperatureConverter();
	});

	document.getElementById("clear").addEventListener("click", function() {
		document.getElementById("data").value=""
	}); 

	// document.getElementById("myBtn").addEventListener("click", function(){
	//    	document.getElementById("demo").innerHTML = "Hello World";
	// });
	});

