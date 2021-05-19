const countries = [

	{ name: "Afghanistan", flag: "assets/images/flags/afghanistan.png" },
	{ name: "Albania", flag: "assets/images/flags/albania.png" },
	{ name: "Algeria", flag: "assets/images/flags/algeria.png" },
	{ name: "Andorra", flag: "assets/images/flags/andorra.png" },
	{ name: "Angola", flag: "assets/images/flags/angola.png" },
	{ name: "Antigua and Barbuda", flag: "assets/images/flags/antigua-and-barbuda.png" },
	{ name: "Argentina", flag: "assets/images/flags/argentina.png" },
	{ name: "Armenia", flag: "assets/images/flags/armenia.png" },
	{ name: "Aruba", flag: "assets/images/flags/aruba.png" },
	{ name: "Australia", flag: "assets/images/flags/australia.png" },
	{ name: "Austria", flag: "assets/images/flags/austria.png" },
	{ name: "Azerbaijan", flag: "assets/images/flags/azerbaijan.png" },
	{ name: "The Bahamas", flag: "assets/images/flags/bahamas.png" },
	{ name: "Bahrain", flag: "assets/images/flags/bahrain.png" },
	{ name: "Bangladesh", flag: "assets/images/flags/bangladesh.png" },
	{ name: "Barbados", flag: "assets/images/flags/barbados.png" },
	{ name: "Belarus", flag: "assets/images/flags/belarus.png" },
	{ name: "Belgium", flag: "assets/images/flags/belgium.png" },
	{ name: "Belize", flag: "assets/images/flags/belize.png" },
	{ name: "Benin", flag: "assets/images/flags/benin.png" },
	{ name: "Bermuda", flag: "assets/images/flags/bermuda.png" },
	{ name: "Bhutan", flag: "assets/images/flags/bhutan.png" },
	{ name: "Bolivia", flag: "assets/images/flags/bolivia.png" },
	{ name: "Bosnia and Herzegovina", flag: "assets/images/flags/bosnia-and-herzegovina.png" },
	{ name: "Botswana", flag: "assets/images/flags/botswana.png" },
	{ name: "Brazil", flag: "assets/images/flags/brazil.png" },
	{ name: "Brunei Darussalam", flag: "assets/images/flags/brunei.png" },
	{ name: "Bulgaria", flag: "assets/images/flags/bulgaria.png" },
	{ name: "Burkina Faso", flag: "assets/images/flags/burkina-faso.png" },
	{ name: "Burundi", flag: "assets/images/flags/burundi.png" },
	{ name: "Cape Verde", flag: "assets/images/flags/cape-verde.png" },
	{ name: "Cambodia", flag: "assets/images/flags/cambodia.png" },
	{ name: "Cameroon", flag: "assets/images/flags/cameroon.png" },
	{ name: "Canada", flag: "assets/images/flags/canada.png" },
	{ name: "The Central African Republic", flag: "assets/images/flags/central-african-republic.png" },
	{ name: "Chad", flag: "assets/images/flags/chad.png" },
	{ name: "Chile", flag: "assets/images/flags/chile.png" },
	{ name: "China", flag: "assets/images/flags/china.png" },
	{ name: "Colombia", flag: "assets/images/flags/colombia.png" },
	{ name: "Comoros", flag: "assets/images/flags/comoros.png" },
	{ name: "Democratic Republic of the Congo)", flag: "assets/images/flags/democratic-republic-of-congo.png" },
	{ name: "The Congo", flag: "assets/images/flags/republic-of-the-congo.png" },
	{ name: "Cook Islands", flag: "assets/images/flags/cook-islands.png" },
	{ name: "Costa Rica", flag: "assets/images/flags/costa-rica.png" },
	{ name: "Croatia", flag: "assets/images/flags/croatia.png" },
	{ name: "Cuba", flag: "assets/images/flags/cuba.png" },
	{ name: "Curaçao", flag: "assets/images/flags/curacao.png" },
	{ name: "Cyprus", flag: "assets/images/flags/cyprus.png" },
	{ name: "Czech Republic", flag: "assets/images/flags/czech-republic.png" },
	{ name: "Ivory Coast", flag: "assets/images/flags/ivory-coast.png" },
	{ name: "Denmark", flag: "assets/images/flags/denmark.png" },
	{ name: "Djibouti", flag: "assets/images/flags/djibouti.png" },
	{ name: "Dominica", flag: "assets/images/flags/dominica.png" },
	{ name: "Dominican Republic", flag: "assets/images/flags/dominican-republic.png" },
	{ name: "Ecuador", flag: "assets/images/flags/ecuador.png" },
	{ name: "Egypt", flag: "assets/images/flags/egypt.png" },
	{ name: "El Salvador", flag: "assets/images/flags/el-salvador.png" },
	{ name: "Equatorial Guinea", flag: "assets/images/flags/equatorial-guinea.png" },
	{ name: "Eritrea", flag: "assets/images/flags/eritrea.png" },
	{ name: "Estonia", flag: "assets/images/flags/estonia.png" },
	{ name: "Eswatini", flag: "assets/images/flags/swaziland.png" },
	{ name: "Ethiopia", flag: "assets/images/flags/ethiopia.png" },
	{ name: "Faroe Islands", flag: "assets/images/flags/faroe-islands.png" },
	{ name: "Fiji", flag: "assets/images/flags/fiji.png" },
	{ name: "Finland", flag: "assets/images/flags/finland.png" },
	{ name: "France", flag: "assets/images/flags/france.png" },
	{ name: "Gabon", flag: "assets/images/flags/gabon.png" },
	{ name: "Gambia", flag: "assets/images/flags/gambia.png" },
	{ name: "Georgia", flag: "assets/images/flags/georgia.png" },
	{ name: "Germany", flag: "assets/images/flags/germany.png" },
	{ name: "Ghana", flag: "assets/images/flags/ghana.png" },
	{ name: "Greece", flag: "assets/images/flags/greece.png" },
	{ name: "Greenland", flag: "assets/images/flags/greenland.png" },
	{ name: "Grenada", flag: "assets/images/flags/grenada.png" },
	{ name: "Guatemala", flag: "assets/images/flags/guatemala.png" },
	{ name: "Guinea", flag: "assets/images/flags/guinea.png" },
	{ name: "Guinea-Bissau", flag: "assets/images/flags/guinea-bissau.png" },
	{ name: "Guyana", flag: "assets/images/flags/guyana.png" },
	{ name: "Haiti", flag: "assets/images/flags/haiti.png" },
	{ name: "Honduras", flag: "assets/images/flags/honduras.png" },
	{ name: "Hungary", flag: "assets/images/flags/hungary.png" },
	{ name: "Iceland", flag: "assets/images/flags/iceland.png" },
	{ name: "India", flag: "assets/images/flags/india.png" },
	{ name: "Indonesia", flag: "assets/images/flags/indonesia.png" },
	{ name: "Iran", flag: "assets/images/flags/iran.png" },
	{ name: "Iraq", flag: "assets/images/flags/iraq.png" },
	{ name: "Ireland", flag: "assets/images/flags/ireland.png" },
	{ name: "Israel", flag: "assets/images/flags/israel.png" },
	{ name: "Italy", flag: "assets/images/flags/italy.png" },
	{ name: "Jamaica", flag: "assets/images/flags/jamaica.png" },
	{ name: "Japan", flag: "assets/images/flags/japan.png" },
	{ name: "Jordan", flag: "assets/images/flags/jordan.png" },
	{ name: "Kazakhstan", flag: "assets/images/flags/kazakhstan.png" },
	{ name: "Kenya", flag: "assets/images/flags/kenya.png" },
	{ name: "Kiribati", flag: "assets/images/flags/kiribati.png" },
	{ name: "North Korea", flag: "assets/images/flags/north-korea.png" },
	{ name: "South Korea", flag: "assets/images/flags/south-korea.png" },
	{ name: "Kuwait", flag: "assets/images/flags/kwait.png" },
	{ name: "Kyrgyzstan", flag: "assets/images/flags/kyrgyzstan.png" },
	{ name: "Laos", flag: "assets/images/flags/laos.png" },
	{ name: "Latvia", flag: "assets/images/flags/latvia.png" },
	{ name: "Lebanon", flag: "assets/images/flags/lebanon.png" },
	{ name: "Lesotho", flag: "assets/images/flags/lesotho.png" },
	{ name: "Liberia", flag: "assets/images/flags/liberia.png" },
	{ name: "Libya", flag: "assets/images/flags/libya.png" },
	{ name: "Liechtenstein", flag: "assets/images/flags/liechtenstein.png" },
	{ name: "Lithuania", flag: "assets/images/flags/lithuania.png" },
	{ name: "Luxembourg", flag: "assets/images/flags/luxembourg.png" },
	{ name: "Macao", flag: "assets/images/flags/macao.png" },
	{ name: "Madagascar", flag: "assets/images/flags/madagascar.png" },
	{ name: "Malawi", flag: "assets/images/flags/malawi.png" },
	{ name: "Malaysia", flag: "assets/images/flags/malasya.png" },
	{ name: "Maldives", flag: "assets/images/flags/maldives.png" },
	{ name: "Mali", flag: "assets/images/flags/mali.png" },
	{ name: "Malta", flag: "assets/images/flags/malta.png" },
	{ name: "Marshall Islands", flag: "assets/images/flags/marshall-island.png" },
	{ name: "Martinique", flag: "assets/images/flags/martinique.png" },
	{ name: "Mauritania", flag: "assets/images/flags/mauritania.png" },
	{ name: "Mauritius", flag: "assets/images/flags/mauritius.png" },
	{ name: "Mexico", flag: "assets/images/flags/mexico.png" },
	{ name: "Micronesia", flag: "assets/images/flags/micronesia.png" },
	{ name: "Moldova", flag: "assets/images/flags/moldova.png" },
	{ name: "Monaco", flag: "assets/images/flags/monaco.png" },
	{ name: "Mongolia", flag: "assets/images/flags/mongolia.png" },
	{ name: "Montenegro", flag: "assets/images/flags/montenegro.png" },
	{ name: "Morocco", flag: "assets/images/flags/morocco.png" },
	{ name: "Mozambique", flag: "assets/images/flags/mozambique.png" },
	{ name: "Myanmar", flag: "assets/images/flags/myanmar.png" },
	{ name: "Namibia", flag: "assets/images/flags/namibia.png" },
	{ name: "Nauru", flag: "assets/images/flags/nauru.png" },
	{ name: "Nepal", flag: "assets/images/flags/nepal.png" },
	{ name: "The Netherlands", flag: "assets/images/flags/netherlands.png" },
	{ name: "New Zealand", flag: "assets/images/flags/new-zealand.png" },
	{ name: "Nicaragua", flag: "assets/images/flags/nicaragua.png" },
	{ name: "Niger", flag: "assets/images/flags/niger.png" },
	{ name: "Nigeria", flag: "assets/images/flags/nigeria.png" },
	{ name: "Niue", flag: "assets/images/flags/niue.png" },
	{ name: "Norway", flag: "assets/images/flags/norway.png" },
	{ name: "Oman", flag: "assets/images/flags/oman.png" },
	{ name: "Pakistan", flag: "assets/images/flags/pakistan.png" },
	{ name: "Palau", flag: "assets/images/flags/palau.png" },
	{ name: "Palestine", flag: "assets/images/flags/palestine.png" },
	{ name: "Panama", flag: "assets/images/flags/panama.png" },
	{ name: "Papua New Guinea", flag: "assets/images/flags/papua-new-guinea.png" },
	{ name: "Paraguay", flag: "assets/images/flags/paraguay.png" },
	{ name: "Peru", flag: "assets/images/flags/peru.png" },
	{ name: "The Philippines", flag: "assets/images/flags/philippines.png" },
	{ name: "Poland", flag: "assets/images/flags/poland.png" },
	{ name: "Portugal", flag: "assets/images/flags/portugal.png" },
	{ name: "North Macedonia", flag: "assets/images/flags/republic-of-macedonia.png" },
	{ name: "Qatar", flag: "assets/images/flags/qatar.png" },
	{ name: "Romania", flag: "assets/images/flags/romania.png" },
	{ name: "Russia", flag: "assets/images/flags/russia.png" },
	{ name: "Rwanda", flag: "assets/images/flags/rwanda.png" },
	{ name: "Saint Kitts and Nevis", flag: "assets/images/flags/saint-kitts-and-nevis.png" },
	{ name: "Saint Lucia", flag: "assets/images/flags/st-lucia.png" },
	{ name: "Saint Vincent and the Grenadines", flag: "assets/images/flags/st-vincent-and-the-grenadines.png" },
	{ name: "Samoa", flag: "assets/images/flags/samoa.png" },
	{ name: "San Marino", flag: "assets/images/flags/san-marino.png" },
	{ name: "Sao Tome and Principe", flag: "assets/images/flags/sao-tome-and-prince.png" },
	{ name: "Saudi Arabia", flag: "assets/images/flags/saudi-arabia.png" },
	{ name: "Senegal", flag: "assets/images/flags/senegal.png" },
	{ name: "Serbia", flag: "assets/images/flags/serbia.png" },
	{ name: "Seychelles", flag: "assets/images/flags/seychelles.png" },
	{ name: "Sierra Leone", flag: "assets/images/flags/sierra-leone.png" },
	{ name: "Singapore", flag: "assets/images/flags/singapore.png" },
	{ name: "Slovakia", flag: "assets/images/flags/slovakia.png" },
	{ name: "Slovenia", flag: "assets/images/flags/slovenia.png" },
	{ name: "Solomon Islands", flag: "assets/images/flags/solomon-islands.png" },
	{ name: "Somalia", flag: "assets/images/flags/somalia.png" },
	{ name: "South Africa", flag: "assets/images/flags/south-africa.png" },
	{ name: "South Sudan", flag: "assets/images/flags/south-sudan.png" },
	{ name: "Spain", flag: "assets/images/flags/spain.png" },
	{ name: "Sri Lanka", flag: "assets/images/flags/sri-lanka.png" },
	{ name: "Sudan", flag: "assets/images/flags/sudan.png" },
	{ name: "Suriname", flag: "assets/images/flags/suriname.png" },
	{ name: "Sweden", flag: "assets/images/flags/sweden.png" },
	{ name: "Switzerland", flag: "assets/images/flags/switzerland.png" },
	{ name: "Syria", flag: "assets/images/flags/syria.png" },
	{ name: "Taiwan", flag: "assets/images/flags/taiwan.png" },
	{ name: "Tajikistan", flag: "assets/images/flags/tajikistan.png" },
	{ name: "Tanzania", flag: "assets/images/flags/tanzania.png" },
	{ name: "Thailand", flag: "assets/images/flags/thailand.png" },
	{ name: "Timor-Leste", flag: "assets/images/flags/east-timor.png" },
	{ name: "Togo", flag: "assets/images/flags/togo.png" },
	{ name: "Tonga", flag: "assets/images/flags/tonga.png" },
	{ name: "Trinidad & Tobago", flag: "assets/images/flags/trinidad-and-tobago.png" },
	{ name: "Tunisia", flag: "assets/images/flags/tunisia.png" },
	{ name: "Turkey", flag: "assets/images/flags/turkey.png" },
	{ name: "Turkmenistan", flag: "assets/images/flags/turkmenistan.png" },
	{ name: "Tuvalu", flag: "assets/images/flags/tuvalu.png" },
	{ name: "Uganda", flag: "assets/images/flags/uganda.png" },
	{ name: "Ukraine", flag: "assets/images/flags/ukraine.png" },
	{ name: "United Arab Emirates", flag: "assets/images/flags/united-arab-emirates.png" },
	{ name: "United Kingdom", flag: "assets/images/flags/united-kingdom.png" },
	{ name: "United States of America", flag: "assets/images/flags/united-states.png" },
	{ name: "Uruguay", flag: "assets/images/flags/uruguay.png" },
	{ name: "Uzbekistan", flag: "assets/images/flags/uzbekistn.png" },
	{ name: "Vanuatu", flag: "assets/images/flags/vanuatu.png" },
	{ name: "Venezuela", flag: "assets/images/flags/venezuela.png" },
	{ name: "Vietnam", flag: "assets/images/flags/vietnam.png" },
	{ name: "Yemen", flag: "assets/images/flags/yemen.png" },
	{ name: "Zambia", flag: "assets/images/flags/zambia.png" },
	{ name: "Zimbabwe", flag: "assets/images/flags/zimbabwe.png" },
]

$("#play-button").click(function () {
	$("#menu-container").css("display", "none");
	$("#learn-container").css("display", "none");
	$("#score-container").css("display", "none");
	$("#play-container").css("display", "block");
	playGame();
});

$("#learn-button").click(function () {
	$("#menu-container").css("display", "none");
	$("#play-container").css("display", "none");
	$("#score-container").css("display", "none");
	$("#learn-container").css("display", "block");
});

$("#main-brand").click(function () {
	$("#menu-container").css("display", "block");
	$("#play-container").css("display", "none");
	$("#score-container").css("display", "none");
	$("#learn-container").css("display", "none");
});

$("#play-again-button").click(function () {
	$("#menu-container").css("display", "none");
	$("#learn-container").css("display", "none");
	$("#score-container").css("display", "none");
	$("#no-sound-icon").css("display", "inline");
	$("#sound-icon").css("display", "none");
	$("#play-container").css("display", "block");
	soundToggle = 0;
	playGame();
});
$("#main-menu-button").click(function () {
	$("#menu-container").css("display", "block");
	$("#learn-container").css("display", "none");
	$("#score-container").css("display", "none");
	$("#play-container").css("display", "none");
});





function playGame() {

	// This is the variable that controls the number displayed in the card-counter.
	let cardCounter = 1;
	// This is the variable that tracks how many correct answers the user has clicked. 
	let score = 0;
	// This is the variable that controls whether or not sounds are played when the user clicks an answer. 
	let soundToggle = 0;
	// These functions change the sound icons' appearance and toggle the soundToggle variable on click.
	$("#no-sound-icon").click(function () {
		$(this).css("display", "none")
		$("#sound-icon").css("display", "inline")
		soundToggle = 1;
		console.log(soundToggle)
	});

	$("#sound-icon").click(function () {
		$(this).css("display", "none")
		$("#no-sound-icon").css("display", "inline");
		soundToggle = 0;
		console.log(soundToggle)
	});

	let buttonArray = [];

	// This function plays an audio file when the user clicks the correct answer button.
	function playCorrect() {
		let audio = new Audio('assets/audio/correct.mp4');
		audio.volume = 0.3;
		audio.play();
	};
	// This function plays an audio file when the user clicks an incorrect answer button.
	function playIncorrect() {
		let audio = new Audio('assets/audio/incorrect.mp4');
		audio.volume = 0.1;
		audio.play();
	};

	//This function changes the contents of the play-container each time the user clicks on a correct or an incorrect answer button.
	function nextFlag() {

		// This changes the number on the card counter each time the nextFlag function is run.
		$("#card-counter-text").text(`${cardCounter}/30`)

		// This displays the score menu when the user finishes a round of the game.
		if (cardCounter > 30) {
			$("#play-container").css("display", "none"),
				$("#score-container").css("display", "block")
		}

		// This displays the score the player achieved in the round on the Score Screen, as well as a different message for certain score thresholds
		if (score === 0) {
			$("#score-message").text(`You scored ${score}/30! I hope you did that on purpose... `)
		} else if (score <= 10) {
			$("#score-message").text(`You scored ${score}/30! You've got a long way to go!`)
		} else if (score <= 25) {
			$("#score-message").text(`You scored ${score}/30! Keep practicing!`)
		} else if (score < 30) {
			$("#score-message").text(`You scored ${score}/30! You're not a Flag Master yet, but you're getting close!`)
		} else {
			$("#score-message").text(`You scored ${score}/30! You really are a Flag Master!`)
		}

		function generateCorrectAnswer() {
			// This determines which flag is shown, and provides the the correct country name to one of the buttons within the answer-buttons div.
			let answerCountry = Math.floor(Math.random() * countries.length);
			buttonArray.push(answerCountry);
			console.log(buttonArray);
			$('#play-flag-container').css('background-image', `url(${countries[answerCountry].flag})`);
			let answerCountryName = countries[answerCountry].name;
			$("#answer-button-1").text(answerCountryName);
			console.log(countries[answerCountry]);
		}

		//This populates the remaining buttons with incorrect answers.
		// Button 2
		function generateIncorrectAnswerOne() {
			let incorrectOne = Math.floor(Math.random() * countries.length);
			buttonArray.push(incorrectOne);
			// This (in combination with the other controls in the answer generators) ensures that the same countries are not called upon more than once when a new flag is displayed. 
			if (buttonArray[1] === buttonArray[0]) {
				incorrectOne = Math.floor(Math.random() * countries.length)
			}
			let incorrectOneName = countries[incorrectOne].name;
			$("#answer-button-2").text(incorrectOneName);
		}
		// Button 3
		function generateIncorrectAnswerTwo() {
			let incorrectTwo = Math.floor(Math.random() * countries.length);
			buttonArray.push(incorrectTwo);
			if (buttonArray[2] === buttonArray[1] || buttonArray[2] === buttonArray[0]) {
				incorrectTwo = Math.floor(Math.random() * countries.length)
			}
			let incorrectTwoName = countries[incorrectTwo].name;
			$("#answer-button-3").text(incorrectTwoName);
		}
		// Button 4
		function generateIncorrectAnswerThree() {
			let incorrectThree = Math.floor(Math.random() * countries.length);
			buttonArray.push(incorrectThree);
			if (buttonArray[3] === buttonArray[2] || buttonArray[3] === buttonArray[1] || buttonArray[3] === buttonArray[0]) {
				incorrectThree = Math.floor(Math.random() * countries.length)
			}
			let incorrectThreeName = countries[incorrectThree].name;
			$("#answer-button-4").text(incorrectThreeName);
		}

		// This randomises the order of the divs contained within the 'answer-buttons' div, thereby ensuring that the correct answer is not always in the same place.
		function randomiseButtonOrder() {
			$(".answer-buttons").html($(".answer-buttons .randomised-button").sort(function () {
				return Math.random() - 0.5;
			}));

			// This determines what happens when the user clicks the CORRECT answer, and initiates the next flag display. 
			$("#answer-button-1").click(function () {
				// This disables the answer buttons after they are pressed, preventing the player from clicking on another button until after the next flag has been fully loaded.
				$('.answer-button').prop('disabled', true);
				$(this).css('color', 'green');
				$('#play-flag-container').css('background-color', 'green');
				$('#play-flag-container').css('background-image', `url(assets/images/checked.png)`);
				if (soundToggle === 1) {
					playCorrect();
				}
				buttonArray = []
				setTimeout(function answerClick() {
					$("#answer-button-1").css('color', 'black');
					score++;
					$('.answer-button').removeAttr("disabled");
					nextFlag()
				}, 800);
			})

			// This determines what happens when the user clicks on any of the INCORRECT answers, and initiates the next flag display.
			// Button 2
			$("#answer-button-2").click(function () {
				$('.answer-button').prop('disabled', true);
				$(this).css('color', 'red');
				$('#play-flag-container').css('background-color', 'red');
				$('#play-flag-container').css('background-image', `url(assets/images/cancel.png)`);
				if (soundToggle === 1) {
					playIncorrect();
				}
				buttonArray = []
				setTimeout(function answerClick() {
					$("#answer-button-2").css('color', 'black');
					$('.answer-button').removeAttr("disabled");
					nextFlag()
				}, 800);
			})
			//Button 3
			$("#answer-button-3").click(function () {
				$('.answer-button').prop('disabled', true);
				$(this).css('color', 'red');
				$('#play-flag-container').css('background-color', 'red');
				$('#play-flag-container').css('background-image', `url(assets/images/cancel.png)`);
				if (soundToggle === 1) {
					playIncorrect();
				}
				buttonArray = []
				setTimeout(function answerClick() {
					$("#answer-button-3").css('color', 'black');
					$('.answer-button').removeAttr("disabled");
					nextFlag()
				}, 800);
			})
			// Button 4
			$("#answer-button-4").click(function () {
				$('.answer-button').prop('disabled', true);
				$(this).css('color', 'red');
				$('#play-flag-container').css('background-color', 'red');
				$('#play-flag-container').css('background-image', `url(assets/images/cancel.png)`);
				if (soundToggle === 1) {
					playIncorrect();
				}
				buttonArray = []
				setTimeout(function answerClick() {
					$("#answer-button-4").css('color', 'black');
					$('.answer-button').removeAttr("disabled");
					nextFlag()
				}, 800);
			})
		}

		generateCorrectAnswer()
		generateIncorrectAnswerOne()
		generateIncorrectAnswerTwo()
		generateIncorrectAnswerThree()
		randomiseButtonOrder()
		console.log(cardCounter)
		cardCounter++
		console.log(score)
	}
	nextFlag()

}