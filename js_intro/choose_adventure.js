var watch = prompt("Do you want to watch Netflix, Hulu, or Television? \
	Enter 'N' for Netflix, 'H' for Hulu, or 'T' for Television")
if(watch == "N") {
	console.log("You choose to watch Netflix")
	var netflix = prompt("Do you want to watch House of Cards or The Making of a Murderer? \
		Enter '1' for House of Cards or '2' for The Making of a Murderer")
		if(netflix == "1") {
			console.log("You choose to watch House of Cards")
			console.log("You lose faith in politicians")
		}
		if(netflix == "2") {
			console.log("You choose to watch The Making of a Murderer")
			console.log("You lose faith in the criminal justice system")
		}
}
if(watch == "H") {
	console.log("You choose to watch Hulu")
	var hulu = prompt("Do you want to watch The Daily Show or Nathan For You? \
		Enter 'tds' for The Daily Show or 'nfy' for Nathan For You'")
	if(hulu == "tds") {
		console.log("You choose to watch The Daily Show")
		console.log("You laugh at politicians")
	}
	if(hulu == "nfy") {
		console.log("You choose to watch Nathan For You")
		console.log("You laugh at business pranks")
	}
}
if(watch == "T") {
	console.log("You choose to watch Television")
	var television = prompt("Do you want to watch Seinfeld or The Simpsons \
		Enter 'newman' for Seinfeld or 'smithers' for The Simpsons")
	if(television == "newman"){
		console.log("You choose to watch Seinfeld")
		console.log("You watch the episode where George becomes a genius")
	}
	if(television == "smithers"){
		console.log("You choose to watch The Simpsons")
		console.log("You watch a Halloween Special episode")
	}
}
