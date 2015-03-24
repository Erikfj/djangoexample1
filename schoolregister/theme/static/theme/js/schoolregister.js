$(document).ready(function(){
// Skriv all js i mellom $doc og closing brackets!

	$("#increase_passed_exams_button").click(function(event) {
		event.preventDefault();
		$.ajax({
			url: $('#passed_exams_url').val()   // needs change if copied
		})
		.done(function(data){
			var passed_exams_updated = data['passed_exams_updated']; // needs change if copied
			$("#passed_exams_cell").html(passed_exams_updated) // needs change if copied
		});
	});





	


});

