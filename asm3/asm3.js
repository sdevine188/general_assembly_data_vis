var x = []

$(document).ready(function(){

	// var url = "http://api.census.gov/data/timeseries/asm/industry?get=NAICS_TTL,EMP,GEO_TTL&for=us:*&YEAR=2005,2006,2007,2008,2009,2010,2011,2012,2013,2014&NAICS=331&key=81cdc733d3ac0f3496a88eebbed0a31478c403c6"
	var url = "http://api.census.gov/data/timeseries/asm/state?get=NAICS_TTL,EMP,GEO_TTL&for=state:*&YEAR=2005,2006,2007,2008,2009,2010,2011,2012,2013,2014&NAICS=31-33&key=81cdc733d3ac0f3496a88eebbed0a31478c403c6"

	Highcharts.setOptions({
   		lang: {
        		thousandsSep: ','
    		}
	})

	function buildStateSelect() {
		var states = fipsCodes()
		_.each(states, function(state) { 
			$(".states").append($("<option value='" + state.fipsCode + "'>" + state.stateName + "</option>"))
		})
	}

	function build_url(state_fips) {
		url = "http://api.census.gov/data/timeseries/asm/state?get=NAICS_TTL,EMP,GEO_TTL&for=state:" + state_fips + "&YEAR=2005,2006,2007,2008,2009,2010,2011,2012,2013,2014&NAICS=31-33&key=81cdc733d3ac0f3496a88eebbed0a31478c403c6"
		console.log(url)
	}

	function graph_state(state_fips){
		build_url(state_fips)
		$.getJSON(url)
			.then(convertResultsToObjects)
			.then(create_bar_graph)
			// .then(log_results)
	}

	function convertResultsToObjects(response) {
	  // grab the header row, since it's always the first row
	  var headers = response[0];

	  var results = []; // empty array which will store our converted objects

	  // for each row, skipping the first (header) row
	  for(var row=1; row < response.length; row++) {
	    var currentRow = response[row]; // get the current row
	    var newRowObj = {}; // make a new object to hold the converted data

	    // for each column in the current row, move the data into the object
	    // using the headers as the key, and the value from the current row as the
	    // value
	    for(var col=0; col < currentRow.length; col++) {
	      var key  = headers[col];
	      var value = currentRow[col];

	      // we have to use the bracket notation here instead of the 'dot' notation
	      // because the key is a variable (i.e. we don't know what it is until
	      // the code runs)
	      newRowObj[key] = value;
	    }

	    results.push(newRowObj);
	  }
	  // return the results so they can be used by the next function
	  x = results
	  return results;
	}

	function log_results(data) {
		console.log(data)
	}

	function create_bar_graph(data){
		var emp = _.map(data, function(state) {
			return Number(state.EMP)
		})
		var years = _.map(data, function(state) {
			return Number(state.YEAR)
		})
		var state_name = data[0].GEO_TTL

		var chart_info = {
			type: "line",
			title: state_name + " Employment by Year",
			subtitle: "Source: Census Bureau",
			x_axis: years,
			y_axis_title: "# of Employees",
			series_name: "# of Employees",
			series: emp
		}

		create_graph(chart_info, $("#employment-by-year-graph"))

		// $("#employment-by-year-graph").highcharts({
		// 	chart: {
		// 	      type: 'line'
		// 	},
		// 	title: {
		// 	      text: state_name + " Manufacturing Employment by Year"
		// 	},
		// 	subtitle: {
		// 	      text: 'Source: Census Bureau'
		// 	},
		// 	    xAxis: {
		// 	      categories: years
		// 	},
		// 	yAxis: {
		// 	      title: {
		// 	        text: '# of Employees'
		// 		}
		// 	},
		// 	plotOptions: {
		// 	      line: {
		// 	        dataLabels: {
		// 	          enabled: true
		// 	        },
		// 	        enableMouseTracking: true
		// 	      }
		// 	},
		// 	series: [
		// 	    {
		// 	    	name: "# of Employees",
		// 	    	data: emp
		// 	    }
		// 	 	]
		// 	})
	}

	function build_naics_select() {
		var naics = naicsCodes()
		_.each(naics, function(naics_code) {
			if(Number(naics_code.code) < 10000){ 
				$(".naics").append($("<option value='" + naics_code.code + "'>" + naics_code.description + "</option>"))
			}
		})
	}

	function graph_naics(naics_code){
		build_url_naics(naics_code)
		$.getJSON(url)
			.then(convertResultsToObjects)
			.then(create_line_graph_naics)
			// .then(log_results)
	}

	function build_url_naics(naics_code) {
		url = "http://api.census.gov/data/timeseries/asm/state?get=NAICS_TTL,EMP,GEO_TTL&for=us:*&YEAR=2005,2006,2007,2008,2009,2010,2011,2012,2013,2014&NAICS=" + naics_code + "&key=81cdc733d3ac0f3496a88eebbed0a31478c403c6"
		console.log(url)
	}

	function create_line_graph_naics(data) {
		var emp = _.map(data, function(naics_code) {
			return Number(naics_code.EMP)
		})
		var years = _.map(data, function(naics_code) {
			return Number(naics_code.YEAR)
		})
		var naics_code_name = data[0].NAICS_TTL

		var chart_info = {
			type: "line",
			title: naics_code_name + " Employment by Year",
			subtitle: "Source: Census Bureau",
			x_axis: years,
			y_axis_title: "# of Employees",
			series_name: "# of Employees",
			series: emp
		}

		create_graph(chart_info, $("#naics-by-year-graph"))

		// $("#naics-by-year-graph").highcharts({
		// 	chart: {
		// 	      type: 'line'
		// 	},
		// 	title: {
		// 	      text: naics_code_name + " Employment by Year"
		// 	},
		// 	subtitle: {
		// 	      text: 'Source: Census Bureau'
		// 	},
		// 	    xAxis: {
		// 	      categories: years
		// 	},
		// 	yAxis: {
		// 	      title: {
		// 	        text: '# of Employees'
		// 		}
		// 	},
		// 	plotOptions: {
		// 	      line: {
		// 	        dataLabels: {
		// 	          enabled: true
		// 	        },
		// 	        enableMouseTracking: true
		// 	      }
		// 	},
		// 	series: [
		// 	    {
		// 	    	name: "# of Employees",
		// 	    	data: emp
		// 	    }
		// 	 	]
		// 	})
	}

	// create generalized line graph function
	function create_graph(data, element) {
		element.highcharts({
			chart: {
			      type: data.type
			},
			title: {
			      text: data.title
			},
			subtitle: {
			      text: data.subtitle
			},
			    xAxis: {
			      categories: data.x_axis
			},
			yAxis: {
			      title: {
			        text: data.y_axis_title
				}
			},
			plotOptions: {
			      line: {
			        dataLabels: {
			          enabled: true
			        },
			        enableMouseTracking: true
			      }
			},
			series: [
			    {
			    	name: data.series_name,
			    	data: data.series
			    }
			 	]
			})
	}

	buildStateSelect()
	graph_state("01")

	build_naics_select()
	graph_naics("31-33")

	// create state employment graph when state is selected from menu
	$('.states').on("change", function() {
  		graph_state($(this).val())
	})

	// create naics employment graph when state is selected from menu
	$('.naics').on("change", function() {
  		graph_naics($(this).val())
	})

	
})




