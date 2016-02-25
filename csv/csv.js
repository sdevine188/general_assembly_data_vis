data = []


$(document).ready(function(){

	$.ajax({
    url: "cars.csv",
    async: false,
    success: function (csvd) {
        data = $.csv.toArrays(csvd)
        console.log(data)
    },
    dataType: "text",
    complete: function (csv) {
        // call a function on complete
        console.log(csv) 
    }
});


	// var file = "cars.csv"

 //   	Papa.parse(file, {
 // 		header: true,
	// 	dynamicTyping: true,
	// 	complete: function(results) {
	// 	    data = results
	// 	    console.log(data)
 //  		}
	// })
  
  // this worked *******
 
  // function handleFileSelect(evt) {
  //   var file = evt.target.files[0]
  //   console.log(file)
 
  //   Papa.parse(file, {
  //     header: true,
  //     dynamicTyping: true,
  //     complete: function(results) {
  //       data = results
  //       console.log(data)
  //     }
  //   });
  // }
 
  // $(document).ready(function(){
  //   $("#csv-file").change(handleFileSelect)
  // })

   // ************************


	// var data = $.csv.toArray("cars.csv")
	// console.log(data)

	// Papa.parse("cars.csv", {
	// 	complete: function(results) {
	// 		console.log("Finished:", results.data);
	// 	}
	// })

  	// var csvfile = "cars.csv";

   //  $.get(csvfile, function (data) {
   //      var csvdata = Papa.parse(data);
   //      console.log(csvdata);
   //  })

	// data = $.get("C:\Users\Stephen\Desktop\GA\csv")
	
	// d3.csv("/cars.csv", function(data) {
	//   console.log(data[0]);
	// })
	

	// $.ajax({
	// 	type: "GET",
	// 	url: "cars.csv",
	// 	dataType: "text"
	// }).done(function(response) {
	// 	// console.log(response)
	// 	x = response
	// 	Papa.parse(x, {
	// 		complete: function(results) {
	// 		console.log(results)
	// 	}
	// })
	// }).fail(function(response) {
	// 	console.log(response)
	// 	x = response
	// })




})