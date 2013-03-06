$(document).ready(function() {
	// Validate name length and go to intro
	$('.first form').on('submit', function() {
		var $name = $('form input:text').val();
		validateName($name);
	});
	// Go from intro to 1st question
	$('.second .btn').click(function() {
		$('.second').remove();
		$('.third').fadeIn('fast');
	});
	// Go from 1st question to 2nd question
	$('.third .btn').click(function() {
		$('.third').remove();
		$('.fourth').fadeIn('fast');
	});
	// Go from 2nd question to 3rd question
	$('.fourth .btn').click(function() {
		$('.fourth').remove();
		$('.fifth').fadeIn('fast');
	});
	// Go from 3rd question to result
	// result is chosen randomly
	$('.fifth .btn').click(function() {
		$('.fifth').remove();
		$('.sixth').fadeIn('slow');
		randomAnswer(); 
	});
});


function validateName(nameInput) {
	//Checks if input has more than 1 charcater
	// and if it is not a number
	if(nameInput.length >= 2 && isNaN(nameInput)){
		$('.first').remove();
		$('.second').fadeIn('fast');
		$('.second h3 span').append(nameInput).css('color', '#0F5445');
	}else{
		alert('please, enter your name!');
	}
}


function randomAnswer() {
	// Selects a result randomly
	var randNum = Math.random();
		if(randNum < 0.26){
			$('.sixth .answer1').fadeIn('slow');
		}else if(randNum < 0.51){
			$('.sixth .answer2').fadeIn('slow');
		}else if(randNum < 0.76){
			$('.sixth .answer3').fadeIn('slow');
		}else{
			$('.sixth .answer4').fadeIn('slow');
		}
}

