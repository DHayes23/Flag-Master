// flagDir reduces file size by reducing the length of the flag filepath.
const flagDir ="assets/images/flags/";
/* The countries object contains the names and flags of all of the countries
 displayed within the website.*/
const countries = [
	{
			name: "Afghanistan",
			flag: `${flagDir}afghanistan.jpg`
	},
	{
			name: "Albania",
			flag: `${flagDir}albania.jpg`
	},
	{
			name: "Algeria",
			flag: `${flagDir}algeria.jpg`
	},
	{
			name: "Andorra",
			flag: `${flagDir}andorra.jpg`
	},
	{
			name: "Angola",
			flag: `${flagDir}angola.jpg`
	},
	{
			name: "Antigua and Barbuda",
			flag: `${flagDir}antigua-and-barbuda.jpg`
	},
	{
			name: "Argentina",
			flag: `${flagDir}argentina.jpg`
	},
	{
			name: "Armenia",
			flag: `${flagDir}armenia.jpg`
	},
	{
			name: "Aruba",
			flag: `${flagDir}aruba.jpg`
	},
	{
			name: "Australia",
			flag: `${flagDir}australia.jpg`
	},
	{
			name: "Austria",
			flag: `${flagDir}austria.jpg`
	},
	{
			name: "Azerbaijan",
			flag: `${flagDir}azerbaijan.jpg`
	},
	{
			name: "The Bahamas",
			flag: `${flagDir}bahamas.jpg`
	},
	{
			name: "Bahrain",
			flag: `${flagDir}bahrain.jpg`
	},
	{
			name: "Bangladesh",
			flag: `${flagDir}bangladesh.jpg`
	},
	{
			name: "Barbados",
			flag: `${flagDir}barbados.jpg`
	},
	{
			name: "Belarus",
			flag: `${flagDir}belarus.jpg`
	},
	{
			name: "Belgium",
			flag: `${flagDir}belgium.jpg`
	},
	{
			name: "Belize",
			flag: `${flagDir}belize.jpg`
	},
	{
			name: "Benin",
			flag: `${flagDir}benin.jpg`
	},
	{
			name: "Bermuda",
			flag: `${flagDir}bermuda.jpg`
	},
	{
			name: "Bhutan",
			flag: `${flagDir}bhutan.jpg`
	},
	{
			name: "Bolivia",
			flag: `${flagDir}bolivia.jpg`
	},
	{
			name: "Bosnia and Herzegovina",
			flag: `${flagDir}bosnia-and-herzegovina.jpg`
	},
	{
			name: "Botswana",
			flag: `${flagDir}botswana.jpg`
	},
	{
			name: "Brazil",
			flag: `${flagDir}brazil.jpg`
	},
	{
			name: "Brunei Darussalam",
			flag: `${flagDir}brunei.jpg`
	},
	{
			name: "Bulgaria",
			flag: `${flagDir}bulgaria.jpg`
	},
	{
			name: "Burkina Faso",
			flag: `${flagDir}burkina-faso.jpg`
	},
	{
			name: "Burundi",
			flag: `${flagDir}burundi.jpg`
	},
	{
			name: "Cape Verde",
			flag: `${flagDir}cape-verde.jpg`
	},
	{
			name: "Cambodia",
			flag: `${flagDir}cambodia.jpg`
	},
	{
			name: "Cameroon",
			flag: `${flagDir}cameroon.jpg`
	},
	{
			name: "Canada",
			flag: `${flagDir}canada.jpg`
	},
	{
			name: "The Central African Republic",
			flag: `${flagDir}central-african-republic.jpg`
	},
	{
			name: "Chad",
			flag: `${flagDir}chad.jpg`
	},
	{
			name: "Chile",
			flag: `${flagDir}chile.jpg`
	},
	{
			name: "China",
			flag: `${flagDir}china.jpg`
	},
	{
			name: "Colombia",
			flag: `${flagDir}colombia.jpg`
	},
	{
			name: "Comoros",
			flag: `${flagDir}comoros.jpg`
	},
	{
			name: "Democratic Republic of the Congo)",
			flag: `${flagDir}democratic-republic-of-congo.jpg`
	},
	{
			name: "The Congo",
			flag: `${flagDir}republic-of-the-congo.jpg`
	},
	{
			name: "Cook Islands",
			flag: `${flagDir}cook-islands.jpg`
	},
	{
			name: "Costa Rica",
			flag: `${flagDir}costa-rica.jpg`
	},
	{
			name: "Croatia",
			flag: `${flagDir}croatia.jpg`
	},
	{
			name: "Cuba",
			flag: `${flagDir}cuba.jpg`
	},
	{
			name: "Curaçao",
			flag: `${flagDir}curacao.jpg`
	},
	{
			name: "Cyprus",
			flag: `${flagDir}cyprus.jpg`
	},
	{
			name: "Czech Republic",
			flag: `${flagDir}czech-republic.jpg`
	},
	{
			name: "Ivory Coast",
			flag: `${flagDir}ivory-coast.jpg`
	},
	{
			name: "Denmark",
			flag: `${flagDir}denmark.jpg`
	},
	{
			name: "Djibouti",
			flag: `${flagDir}djibouti.jpg`
	},
	{
			name: "Dominica",
			flag: `${flagDir}dominica.jpg`
	},
	{
			name: "Dominican Republic",
			flag: `${flagDir}dominican-republic.jpg`
	},
	{
			name: "Ecuador",
			flag: `${flagDir}ecuador.jpg`
	},
	{
			name: "Egypt",
			flag: `${flagDir}egypt.jpg`
	},
	{
			name: "El Salvador",
			flag: `${flagDir}el-salvador.jpg`
	},
	{
			name: "Equatorial Guinea",
			flag: `${flagDir}equatorial-guinea.jpg`
	},
	{
			name: "Eritrea",
			flag: `${flagDir}eritrea.jpg`
	},
	{
			name: "Estonia",
			flag: `${flagDir}estonia.jpg`
	},
	{
			name: "Eswatini",
			flag: `${flagDir}swaziland.jpg`
	},
	{
			name: "Ethiopia",
			flag: `${flagDir}ethiopia.jpg`
	},
	{
			name: "Faroe Islands",
			flag: `${flagDir}faroe-islands.jpg`
	},
	{
			name: "Fiji",
			flag: `${flagDir}fiji.jpg`
	},
	{
			name: "Finland",
			flag: `${flagDir}finland.jpg`
	},
	{
			name: "France",
			flag: `${flagDir}france.jpg`
	},
	{
			name: "Gabon",
			flag: `${flagDir}gabon.jpg`
	},
	{
			name: "Gambia",
			flag: `${flagDir}gambia.jpg`
	},
	{
			name: "Georgia",
			flag: `${flagDir}georgia.jpg`
	},
	{
			name: "Germany",
			flag: `${flagDir}germany.jpg`
	},
	{
			name: "Ghana",
			flag: `${flagDir}ghana.jpg`
	},
	{
			name: "Greece",
			flag: `${flagDir}greece.jpg`
	},
	{
			name: "Greenland",
			flag: `${flagDir}greenland.jpg`
	},
	{
			name: "Grenada",
			flag: `${flagDir}grenada.jpg`
	},
	{
			name: "Guatemala",
			flag: `${flagDir}guatemala.jpg`
	},
	{
			name: "Guinea",
			flag: `${flagDir}guinea.jpg`
	},
	{
			name: "Guinea-Bissau",
			flag: `${flagDir}guinea-bissau.jpg`
	},
	{
			name: "Guyana",
			flag: `${flagDir}guyana.jpg`
	},
	{
			name: "Haiti",
			flag: `${flagDir}haiti.jpg`
	},
	{
			name: "Honduras",
			flag: `${flagDir}honduras.jpg`
	},
	{
			name: "Hungary",
			flag: `${flagDir}hungary.jpg`
	},
	{
			name: "Iceland",
			flag: `${flagDir}iceland.jpg`
	},
	{
			name: "India",
			flag: `${flagDir}india.jpg`
	},
	{
			name: "Indonesia",
			flag: `${flagDir}indonesia.jpg`
	},
	{
			name: "Iran",
			flag: `${flagDir}iran.jpg`
	},
	{
			name: "Iraq",
			flag: `${flagDir}iraq.jpg`
	},
	{
			name: "Ireland",
			flag: `${flagDir}ireland.jpg`
	},
	{
			name: "Israel",
			flag: `${flagDir}israel.jpg`
	},
	{
			name: "Italy",
			flag: `${flagDir}italy.jpg`
	},
	{
			name: "Jamaica",
			flag: `${flagDir}jamaica.jpg`
	},
	{
			name: "Japan",
			flag: `${flagDir}japan.jpg`
	},
	{
			name: "Jordan",
			flag: `${flagDir}jordan.jpg`
	},
	{
			name: "Kazakhstan",
			flag: `${flagDir}kazakhstan.jpg`
	},
	{
			name: "Kenya",
			flag: `${flagDir}kenya.jpg`
	},
	{
			name: "Kiribati",
			flag: `${flagDir}kiribati.jpg`
	},
	{
			name: "North Korea",
			flag: `${flagDir}north-korea.jpg`
	},
	{
			name: "South Korea",
			flag: `${flagDir}south-korea.jpg`
	},
	{
			name: "Kuwait",
			flag: `${flagDir}kwait.jpg`
	},
	{
			name: "Kyrgyzstan",
			flag: `${flagDir}kyrgyzstan.jpg`
	},
	{
			name: "Laos",
			flag: `${flagDir}laos.jpg`
	},
	{
			name: "Latvia",
			flag: `${flagDir}latvia.jpg`
	},
	{
			name: "Lebanon",
			flag: `${flagDir}lebanon.jpg`
	},
	{
			name: "Lesotho",
			flag: `${flagDir}lesotho.jpg`
	},
	{
			name: "Liberia",
			flag: `${flagDir}liberia.jpg`
	},
	{
			name: "Libya",
			flag: `${flagDir}libya.jpg`
	},
	{
			name: "Liechtenstein",
			flag: `${flagDir}liechtenstein.jpg`
	},
	{
			name: "Lithuania",
			flag: `${flagDir}lithuania.jpg`
	},
	{
			name: "Luxembourg",
			flag: `${flagDir}luxembourg.jpg`
	},
	{
			name: "Macao",
			flag: `${flagDir}macao.jpg`
	},
	{
			name: "Madagascar",
			flag: `${flagDir}madagascar.jpg`
	},
	{
			name: "Malawi",
			flag: `${flagDir}malawi.jpg`
	},
	{
			name: "Malaysia",
			flag: `${flagDir}malasya.jpg`
	},
	{
			name: "Maldives",
			flag: `${flagDir}maldives.jpg`
	},
	{
			name: "Mali",
			flag: `${flagDir}mali.jpg`
	},
	{
			name: "Malta",
			flag: `${flagDir}malta.jpg`
	},
	{
			name: "Marshall Islands",
			flag: `${flagDir}marshall-island.jpg`
	},
	{
			name: "Martinique",
			flag: `${flagDir}martinique.jpg`
	},
	{
			name: "Mauritania",
			flag: `${flagDir}mauritania.jpg`
	},
	{
			name: "Mauritius",
			flag: `${flagDir}mauritius.jpg`
	},
	{
			name: "Mexico",
			flag: `${flagDir}mexico.jpg`
	},
	{
			name: "Micronesia",
			flag: `${flagDir}micronesia.jpg`
	},
	{
			name: "Moldova",
			flag: `${flagDir}moldova.jpg`
	},
	{
			name: "Monaco",
			flag: `${flagDir}monaco.jpg`
	},
	{
			name: "Mongolia",
			flag: `${flagDir}mongolia.jpg`
	},
	{
			name: "Montenegro",
			flag: `${flagDir}montenegro.jpg`
	},
	{
			name: "Morocco",
			flag: `${flagDir}morocco.jpg`
	},
	{
			name: "Mozambique",
			flag: `${flagDir}mozambique.jpg`
	},
	{
			name: "Myanmar",
			flag: `${flagDir}myanmar.jpg`
	},
	{
			name: "Namibia",
			flag: `${flagDir}namibia.jpg`
	},
	{
			name: "Nauru",
			flag: `${flagDir}nauru.jpg`
	},
	{
			name: "Nepal",
			flag: `${flagDir}nepal.jpg`
	},
	{
			name: "The Netherlands",
			flag: `${flagDir}netherlands.jpg`
	},
	{
			name: "New Zealand",
			flag: `${flagDir}new-zealand.jpg`
	},
	{
			name: "Nicaragua",
			flag: `${flagDir}nicaragua.jpg`
	},
	{
			name: "Niger",
			flag: `${flagDir}niger.jpg`
	},
	{
			name: "Nigeria",
			flag: `${flagDir}nigeria.jpg`
	},
	{
			name: "Niue",
			flag: `${flagDir}niue.jpg`
	},
	{
			name: "Norway",
			flag: `${flagDir}norway.jpg`
	},
	{
			name: "Oman",
			flag: `${flagDir}oman.jpg`
	},
	{
			name: "Pakistan",
			flag: `${flagDir}pakistan.jpg`
	},
	{
			name: "Palau",
			flag: `${flagDir}palau.jpg`
	},
	{
			name: "Palestine",
			flag: `${flagDir}palestine.jpg`
	},
	{
			name: "Panama",
			flag: `${flagDir}panama.jpg`
	},
	{
			name: "Papua New Guinea",
			flag: `${flagDir}papua-new-guinea.jpg`
	},
	{
			name: "Paraguay",
			flag: `${flagDir}paraguay.jpg`
	},
	{
			name: "Peru",
			flag: `${flagDir}peru.jpg`
	},
	{
			name: "The Philippines",
			flag: `${flagDir}philippines.jpg`
	},
	{
			name: "Poland",
			flag: `${flagDir}poland.jpg`
	},
	{
			name: "Portugal",
			flag: `${flagDir}portugal.jpg`
	},
	{
			name: "North Macedonia",
			flag: `${flagDir}republic-of-macedonia.jpg`
	},
	{
			name: "Qatar",
			flag: `${flagDir}qatar.jpg`
	},
	{
			name: "Romania",
			flag: `${flagDir}romania.jpg`
	},
	{
			name: "Russia",
			flag: `${flagDir}russia.jpg`
	},
	{
			name: "Rwanda",
			flag: `${flagDir}rwanda.jpg`
	},
	{
			name: "Saint Kitts and Nevis",
			flag: `${flagDir}saint-kitts-and-nevis.jpg`
	},
	{
			name: "Saint Lucia",
			flag: `${flagDir}st-lucia.jpg`
	},
	{
			name: "Saint Vincent and the Grenadines",
			flag: `${flagDir}st-vincent-and-the-grenadines.jpg`
	},
	{
			name: "Samoa",
			flag: `${flagDir}samoa.jpg`
	},
	{
			name: "San Marino",
			flag: `${flagDir}san-marino.jpg`
	},
	{
			name: "Sao Tome and Principe",
			flag: `${flagDir}sao-tome-and-prince.jpg`
	},
	{
			name: "Saudi Arabia",
			flag: `${flagDir}saudi-arabia.jpg`
	},
	{
			name: "Senegal",
			flag: `${flagDir}senegal.jpg`
	},
	{
			name: "Serbia",
			flag: `${flagDir}serbia.jpg`
	},
	{
			name: "Seychelles",
			flag: `${flagDir}seychelles.jpg`
	},
	{
			name: "Sierra Leone",
			flag: `${flagDir}sierra-leone.jpg`
	},
	{
			name: "Singapore",
			flag: `${flagDir}singapore.jpg`
	},
	{
			name: "Slovakia",
			flag: `${flagDir}slovakia.jpg`
	},
	{
			name: "Slovenia",
			flag: `${flagDir}slovenia.jpg`
	},
	{
			name: "Solomon Islands",
			flag: `${flagDir}solomon-islands.jpg`
	},
	{
			name: "Somalia",
			flag: `${flagDir}somalia.jpg`
	},
	{
			name: "South Africa",
			flag: `${flagDir}south-africa.jpg`
	},
	{
			name: "South Sudan",
			flag: `${flagDir}south-sudan.jpg`
	},
	{
			name: "Spain",
			flag: `${flagDir}spain.jpg`
	},
	{
			name: "Sri Lanka",
			flag: `${flagDir}sri-lanka.jpg`
	},
	{
			name: "Sudan",
			flag: `${flagDir}sudan.jpg`
	},
	{
			name: "Suriname",
			flag: `${flagDir}suriname.jpg`
	},
	{
			name: "Sweden",
			flag: `${flagDir}sweden.jpg`
	},
	{
			name: "Switzerland",
			flag: `${flagDir}switzerland.jpg`
	},
	{
			name: "Syria",
			flag: `${flagDir}syria.jpg`
	},
	{
			name: "Taiwan",
			flag: `${flagDir}taiwan.jpg`
	},
	{
			name: "Tajikistan",
			flag: `${flagDir}tajikistan.jpg`
	},
	{
			name: "Tanzania",
			flag: `${flagDir}tanzania.jpg`
	},
	{
			name: "Thailand",
			flag: `${flagDir}thailand.jpg`
	},
	{
			name: "Timor-Leste",
			flag: `${flagDir}east-timor.jpg`
	},
	{
			name: "Togo",
			flag: `${flagDir}togo.jpg`
	},
	{
			name: "Tonga",
			flag: `${flagDir}tonga.jpg`
	},
	{
			name: "Trinidad & Tobago",
			flag: `${flagDir}trinidad-and-tobago.jpg`
	},
	{
			name: "Tunisia",
			flag: `${flagDir}tunisia.jpg`
	},
	{
			name: "Turkey",
			flag: `${flagDir}turkey.jpg`
	},
	{
			name: "Turkmenistan",
			flag: `${flagDir}turkmenistan.jpg`
	},
	{
			name: "Tuvalu",
			flag: `${flagDir}tuvalu.jpg`
	},
	{
			name: "Uganda",
			flag: `${flagDir}uganda.jpg`
	},
	{
			name: "Ukraine",
			flag: `${flagDir}ukraine.jpg`
	},
	{
			name: "United Arab Emirates",
			flag: `${flagDir}united-arab-emirates.jpg`
	},
	{
			name: "United Kingdom",
			flag: `${flagDir}united-kingdom.jpg`
	},
	{
			name: "United States of America",
			flag: `${flagDir}united-states.jpg`
	},
	{
			name: "Uruguay",
			flag: `${flagDir}uruguay.jpg`
	},
	{
			name: "Uzbekistan",
			flag: `${flagDir}uzbekistn.jpg`
	},
	{
			name: "Vanuatu",
			flag: `${flagDir}vanuatu.jpg`
	},
	{
			name: "Venezuela",
			flag: `${flagDir}venezuela.jpg`
	},
	{
			name: "Vietnam",
			flag: `${flagDir}vietnam.jpg`
	},
	{
			name: "Yemen",
			flag: `${flagDir}yemen.jpg`
	},
	{
			name: "Zambia",
			flag: `${flagDir}zambia.jpg`
	},
	{
			name: "Zimbabwe",
			flag: `${flagDir}zimbabwe.jpg`
	},
];

/* The following functions change the display to include the appropriate
elements as they are needed, and launch the main functions.*/
$("#play-button").click(function() {
	$("#menu-container").css("display", "none");
	$("#learn-container").css("display", "none");
	$("#score-container").css("display", "none");
	$("#play-container").css("display", "block");
	$("#menu-return-button").css("display", "inline");
	playGame();
});
$("#learn-button").click(function() {
	$("#menu-container").css("display", "none");
	$("#play-container").css("display", "none");
	$("#score-container").css("display", "none");
	$("#learn-container").css("display", "block");
	$("#menu-return-button").css("display", "inline");
	learn();
});
$("#main-brand").click(function() {
	$("#menu-container").css("display", "block");
	$("#play-container").css("display", "none");
	$("#score-container").css("display", "none");
	$("#learn-container").css("display", "none");
	$("#menu-return-button").css("display", "none");
	$("#no-sound-icon").css("display", "inline");
	$("#sound-icon").css("display", "none");
	/* The sound toggle resets the sound settings every time a user leaves the
	score screen.*/
	soundToggle = 0;
});
$("#menu-return-button").click(function() {
	$("#menu-container").css("display", "block");
	$("#play-container").css("display", "none");
	$("#score-container").css("display", "none");
	$("#learn-container").css("display", "none");
	$("#menu-return-button").css("display", "none");
	$("#no-sound-icon").css("display", "inline");
	$("#sound-icon").css("display", "none");
	soundToggle = 0;
});
$("#play-again-button").click(function() {
	$("#menu-container").css("display", "none");
	$("#learn-container").css("display", "none");
	$("#score-container").css("display", "none");
	$("#menu-return-button").css("display", "inline");
	$("#no-sound-icon").css("display", "inline");
	$("#sound-icon").css("display", "none");
	$("#play-container").css("display", "block");
	soundToggle = 0;
	playGame();
});
$("#main-menu-button").click(function() {
	$("#menu-container").css("display", "block");
	$("#learn-container").css("display", "none");
	$("#score-container").css("display", "none");
	$("#play-container").css("display", "none");
	$("#menu-return-button").css("display", "none");
	$("#no-sound-icon").css("display", "inline");
	$("#sound-icon").css("display", "none");
	soundToggle = 0;
});
// The following function controls all of the events of the Play Screen.
function playGame() {
	/* This is the variable that controls the number displayed in the
	 card-counter.*/
	let cardCounter = 1;
	/* This is the variable that tracks how many correct answers the user has
	 clicked.*/ 
	let score = 0;
	/*This is the variable that controls whether or not sounds are played when
	 the user clicks an answer. */
	let soundToggle = 0;
	/* These functions change the sound icons' appearance and toggle the
	 soundToggle variable on click.*/
	$("#no-sound-icon").click(function() {
			$(this).css("display", "none");
			$("#sound-icon").css("display", "inline");
			soundToggle = 1;
	});
	$("#sound-icon").click(function() {
			$(this).css("display", "none");
			$("#no-sound-icon").css("display", "inline");
			soundToggle = 0;
	});
	/* The button array is used to store the four countries generated by the
	 other functions.*/
	let buttonArray = [];
	/* This function plays an audio file when the user clicks the correct
	 answer button.*/
	function playCorrect() {
			let audio = new Audio('assets/audio/correct.mp4');
			audio.volume = 0.3;
			audio.play();
	}
	/* This function plays an audio file when the user clicks an incorrect
	 answer button.*/
	function playIncorrect() {
			let audio = new Audio('assets/audio/incorrect.mp4');
			audio.volume = 0.1;
			audio.play();
	}
	/*This function changes the contents of the play-container each time the
	 user clicks on a correct or an incorrect answer button.*/
	function nextFlag() {
			/* This changes the number on the card counter each time the nextFlag
			 function is run.*/
			$("#card-counter-text").text(`${cardCounter}/30`);
			/* This displays the score menu when the user finishes a round of
			 the game.*/
			if (cardCounter > 30) {
					$("#play-container").css("display", "none"),
							$("#score-container").css("display", "block");
			}
			/* This displays the score the player achieved in the round on the
			 Score Screen, as well as a different message for certain
			  score thresholds*/
			if (score === 0) {
					$("#score-message").text(`You scored ${score}/30!
					 I hope you did that on purpose... `);
			} else if (score <= 10) {
					$("#score-message").text(`You scored ${score}/30!
					 You've got a long way to go if you want to become a Flag Master!`);
			} else if (score <= 25) {
					$("#score-message").text(`You scored ${score}/30!
					 Keep practicing to improve your knowledge!`);
			} else if (score < 30) {
					$("#score-message").text(`You scored ${score}/30!
					 You're not a Flag Master yet, but you're getting close!`);
			} else {
					$("#score-message").text(`You scored ${score}/30!
					 Wow! You really are a Flag Master!`);
			}
			function generateCorrectAnswer() {
					/* This determines which flag is shown, and provides the correct
					 country name to one of the buttons within the answer-buttons div.*/
					let answerCountry = Math.floor(Math.random() * countries.length);
					buttonArray.push(answerCountry);
					$('#play-flag-container').css('background-image',
					 `url(${countries[answerCountry].flag})`);
					let answerCountryName = countries[answerCountry].name;
					$("#answer-button-1").text(answerCountryName);
			}
			//This populates the remaining buttons with incorrect answers.
			// Button 2
			function generateIncorrectAnswerOne() {
					let incorrectOne = Math.floor(Math.random() * countries.length);
					buttonArray.push(incorrectOne);
					/* This (in combination with the other controls in the answer
					 generators) ensures that the same countries are not called upon more
					  than once when a new flag is displayed.*/
					if (buttonArray[1] === buttonArray[0]) {
							incorrectOne = Math.floor(Math.random() * countries.length);
					}
					let incorrectOneName = countries[incorrectOne].name;
					$("#answer-button-2").text(incorrectOneName);
			}
			// Button 3
			function generateIncorrectAnswerTwo() {
					let incorrectTwo = Math.floor(Math.random() * countries.length);
					buttonArray.push(incorrectTwo);
					if (buttonArray[2] === buttonArray[1] || buttonArray[2] === 
						buttonArray[0]) {
							incorrectTwo = Math.floor(Math.random() * countries.length);
					}
					let incorrectTwoName = countries[incorrectTwo].name;
					$("#answer-button-3").text(incorrectTwoName);
			}
			// Button 4
			function generateIncorrectAnswerThree() {
					let incorrectThree = Math.floor(Math.random() * countries.length);
					buttonArray.push(incorrectThree);
					if (buttonArray[3] === buttonArray[2] || buttonArray[3] === 
						buttonArray[1] || buttonArray[3] === buttonArray[0]) {
							incorrectThree = Math.floor(Math.random() * countries.length);
					}
					let incorrectThreeName = countries[incorrectThree].name;
					$("#answer-button-4").text(incorrectThreeName);
			}
			/* This randomises the order of the divs contained within the 
			'answer-buttons' div, thereby ensuring that the correct answer is not 
			always in the same place.*/
			function randomiseButtonOrder() {
					$(".answer-buttons").html
					($(".answer-buttons .randomised-button").sort(function() {
							return Math.random() - 0.5;
					}));
					/* This determines what happens when the user clicks the CORRECT
					 answer, and initiates the next flag display.*/
					$("#answer-button-1").click(function() {
							/* This disables the answer buttons after they are pressed,
							 preventing the player from clicking on another button until after
							  the next flag has been fully loaded.*/
							$('.answer-button').prop('disabled', true);
							$(this).css('color', 'green');
							$('#play-flag-container').css('background-color', 'green');
							$('#play-flag-container').css('background-image',
							 `url(assets/images/checked.png)`);
							if (soundToggle === 1) {
									playCorrect();
							}
							buttonArray = [];
							setTimeout(function answerClick() {
									$("#answer-button-1").css('color', 'black');
									score++;
									$('.answer-button').removeAttr("disabled");
									nextFlag();
							}, 800);
					});
					/* This determines what happens when the user clicks on any of the
					 INCORRECT answers, and initiates the next flag display.*/
					// Button 2
					$("#answer-button-2").click(function() {
							$('.answer-button').prop('disabled', true);
							$(this).css('color', 'red');
							/* The following line of code turns the correct answer green on
							 the user clicking an incorrect answer, thereby allowing the user
							  to learn even while making mistakes. To accommodate this, the
								 user is also given more time to read the correct answer before
								  the game displays the next answer.*/
							$("#answer-button-1").css('color', 'green');
							$('#play-flag-container').css('background-color', 'red');
							$('#play-flag-container').css('background-image',
							 `url(assets/images/cancel.png)`);
							if (soundToggle === 1) {
									playIncorrect();
							}
							buttonArray = [];
							setTimeout(function answerClick() {
									$("#answer-button-2").css('color', 'black');
									$("#answer-button-1").css('color', 'black');
									$('.answer-button').removeAttr("disabled");
									nextFlag();
							}, 1000);
					});
					//Button 3
					$("#answer-button-3").click(function() {
							$('.answer-button').prop('disabled', true);
							$(this).css('color', 'red');
							$("#answer-button-1").css('color', 'green');
							$('#play-flag-container').css('background-color', 'red');
							$('#play-flag-container').css('background-image',
							 `url(assets/images/cancel.png)`);
							if (soundToggle === 1) {
									playIncorrect();
							}
							buttonArray = [];
							setTimeout(function answerClick() {
									$("#answer-button-3").css('color', 'black');
									$("#answer-button-1").css('color', 'black');
									$('.answer-button').removeAttr("disabled");
									nextFlag();
							}, 1000);
					});
					// Button 4
					$("#answer-button-4").click(function() {
							$('.answer-button').prop('disabled', true);
							$(this).css('color', 'red');
							$("#answer-button-1").css('color', 'green');
							$('#play-flag-container').css('background-color', 'red');
							$('#play-flag-container').css('background-image',
							 `url(assets/images/cancel.png)`);
							if (soundToggle === 1) {
									playIncorrect();
							}
							buttonArray = [];
							setTimeout(function answerClick() {
									$("#answer-button-4").css('color', 'black');
									$("#answer-button-1").css('color', 'black');
									$('.answer-button').removeAttr("disabled");
									nextFlag();
							}, 1000);
					});
			}
			generateCorrectAnswer();
			generateIncorrectAnswerOne();
			generateIncorrectAnswerTwo();
			generateIncorrectAnswerThree();
			randomiseButtonOrder();
			cardCounter++;
	}
	nextFlag();
}
// The following function controls all of the events of the Learn Screen
function learn() {
	/* The flag index variable controls which flag and country name is displayed
	 to the user.*/
	let flagIndex = 0;
	/* This function presents a country and its flag to the user on the
	 Learn screen.*/
	function generateLearnCountry() {
			$('#learn-flag-container').css('background-image',
			 `url(${countries[flagIndex].flag})`);
			$("#learn-country-name").text(countries[flagIndex].name);
			$("#card-counter-learn").text(`${flagIndex + 1}/${countries.length}`);
			/* This if statement checks whether the user is viewing the first or last
			 country on the Learn screen and hides the arrows accordingly, to ensure
			  the user doesn't increase or lower the flag index beyond the length of
				 the countries object.*/
			if (flagIndex === 0) {
					$("#learn-cycle-left").css('visibility', 'hidden');
			} else if (flagIndex === countries.length - 1) {
					$("#learn-cycle-right").css('visibility', 'hidden');
			} else {
					$("#learn-cycle-left").css('visibility', 'visible'),
							$("#learn-cycle-right").css('visibility', 'visible');
			}
	}
	/* The following functions allow the user to cycle through the flags in the
	 learn section, but increasing the flagIndex by 1 on click.*/
	$("#learn-cycle-right").click(function() {
			flagIndex = flagIndex + 1;
			generateLearnCountry();
	});
	$("#learn-cycle-left").click(function() {
			flagIndex = flagIndex - 1;
			generateLearnCountry();
	});
	generateLearnCountry();
}