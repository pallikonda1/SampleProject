$(document).ready(function(){
	$('#liHome').click(function () {
	       $('#homeImg').attr("src", "/LoveJorney/Images/home_logo_silver.png");
	       $('#homeImg').attr("width", "50");
	       $('#homeImg').attr("height", "35");
	    });
	$('#liBus').click(function () {
       $('#busImg').attr("src", "/LoveJorney/Images/bus_logo_silver.png");
       $('#busImg').attr("width", "50");
       $('#busImg').attr("height", "35");
    });
	$('#liCar').click(function () {
	       $('#carImg').attr("src", "/LoveJorney/Images/car_logo_silver.png");
	       $('#carImg').attr("width", "50");
	       $('#carImg').attr("height", "35");
	    });
	$('#liFlight').click(function () {
	       $('#flightImg').attr("src", "/LoveJorney/Images/flight_logo_silver.png");
	       $('#flightImg').attr("width", "50");
	       $('#flightImg').attr("height", "35");
	    });
	$('#liTest').click(function () {
	       $('#testImg').attr("src", "/LoveJorney/Images/bus_glossy_white.png");
	       $('#testImg').attr("width", "50");
	       $('#testImg').attr("height", "35");
	    });
	$(function() {
		  $( "#startDate" ).datepicker({
		   showOn: "button",
		   buttonImage: "Images/calendar.gif",
		   buttonImageOnly: true
		  });
		   $( "#returnDate" ).datepicker({
		          showOn: "button",
		          buttonImage: "Images/calendar.gif",
		          buttonImageOnly: true
		        });
		 });
});




