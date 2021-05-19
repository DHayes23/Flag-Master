const countries = [

	{ name: "Afghanistan", flag: "../images/flags/afghanistan.png" },
	{ name: "Albania", flag: "../images/flags/albania.png" },
	{ name: "Algeria", flag: "../images/flags/algeria.png" },
	{ name: "Andorra", flag: "../images/flags/andorra.png" },
	{ name: "Angola", flag: "../images/flags/angola.png" },
	{ name: "Antigua and Barbuda", flag: "../images/flags/antigua-and-barbuda.png" },
	{ name: "Argentina", flag: "../images/flags/argentina.png" },
	{ name: "Armenia", flag: "../images/flags/armenia.png" },
	{ name: "Aruba", flag: "../images/flags/aruba.png" },
	{ name: "Australia", flag: "../images/flags/australia.png" },
	{ name: "Austria", flag: "../images/flags/austria.png" },
	{ name: "Azerbaijan", flag: "../images/flags/azerbaijan.png" },
	{ name: "The Bahamas", flag: "../images/flags/bahamas.png" },
	{ name: "Bahrain", flag: "../images/flags/bahrain.png" },
	{ name: "Bangladesh", flag: "../images/flags/bangladesh.png" },
	{ name: "Barbados", flag: "../images/flags/barbados.png" },
	{ name: "Belarus", flag: "../images/flags/belarus.png" },
	{ name: "Belgium", flag: "../images/flags/belgium.png" },
	{ name: "Belize", flag: "../images/flags/belize.png" },
	{ name: "Benin", flag: "../images/flags/benin.png" },
	{ name: "Bermuda", flag: "../images/flags/bermuda.png" },
	{ name: "Bhutan", flag: "../images/flags/bhutan.png" },
	{ name: "Bolivia", flag: "../images/flags/bolivia.png" },
	{ name: "Bosnia and Herzegovina", flag: "../images/flags/bosnia-and-herzegovina.png" },
	{ name: "Botswana", flag: "../images/flags/botswana.png" },
	{ name: "Brazil", flag: "../images/flags/brazil.png" },
	{ name: "Brunei Darussalam", flag: "../images/flags/brunei.png" },
	{ name: "Bulgaria", flag: "../images/flags/bulgaria.png" },
	{ name: "Burkina Faso", flag: "../images/flags/burkina-faso.png" },
	{ name: "Burundi", flag: "../images/flags/burundi.png" },
	{ name: "Cape Verde", flag: "../images/flags/cape-verde.png" },
	{ name: "Cambodia", flag: "../images/flags/cambodia.png" },
	{ name: "Cameroon", flag: "../images/flags/cameroon.png" },
	{ name: "Canada", flag: "../images/flags/canada.png" },
	{ name: "The Central African Republic", flag: "../images/flags/central-african-republic.png" },
	{ name: "Chad", flag: "../images/flags/chad.png" },
	{ name: "Chile", flag: "../images/flags/chile.png" },
	{ name: "China", flag: "../images/flags/china.png" },
	{ name: "Colombia", flag: "../images/flags/colombia.png" },
	{ name: "Comoros", flag: "../images/flags/comoros.png" },
	{ name: "Democratic Republic of the Congo)", flag: "../images/flags/democratic-republic-of-congo.png" },
	{ name: "The Congo", flag: "../images/flags/republic-of-the-congo.png" },
	{ name: "Cook Islands", flag: "../images/flags/cook-islands.png" },
	{ name: "Costa Rica", flag: "../images/flags/costa-rica.png" },
	{ name: "Croatia", flag: "../images/flags/croatia.png" },
	{ name: "Cuba", flag: "../images/flags/cuba.png" },
	{ name: "Curaçao", flag: "../images/flags/curacao.png" },
	{ name: "Cyprus", flag: "../images/flags/cyprus.png" },
	{ name: "Czech Republic", flag: "../images/flags/czech-republic.png" },
	{ name: "Ivory Coast", flag: "../images/flags/ivory-coast.png" },
	{ name: "Denmark", flag: "../images/flags/denmark.png" },
	{ name: "Djibouti", flag: "../images/flags/djibouti.png" },
	{ name: "Dominica", flag: "../images/flags/dominica.png" },
	{ name: "Dominican Republic", flag: "../images/flags/dominican-republic.png" },
	{ name: "Ecuador", flag: "../images/flags/ecuador.png" },
	{ name: "Egypt", flag: "../images/flags/egypt.png" },
	{ name: "El Salvador", flag: "../images/flags/el-salvador.png" },
	{ name: "Equatorial Guinea", flag: "../images/flags/equatorial-guinea.png" },
	{ name: "Eritrea", flag: "../images/flags/eritrea.png" },
	{ name: "Estonia", flag: "../images/flags/estonia.png" },
	{ name: "Eswatini", flag: "../images/flags/swaziland.png" },
	{ name: "Ethiopia", flag: "../images/flags/ethiopia.png" },
	{ name: "Faroe Islands", flag: "../images/flags/faroe-islands.png" },
	{ name: "Fiji", flag: "../images/flags/fiji.png" },
	{ name: "Finland", flag: "../images/flags/finland.png" },
	{ name: "France", flag: "../images/flags/france.png" },
	{ name: "Gabon", flag: "../images/flags/gabon.png" },
	{ name: "Gambia", flag: "../images/flags/gambia.png" },
	{ name: "Georgia", flag: "../images/flags/georgia.png" },
	{ name: "Germany", flag: "../images/flags/germany.png" },
	{ name: "Ghana", flag: "../images/flags/ghana.png" },
	{ name: "Greece", flag: "../images/flags/greece.png" },
	{ name: "Greenland", flag: "../images/flags/greenland.png" },
	{ name: "Grenada", flag: "../images/flags/grenada.png" },
	{ name: "Guatemala", flag: "../images/flags/guatemala.png" },
	{ name: "Guinea", flag: "../images/flags/guinea.png" },
	{ name: "Guinea-Bissau", flag: "../images/flags/guinea-bissau.png" },
	{ name: "Guyana", flag: "../images/flags/guyana.png" },
	{ name: "Haiti", flag: "../images/flags/haiti.png" },
	{ name: "Honduras", flag: "../images/flags/honduras.png" },
	{ name: "Hungary", flag: "../images/flags/hungary.png" },
	{ name: "Iceland", flag: "../images/flags/iceland.png" },
	{ name: "India", flag: "../images/flags/india.png" },
	{ name: "Indonesia", flag: "../images/flags/indonesia.png" },
	{ name: "Iran", flag: "../images/flags/iran.png" },
	{ name: "Iraq", flag: "../images/flags/iraq.png" },
	{ name: "Ireland", flag: "../images/flags/ireland.png" },
	{ name: "Israel", flag: "../images/flags/israel.png" },
	{ name: "Italy", flag: "../images/flags/italy.png" },
	{ name: "Jamaica", flag: "../images/flags/jamaica.png" },
	{ name: "Japan", flag: "../images/flags/japan.png" },
	{ name: "Jordan", flag: "../images/flags/jordan.png" },
	{ name: "Kazakhstan", flag: "../images/flags/kazakhstan.png" },
	{ name: "Kenya", flag: "../images/flags/kenya.png" },
	{ name: "Kiribati", flag: "../images/flags/kiribati.png" },
	{ name: "North Korea", flag: "../images/flags/north-korea.png" },
	{ name: "South Korea", flag: "../images/flags/south-korea.png" },
	{ name: "Kuwait", flag: "../images/flags/kwait.png" },
	{ name: "Kyrgyzstan", flag: "../images/flags/kyrgyzstan.png" },
	{ name: "Laos", flag: "../images/flags/laos.png" },
	{ name: "Latvia", flag: "../images/flags/latvia.png" },
	{ name: "Lebanon", flag: "../images/flags/lebanon.png" },
	{ name: "Lesotho", flag: "../images/flags/lesotho.png" },
	{ name: "Liberia", flag: "../images/flags/liberia.png" },
	{ name: "Libya", flag: "../images/flags/libya.png" },
	{ name: "Liechtenstein", flag: "../images/flags/liechtenstein.png" },
	{ name: "Lithuania", flag: "../images/flags/lithuania.png" },
	{ name: "Luxembourg", flag: "../images/flags/luxembourg.png" },
	{ name: "Macao", flag: "../images/flags/macao.png" },
	{ name: "Madagascar", flag: "../images/flags/madagascar.png" },
	{ name: "Malawi", flag: "../images/flags/malawi.png" },
	{ name: "Malaysia", flag: "../images/flags/malasya.png" },
	{ name: "Maldives", flag: "../images/flags/maldives.png" },
	{ name: "Mali", flag: "../images/flags/mali.png" },
	{ name: "Malta", flag: "../images/flags/malta.png" },
	{ name: "Marshall Islands", flag: "../images/flags/marshall-island.png" },
	{ name: "Martinique", flag: "../images/flags/martinique.png" },
	{ name: "Mauritania", flag: "../images/flags/mauritania.png" },
	{ name: "Mauritius", flag: "../images/flags/mauritius.png" },
	{ name: "Mexico", flag: "../images/flags/mexico.png" },
	{ name: "Micronesia", flag: "../images/flags/micronesia.png" },
	{ name: "Moldova", flag: "../images/flags/moldova.png" },
	{ name: "Monaco", flag: "../images/flags/monaco.png" },
	{ name: "Mongolia", flag: "../images/flags/mongolia.png" },
	{ name: "Montenegro", flag: "../images/flags/montenegro.png" },
	{ name: "Morocco", flag: "../images/flags/morocco.png" },
	{ name: "Mozambique", flag: "../images/flags/mozambique.png" },
	{ name: "Myanmar", flag: "../images/flags/myanmar.png" },
	{ name: "Namibia", flag: "../images/flags/namibia.png" },
	{ name: "Nauru", flag: "../images/flags/nauru.png" },
	{ name: "Nepal", flag: "../images/flags/nepal.png" },
	{ name: "The Netherlands", flag: "../images/flags/netherlands.png" },
	{ name: "New Zealand", flag: "../images/flags/new-zealand.png" },
	{ name: "Nicaragua", flag: "../images/flags/nicaragua.png" },
	{ name: "Niger", flag: "../images/flags/niger.png" },
	{ name: "Nigeria", flag: "../images/flags/nigeria.png" },
	{ name: "Niue", flag: "../images/flags/niue.png" },
	{ name: "Norway", flag: "../images/flags/norway.png" },
	{ name: "Oman", flag: "../images/flags/oman.png" },
	{ name: "Pakistan", flag: "../images/flags/pakistan.png" },
	{ name: "Palau", flag: "../images/flags/palau.png" },
	{ name: "Palestine", flag: "../images/flags/palestine.png" },
	{ name: "Panama", flag: "../images/flags/panama.png" },
	{ name: "Papua New Guinea", flag: "../images/flags/papua-new-guinea.png" },
	{ name: "Paraguay", flag: "../images/flags/paraguay.png" },
	{ name: "Peru", flag: "../images/flags/peru.png" },
	{ name: "The Philippines", flag: "../images/flags/philippines.png" },
	{ name: "Poland", flag: "../images/flags/poland.png" },
	{ name: "Portugal", flag: "../images/flags/portugal.png" },
	{ name: "North Macedonia", flag: "../images/flags/republic-of-macedonia.png" },
	{ name: "Qatar", flag: "../images/flags/qatar.png" },
	{ name: "Romania", flag: "../images/flags/romania.png" },
	{ name: "Russia", flag: "../images/flags/russia.png" },
	{ name: "Rwanda", flag: "../images/flags/rwanda.png" },
	{ name: "Saint Kitts and Nevis", flag: "../images/flags/saint-kitts-and-nevis.png" },
	{ name: "Saint Lucia", flag: "../images/flags/st-lucia.png" },
	{ name: "Saint Vincent and the Grenadines", flag: "../images/flags/st-vincent-and-the-grenadines.png" },
	{ name: "Samoa", flag: "../images/flags/samoa.png" },
	{ name: "San Marino", flag: "../images/flags/san-marino.png" },
	{ name: "Sao Tome and Principe", flag: "../images/flags/sao-tome-and-prince.png" },
	{ name: "Saudi Arabia", flag: "../images/flags/saudi-arabia.png" },
	{ name: "Senegal", flag: "../images/flags/senegal.png" },
	{ name: "Serbia", flag: "../images/flags/serbia.png" },
	{ name: "Seychelles", flag: "../images/flags/seychelles.png" },
	{ name: "Sierra Leone", flag: "../images/flags/sierra-leone.png" },
	{ name: "Singapore", flag: "../images/flags/singapore.png" },
	{ name: "Slovakia", flag: "../images/flags/slovakia.png" },
	{ name: "Slovenia", flag: "../images/flags/slovenia.png" },
	{ name: "Solomon Islands", flag: "../images/flags/solomon-islands.png" },
	{ name: "Somalia", flag: "../images/flags/somalia.png" },
	{ name: "South Africa", flag: "../images/flags/south-africa.png" },
	{ name: "South Sudan", flag: "../images/flags/south-sudan.png" },
	{ name: "Spain", flag: "../images/flags/spain.png" },
	{ name: "Sri Lanka", flag: "../images/flags/sri-lanka.png" },
	{ name: "Sudan", flag: "../images/flags/sudan.png" },
	{ name: "Suriname", flag: "../images/flags/suriname.png" },
	{ name: "Sweden", flag: "../images/flags/sweden.png" },
	{ name: "Switzerland", flag: "../images/flags/switzerland.png" },
	{ name: "Syria", flag: "../images/flags/syria.png" },
	{ name: "Taiwan", flag: "../images/flags/taiwan.png" },
	{ name: "Tajikistan", flag: "../images/flags/tajikistan.png" },
	{ name: "Tanzania", flag: "../images/flags/tanzania.png" },
	{ name: "Thailand", flag: "../images/flags/thailand.png" },
	{ name: "Timor-Leste", flag: "../images/flags/east-timor.png" },
	{ name: "Togo", flag: "../images/flags/togo.png" },
	{ name: "Tonga", flag: "../images/flags/tonga.png" },
	{ name: "Trinidad & Tobago", flag: "../images/flags/trinidad-and-tobago.png" },
	{ name: "Tunisia", flag: "../images/flags/tunisia.png" },
	{ name: "Turkey", flag: "../images/flags/turkey.png" },
	{ name: "Turkmenistan", flag: "../images/flags/turkmenistan.png" },
	{ name: "Tuvalu", flag: "../images/flags/tuvalu.png" },
	{ name: "Uganda", flag: "../images/flags/uganda.png" },
	{ name: "Ukraine", flag: "../images/flags/ukraine.png" },
	{ name: "United Arab Emirates", flag: "../images/flags/united-arab-emirates.png" },
	{ name: "United Kingdom", flag: "../images/flags/united-kingdom.png" },
	{ name: "United States of America", flag: "../images/flags/united-states.png" },
	{ name: "Uruguay", flag: "../images/flags/uruguay.png" },
	{ name: "Uzbekistan", flag: "../images/flags/uzbekistn.png" },
	{ name: "Vanuatu", flag: "../images/flags/vanuatu.png" },
	{ name: "Venezuela", flag: "../images/flags/venezuela.png" },
	{ name: "Vietnam", flag: "../images/flags/vietnam.png" },
	{ name: "Yemen", flag: "../images/flags/yemen.png" },
	{ name: "Zambia", flag: "../images/flags/zambia.png" },
	{ name: "Zimbabwe", flag: "../images/flags/zimbabwe.png" },
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
				}, 700);
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
				}, 700);
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
				}, 700);
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
				}, 700);
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