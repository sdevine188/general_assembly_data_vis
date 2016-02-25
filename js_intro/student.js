var student1 = {
	course: "General Assembly",
	seat: "back of room",
	computer: "dell",
	text_editor: "sublime",
	grade: ["passing", "failing", "C", "drop out"]
}

var student2 = {
	course: "General Assembly",
	seat: "front of room",
	computer: "mac",
	text_editor: "atom",
	grade: ["passing", "failing", "C", "drop out"]
}

all_students = [student1, student2]

function student_info(student) {
	var info_string = ("Student taking " + student.course + " course and sitting in " + 
		student.seat + " using a " + student.computer + " computer running " + student.text_editor + 
		" text editor")
	return(info_string)
}

for(i = 0; i < all_students.length; i++) {
	var current_student_info = student_info(all_students[i])
	console.log(current_student_info);
}



