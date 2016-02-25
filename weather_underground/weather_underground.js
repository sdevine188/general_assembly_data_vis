$(document).ready(function(){
	$("h1").click(function(){
		console.log("hello world!")
		// var url = "http://api.wunderground.com/api/fe45211ac5969811/conditions/q/HI/Honolulu.json"
		var city = $(".city").val()
		var state = $(".state").val()
		var url = "http://api.wunderground.com/api/fe45211ac5969811/conditions/q/" + state + "/" + 
			city + ".json"


		$.getJSON(url)
			.done(function(response){

				var icon_src = response.current_observation.icon_url
				console.log(icon_src)
				var icon_html = "<img src='" + icon_src + "' />"
				$("body #icon").append(icon_html)

				var weather = response.current_observation.weather
				$("body .report #weather").text(weather)

				var temp_f = response.current_observation.temp_f
				$("body .report #temp_f").text(temp_f)

				var humidity = response.current_observation.relative_humidity
				$("body .report #humidity").text(humidity)



			}).fail(function(){
				// console.log("ajax request failed")
			}).always(function(){
				// console.log("this always runs")
			})
	})
})