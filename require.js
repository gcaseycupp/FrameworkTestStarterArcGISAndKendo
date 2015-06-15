 //initialize the map
 // function onInit(){ 


 require(["esri/map", "dojo/domReady!"], function(Map) {
 	var app = new kendo.mobile.Application(document.body);

 	var map;
 	map = new Map("map", {
 		basemap: "topo",
 		center: [-122.45, 37.75], // long, lat
 		zoom: 7,
 		sliderStyle: "small"
 	});



 	var data = [{
 		text: "Black",
 		value: "1"
 	}, {
 		text: "Orange",
 		value: "2"
 	}, {
 		text: "Grey",
 		value: "3"
 	}];

 	// create DropDownList from input HTML element
 	$("#color").kendoDropDownList({
 		dataTextField: "text",
 		dataValueField: "value",
 		dataSource: data,
 		index: 0,
 		change: onChange
 	});

 	// create DropDownList from select HTML element
 	$("#size").kendoDropDownList();

 	var color = $("#color").data("kendoDropDownList");

 	color.select(0);
 	var size = $("#size").data("kendoDropDownList");

 	function onChange() {
 		var value = $("#color").val();
 		$("#cap")
 			.toggleClass("black-cap", value == 1)
 			.toggleClass("orange-cap", value == 2)
 			.toggleClass("grey-cap", value == 3);
 	};

 	function onChange() {
 		var value = $("#color").val();
 		$("#cap")
 			.toggleClass("black-cap", value == 1)
 			.toggleClass("orange-cap", value == 2)
 			.toggleClass("grey-cap", value == 3);
 	};

 	$("#get").click(function() {
 		alert('Thank you!! Your Choice is:\n\nColor ID: ' + color.value() + ' and Size: ' + size.value());
 	});


 });
 //}