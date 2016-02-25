// var temperature = prompt("Enter a temperature:")
// var temperature = parseInt(temperature)
// var temp_kelvin = (temperature * 273.15)
// var temp_celsius = (temperature - 32) * (5/9)
// console.log(temperature + " degrees Farenheit = " + Math.round(temp_celsius) + 
// 	" degrees Celsius and " + Math.round(temp_kelvin) + " degrees Kelvin")

var temperature = prompt("Enter a temperature:")
var temperature = parseInt(temperature)
var temperature_unit = prompt("Enter a temperature unit (Farenheit, Celsius, or Kelvin:")
	if (temperature_unit == "Farenheit") {
		var temp_kelvin = (temperature * 273.15).toFixed(2)
		var temp_celsius = ((temperature - 32) * (5/9)).toFixed(2)
		var temp_farenheit = temperature.toFixed(2)
	} else if (temperature_unit == "Kelvin") {
		var temp_kelvin = temperature.toFixed(2)
		var temp_celsius = (temperature - 273.15).toFixed(2)
		var temp_farenheit = ((temperature * 9/5) - 459.67).toFixed(2)
	} else if (temperature_unit == "Celsius") {
		var temp_kelvin = (temperature + 273.15).toFixed(2)
		var temp_celsius = temperature.toFixed(2)
		var temp_farenheit = ((temperature * 9/5) + 32).toFixed(2)
	} else {
		console.log("Input error - please refresh")
	}
	console.log("Kelvin: " + temp_kelvin + ", Celsius: ", temp_celsius, ", Farenheit: " + temp_farenheit)