import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

//(a) Complete
let winners = fifaData.filter(fifaData => fifaData.Stage == "Final" && fifaData.Year == 2014);

console.log(winners[0]["Home Team Name"]);

//(b) Complete
console.log(winners[0]["Away Team Name"]);

//(c) Complete
console.log(winners[0]["Home Team Goals"]);

//(d) Complete
console.log(winners[0]["Away Team Goals"]);

//(e) Complete
if(winners[0]["Home Team Goals"] > winners[0]["Away Team Goals"]){
    console.log(winners[0]["Home Team Name"]);
}else{
    console.log(winners[0]["Away Team Name"]);
};


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

//Task 2 COMPLETE

function getFinals(data) {

    let finals = data.filter(data => data.Stage == "Final");
    return finals;
};

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

//Task 3 COMPLETE

function getYears(callback) {
    let years = callback.map(x=> x.Year);
    return years;
};

console.log(getYears(getFinals(fifaData)));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

//Task 4 COMPLETE

function getWinners(callback) {
    let finals = callback;
    let winners = [];
    for(let i in finals){
        if(finals[i]["Home Team Goals"] > finals[i]["Away Team Goals"]){
            winners.unshift(finals[i]["Home Team Name"]);
        }else{
            winners.unshift(finals[i]["Away Team Name"]);
        };
    }
    // let teams = callback.map(x=> x.Year);
    // return teams;
    return winners;
};

console.log(getWinners(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */


 //Task 5 COMPLETE

function getWinnersByYear(winnersArray, yearsArray) {
    let whoWon = [];
    for(let i in winnersArray){
        whoWon[i] = (`In ${yearsArray[i]}, ${winnersArray[i]} won the world cup!`);
    }
    return whoWon;
};

console.log(getWinnersByYear(getWinners(getFinals(fifaData)),getYears(getFinals(fifaData))));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

//Task 6 COMPLETE

function getAverageGoals(data) {
    let averageRatio = {"Home Average": 0, "Away Average": 0};
    let homeTotal = data.reduce(function(counter, item){
        return counter + item["Home Team Goals"];
    }, 0);
    let homeAvr = homeTotal/data.length;
    let awayTotal = data.reduce(function(counter, item){
        return counter + item["Away Team Goals"];
    }, 0);
    let awayAvr = awayTotal/data.length;
    averageRatio["Home Average"] = homeAvr;
    averageRatio["Away Average"] = awayAvr;
    return averageRatio;
    
};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
