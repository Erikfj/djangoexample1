$(document).ready(function(){
// Skriv all js i mellom $doc og closing brackets!

	$(".add-points-link").click(function(event) {
		event.preventDefault();
		var note_id = $(this).data("noteid");
		var points_element_id = "#id-points-for-note-" + note_id;
		$.ajax({
			method: "POST",
			url: $('#add_points_url').val() + "/" + note_id
		})
		.done(function(data){
		var points_updated = data['points_updated'];
		$(points_element_id).html(points_updated);
		});
	});


	$("#increase_passed_exams_button").click(function(event) {
		event.preventDefault();
		$.ajax({
			method: "POST",
			url: $('#passed_exams_url').val()   
		})
		.done(function(data){
			var passed_exams_updated = data['passed_exams_updated']; 
			$("#passed_exams_cell").html(passed_exams_updated) 
		});
	});

	$("#increase_number_of_courses_button").click(function(event) {
		event.preventDefault();
		$.ajax({
			method: "POST",
			url: $('#number_of_courses_url').val()  
		})
		.done(function(data){
			var number_of_courses_updated = data['number_of_courses_updated']; 
			$("#number_of_courses_cell").html(number_of_courses_updated) 
		});
	});


});

