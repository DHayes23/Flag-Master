# Flag Master - Code Institute Milestone 2 Project
# Introduction

## Milestone Project 2 by Denis Hayes
---
* This project has been developed to fulfil the requirements of the Code Institute's Milestone Project 2.
* The primary goal of this website is to provide a fun and educational flag quiz game to users.
* This project consists of a single page, which is populated with different elements depending on user actions.
 
---
## Live Website Access
---
Access the live website at: https://dhayes23.github.io/Milestone-Project-2/

---
 ## Table of Contents
 ---
 1. Introduction
 2. Screenshots
 3. User Stories
 4. Wireframes
 5. Features
    * Favicon
    * Header
    * Main Menu
    * Play Screen
    * Score Screen
    * Learn Screen
    * Footer
6. Upcoming Features
7. Design Notes
8. Testing
9. Code Snippets
10. Deployment
11. Technologies Used
12. Bibliography
13. Acknowledgments

---
## Screenshots
---

---
## **User Stories**
---

### First Time User
* The New User is able to easily navigate the website, using a simple main menu which is presented on page load. 
* The New User can choose from 3 simple options at the Main Menu: 'Play', 'Learn' and 'How to Play'.
* On clicking the 'Play' button, the user is shown the Play Screen, which has an intuitive design that is easy to understand and use. 
* On finishing a game, the Score Screen is displayed to the user, prompting a clear choice between 'Play Again' and 'Main-Menu'.
* On clicking the 'Learn' button, the user is presented with the name of a country and its flag, one at a time and in alphabetical order. The user can advance change the displayed country using arrows either side of the flag. 
* On clicking the 'How to Play' button, the user is presented with a Bootstrap 5 Off-Canvas, which includes clear instructions on how to use the features of the site.

### The Player
* The Player can use the site to improve their flag recognition skills.
* The Player is clearly informed of whether they choose a correct or incorrect answer.
* If the Player chooses an incorrect answer, the correct answer is highlighted to allow them to learn as they play.
* On completion of a game, the user is informed of their score, and receives a custom message based on certain breakpoints. This encourages the user to aim to improve their score over repeated attempts. 

--- 
## Wireframes
--- 

---
## Features
--- 

### **Favicon**
* The Favicon is a small image of a globe, which should stand out to users when they have multiple tabs open. 

### **Header**
 * The Header is present at all times when accessing the website, even when the user scrolls to the bottom of the page. 
 * The Header displays the brand name, Flag Master, prominently at all times. The brand name functions as an alternative main menu button.
 * The Header features a button named 'Main Menu' which allows to return to the main menu at any time. This button is only visible when the user is not already on the Main Menu. This button is also hidden on the smallest screens, where the brand name functions as the Main Menu button. 

 ### **Main Menu**
 * The Main Menu is the user's first point of contact with the Flag Master website, and serves as a directory to the websites main functions. 
 * The Main Menu comprises of a container, within which there are three buttons.
 * The first of these buttons(Play) displays the Play Screen and initiates the playGame function.
 * The second button(Learn) launches the Learn Screen and initiates the learn function. 
 * The third and final button(How to Play) opens a Bootstrap 5 Off-Canvas, which contains instructional information on how to use the website. 

### **Play Screen**
* The Play Screen is the main mode featured on the Flag Master website. 
* The Play Screen comprises of a container, within which there is a flag display, four buttons, a card counter and a sound icon. 
* The flag displayed is randomly selected from the countries object, and one of the four buttons displayed contains the name of the country with which the flag is associated. 
* The remaining three buttons contain incorrect answers, whose names are also drawn from the countries object. 
* The order of the buttons is randomised, so that the player will only be able to rely on their flag knowledge to determine which button is the correct answer. 
* Clicking on an answer button informs the player of whether they were correct or not, and after a brief delay activates the nextFlag function, which displays a new randomised flag.
* If the player clicks on the correct answer, the displayed flag image changes to a green checkmark and the text of the answer button turns green, indicating their success.
* If the player clicks on one of the three incorrect answers, the displayed flag image changes to a red cross mark and the text of the button they have clicked turns red, indicating their mistake. Additionally, the text of the correct answer turns green, allowing the player to learn even when making mistakes. To facilitate this, the flag transition takes slightly longer to allow the player to read the correct answer.
* The card counter displays how far through the game the player is. Each game consists of 30 flag questions, after which the Score Screen is displayed. 
* The sound icon allows the player to toggle sound effects within the Play Screen. These sound effects consist of an affirmative and negative chime, and are played when the player clicks a correct or incorrect answer respectively. Sounds are disabled by default when the player starts a new game. 

### **Score Screen**
* The Score Screen is displayed at the end of each round of the game.
* The Score Screen comprises of a container, within which there is a score message and two buttons. 
* The score message tells the player how many of correct answers they clicked during the round and a short custom message which presents different statements regarding the player's flag knowledge based on how well the player performed. 
* The Play Again button restarts the game from the beginning, encouraging the player to continue playing the game.
* The Main Menu button takes the player back to the Main Menu, should they decide to take a break or use a different site function. 

### **Learn Screen**
* The Learn Screen is an ancillary mode wherein the user can practice their flag knowledge. 
* The Learn Screen comprises of a container, within which there is a flag display, a country name display, two arrow icons and a card counter.
* The flag display and the country name display show the flag and name of each country in the countries object one at a time, in alphabetical order.
* The arrow icons can be clicked by the user to navigate through the presented countries. The left arrow is hidden when the user is looking at the first flag, and the right arrow is hidden when the user is looking at the last flag. 
* The card counter tracks the users position within the countries object. 
### **Footer**
 * The Footer is present at the bottom of the page and must be scrolled to to be visible on smaller screens. 
 * The Footer displays two icons with different functions.
 * The Email Icon is a mailto link which, when clicked, opens the user's default email client and automatically fills the 'To' field with a contact email address.
 * The Github Icon is a hyperlink which directs the user to my GitHub page. 
 * Both of the aforementioned icons open their linked content in a separate tab, ensuring that the user's focus is not taken away from the Flag Master website.

---
 ## Upcoming Features
---

---
## Design Notes
---
### **Layout**
 * The website is a one page construction, with each element being hidden or displayed at different times depending on which features the user is accessing. 
 * The Main Menu is the first point of contact for the user and provides the buttons to access the other elements of the website.
### **General Aesthetics**
* The website has been designed with the theme of the Age of Exploration in mind.
* The website is intended to represent a map on a table, perhaps found in the captain's quarters of a ship.
### **Colour Scheme**
* The colour scheme has been based largely on the aforementioned maritime theme, and includes wood and parchment inspired textures. 
* The backgrounds of the menu and other screens are intended to evoke imagery of water and waves. 

---
## Testing
---
### **Functionality - Header**
---
* The main brand link on the header was tested to ensure proper functionality. 
* The test performed was the clicking of the link to ensure that it directs to the main menu of the website, closing any other open functions. 
* The main brand link passed this test.

### **Functionality - Main Menu**
---
* The main menu buttons were each individually tested to ensure that they launch the correct site functions.
* The tests performed included the clicking of each button and the confirmation that each one launched the proper function. 
* Each of the buttons performed as expected and passed this test.
### **Functionality - Play Screen - Flag Display**
---
* The play screen and the game it contains were subject to extensive testing. 
* The first test carried out was to ensure the correct operation of the flag display. When the Play Screen is launched it should display a random flag from the countries object in the flag container. 
* This functionality was tested by running the game several times and observing the results. 
* The flag display performed as expected, thereby passing this test.
### **Functionality - Play Screen - Answer Buttons**

### **Functionality - Learn Screen**
### **Functionality - How to Play Off Canvas**
### **Functionality - Footer**



### **Browser Compatibility**


### **Responsivity**


---
## Deployment
---
### **The following steps were taken to deploy the website:**

---
## Technologies Used
---
### **Bootstrap 5**

### **Font Awesome 5**

### **FlatIcon**

### **Pixillion Image Converter**
 
### **Microsoft Paint**
* Microsoft Paint was used to develop the wireframes of the website.
### **Github Pages**
* Github Pages was used to deploy the website.
---
## Bibliography
---
### **Websites**

---
## Acknowledgments
---
### **Brian Macharia, Code Institute Mentor**
I would like to thank my mentor, Brian, for his invaluable advice and assistance with the realisation of this project. 
### **Code Institute Student Care Team**
I would like to thank the Student Care Team for their work behind the scenes to ensure that students have the opportunity to work to the best of their abilities. 
