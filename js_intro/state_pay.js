var annualPay = [
  11759599,
  69487378,
  10586486,
  56900,
  2477958,
  16119212
]

var numEmployees = [
  234726,
  1111812,
  157363,
  1275,
  46741,
  288583
]

var states = [
  "Alabama",
  "California",
  "Connecticut",
  "District of Columbia",
  "Maine",
  "Minnesota"
]


state_table = []
for(var i = 0; i < states.length; i++) {
	var state_i = states[i]
	var employees_i = numEmployees[i]
	var pay_i = annualPay[i]
	var avg_pay_i = "$" + ((pay_i / employees_i) * 1000).toFixed(2)
	
	avg_pay_split = avg_pay_i.split(".")[0]
	avg_pay_split2 = avg_pay_split.split("")
	avg_pay_split3 = avg_pay_split2.splice(0, 1)
	avg_pay_split4 = avg_pay_split3.reverse()
	for(var digit = 0; digit < avg_pay_split4.length; digit++) {
		
	}


	state_entry = {
		state: state_i,
		employees: employees_i,
		pay: pay_i,
		avg_pay: avg_pay_i
	}
	state_table.push(state_entry)
}

console.log(state_table)