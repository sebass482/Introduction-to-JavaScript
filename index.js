/************************************************************** Task 1: Warm-up! **************************************************************/

//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
votingAge = 18
if (votingAge >= 18) {
    console.log("true")
} else {
    console.log("false");
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let first = 1;
let second = 2;
if (second > first){ 
    first = (first + 1)
} 
console.log(first);
console.log(second);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
let string = "1999";
console.log(string);
string = Number(string);
console.log(string);
/* Task D */
//Task d: Write a function to multiply a*b 
function multiply (a,b){
  return (a*b);
}
console.log(multiply(3,7))
/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogAge(myAge){
  return myAge*7;
} 
console.log(dogAge(10));
/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.
function dogFeeder(weight,age){
  if (age>=2 || age<=4){
    return weight*0.1;
  } else if (age>4 || age<=7){
    return weight*0.05
  } else if (age>7 || age<=12){
    return weight*0.04
  } else if (weight<=5){
    return weight*0.05;
  } else if (weight<=10){
    return weight*0.04
  } else if (weight<=15){
    return weight*0.03
  } else if (weight>15){
    return weight*0.02
  }
}
const dogMessage = dogFeeder(15);
console.log(dogMessage);



//feeding requirements
// adult dogs at least 5 pounds
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

//0.34<rock
//0.67<paper
//1<scissors
function rockPaperScissors (myChoice,computerChoice){
  computerChoice = Math.random();
  if (myChoice === "rock" && computerChoice <= 0.33){
    console.log("Computer chooses rock and it is a tie")
  } else if (myChoice === "rock" && computerChoice <= 0.67){
    console.log("Computer chooses paper and wins");
  } else if (myChoice === "rock" && computerChoice>0.67){
    console.log("Computer chooses scissors and loses");
  } else if (myChoice === "paper" && computerChoice <= 0.33 ){
    console.log("Computer chooses rock and loses");
  } else if (myChoice === "paper" && computerChoice <= 0.67){
    console.log("Computer chooses paper and it is a tie");
  } else if (myChoice === "paper" && computerChoice>0.67){
    console.log("Computer chooses scissors and wins");
  } else if (myChoice === "scissors" && computerChoice>0.67){
    console.log("Computer chooses scissors and it is a tie");
  } else if (myChoice === "scissors" && computerChoice<=0.33){
    console.log("Computer chooses rock and wins");
  } else if (myChoice === "scissors" && computerChoice<=0.67){
    console.log("Computer chooses paper and loses");
  }
}
console.log(rockPaperScissors("rock"))
console.log(rockPaperScissors("scissors"))
console.log(rockPaperScissors("paper"))
console.log(rockPaperScissors("paper"))



/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function kilometersToMiles(kilometers){
  return (kilometers)*0.62;
}




//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

function feetToCentimeters(feet){
  return (feet)*30.48;
} 




  


/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





