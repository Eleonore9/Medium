$(document).ready(function() {
	// Validate name length and go to intro
	$('.first form .btn').on('click', function() {
		var $name = $('.first form input[name=name]').val();
		console.log($name);
		validateName($name);
	});
	$('.second .btn').click(function() {
		// Go from intro to 1st question
		$('.second').remove();
		$('.third').fadeIn('fast');
	});
	$('.third .btn').click(function() {
		//Go from 1st question to 2nd question
		$('.third').remove();
		$('.fourth').fadeIn('fast');
	});
	$('.fourth .btn').click(function() {
		// Go from 2nd question to 3rd question
		$('.fourth').remove();
		$('.fifth').fadeIn('fast');
	});
	$('.fifth .btn').click(function() {
		// Go from 3rd question to result
		// result is chosen randomly
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

