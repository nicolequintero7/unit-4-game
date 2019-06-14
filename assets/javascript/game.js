
//the random number to match the jewel total to

function getNumber() {
    var minNumber = 5; // The minimum number you want
    var maxNumber = 40; // The maximum number you want
    var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // Generates random number
    document.getElementById("green").innerHTML = randomnumber; // Sets content of <div> to number
    return false; // Returns false just to tidy everything up
};

//naming the variables to keep score
var randomNumbers;
var win;
var lost;

//setting for a random number to show up in the resultsBox div


randomNumbers = Math.floor(Math.random() * 60) + 30;
console.log("random numbers", randomNumbers);
$("#green").text('Random Result: ' + randomNumbers);


//this sets a random number to the jewels, the number is consistant per game
//but chnages the page is reloaded

$("#pink").attr("data-number", Math.floor(Math.random() * 12));
$("#blue").attr("data-number", Math.floor(Math.random() * 12));
$("#purple").attr("data-number", Math.floor(Math.random() * 12));
$("#greenJ").attr("data-number", Math.floor(Math.random() * 12));

//setting the .onclick function for the jewels. Can not figure out how to pull the number in the HTML website, only can console.log it
$(".crystal-image").on('click', function (event) {
    console.log(event.target.getAttribute("data-number"));
   document.getElementById("totalScore").innerHTML = event.target.getAttribute; 
  
});

// make a way to keep score and for the computer to know when the user has hit the target number and won/lose