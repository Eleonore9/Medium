$(document).ready(function() {
	$('.first .btn').click(function() {
		$('.first').remove();
		$('.second').fadeIn('fast');
	});
	$('.second .btn').click(function() {
		$('.second').remove();
		$('.third').fadeIn('fast');
	});
	$('.third .btn').click(function() {
		$('.third').remove();
		$('.fourth').fadeIn('fast');
	});
	$('.fourth .btn').click(function() {
		$('.fourth').remove();
		$('.fifth').fadeIn('fast');
	});
	$('.fifth .btn').click(function() {
		$('.fifth').remove();
		$('.sixth').fadeIn('slow');
		randomAnswer(); 
	});
});

function randomAnswer() {
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


// Attemps to define a function in jQuery or JS
// randomAnswer select a result randomly

// jQuery.fn.extend({
// 	randomAnswer: function () {
// 		var randNum = Math.random();
// 		if(randNum < 0.26){
// 			$('.answer1').fadeIn('slow');
// 		}else if(randNum < 0.51){
// 			$('.answer2').fadeIn('slow');
// 		}else if(randNum < 0.76){
// 			$('.answer3').fadeIn('slow');
// 		}else{
// 			$('.answer4').fadeIn('slow');
// 		}
// 	}
// });


// var randomAnswer = function() {
// 	var answer = "";
// 	var randNum = Math.random();
// 	if(randNum < 0.26){
// 		answer = "EXPLORE THE WORLD";
// 	}else if(randNum < 0.51){
// 		answer = "INSPIRE PEOPLE";
// 	}else if(randNum < 0.76){
// 		answer = "PROTECT OTHERS";
// 	}else{
// 		answer = "MAKE THE WORLD BETTER";
// 	}
// 	return answer;
// };