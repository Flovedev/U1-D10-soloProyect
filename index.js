/*

ASSIGNMENT RULES

– All the answers must be written in JavaScript

– You can ask for help, reach the Teaching Assistants if needed

– You can Google / use StackOverflow BUT only when you think you need something we didn’t cover during lessons yet

– You can test your code in a separate file or de-commenting the single exercises in this one.

– You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you’re using macOS or Linux.

– Complete as many exercises as you can

*/

// JS Basics

function title(params) {
    console.log(`\n----------${params}:----------\n`);
};

/* EXERCISE A

Create a variable called test and assign a string value to it.

*/

title("Exercise A");

let test = "stringValue"

console.log(test);

/* EXERCISE B

Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.

*/

title("Exercise B");

let sum = 10 + 20;

console.log(sum);

/* EXERCISE C

Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).

*/

title("Exercise C");

function random020(max) {
    return Math.floor(Math.random() * max);
};

let random = random020(20);
console.log(random);

/* EXERCISE D

Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.

*/

title("Exercise D");

let me = {
    name: "Florencio",
    surname: "Villanueva",
    age: 32
};

console.log(me);

/* EXERCISE E

Write a piece of code for programmatically removing the age property from the previously create object.

*/

title("Exercise E");

delete me.age;

console.log(me);

/* EXERCISE F

Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.

*/

title("Exercise F");

me.skills = [
    "HTML", "CSS", "JavaScript" //HTML and CSS are markup languages, is just to add more info...
];

console.log(me);

/* EXERCISE G

Write a piece of code for programmatically removing the last skill from the skills array inside the me object.

*/

title("Exercise G");

me.skills.pop()

console.log(me);

// JS Functions

/* EXERCISE 1

Write a function called dice; it should randomize an integer number between 1 and 6.

*/

title("Exercise 1");

function dice(max) {
    return Math.floor(Math.random() * max) + 1;
};


console.log(dice(6));

/* EXERCISE 2

Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.

*/

title("Exercise 2");

function whoIsBigger(n1, n2) {
    if (n1 > n2) {
        return n1
    } else {
        return n2
    }
};

let exc2 = whoIsBigger(5, 9);
console.log(exc2);

/* EXERCISE 3

Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.

Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]

*/

title("Exercise 3");

function splitMe(check) {
    let split = check.split(" ");
    return split
}

let exc3 = splitMe("I love coding");
console.log(exc3);

/* EXERCISE 4

Write a function called deleteOne which receives a string and a boolean as parameters.

If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.

*/

title("Exercise 4");

function deleteOne(string, boolean) {
    if (boolean === true) {
        let split1 = string.split("")
        split1.shift()
        let join1 = split1.join("")
        return join1
    }
    else if (boolean == false) {
        let split2 = string.split("")
        split2.pop()
        let join2 = split2.join("")
        return join2
    }
}
let exc4 = deleteOne("Florencio", true)
let exc42 = deleteOne("Florencio", false)
console.log(exc4);
console.log(exc42);

/* EXERCISE 5

Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.

Ex.: onlyLetters("I have 4 dogs") => returns "I have dogs"

*/

title("Exercise 5");

function onlyLetters(string) {
    let removeNum = string.replace(/[0-9]/g, '');
    return removeNum
}

let exc5 = onlyLetters("I have 4 dogs")
console.log(exc5);

/* EXERCISE 6

Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.

*/

title("Exercise 6"); //I found this regex expression to match symbols like @ or .

function isThisAnEmail(string) {
    let re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    return re.test(string);
}

let exc6 = isThisAnEmail("flovedev@gmail.com")
console.log(exc6);

/* EXERCISE 7

Write a function called whatDayIsIt that should return the current day of the week.

*/

title("Exercise 7");

let whatDayIsIt = new Date().toLocaleString(
    'default', { weekday: 'long' });

console.log(whatDayIsIt);

/* EXERCISE 8

Write a function called rollTheDices which receives a number as a parameter.

It should invoke the dice() function defined in Ex1 the specified amount of times,

and return an object containing a sum property holding the sum of all values extracted

and a values array containing the single values of the dicerolls themselves.

Example: RollTheDices(3) => returns {

sum: 10

values: [3, 3, 4]

}

*/

title("Exercise 8");

function rollTheDices(number) {
    let arrey = [];
    let object = { sum: 0, };

    for (let index = 0; index < number; index++) {
        arrey[index] = dice(7);
        object.sum += arrey[index];
    };
    console.log("Sum:", arrey)

    return console.log("Values:"), sum;
}

console.log(rollTheDices(9))

//console.log(letsRoll)

/* EXERCISE 9

Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.

*/

title("Exercise 9");


function howManyDays(start, end) {
    let date1 = new Date(start);
    let date2 = new Date(end);
    let oneDay = 1000 * 60 * 60 * 24;

    let diffInTime = date2.getTime() - date1.getTime();

    let diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
}
let exc8 = howManyDays("1/11/2022", "2/12/2022")
console.log(exc8);

/* EXERCISE 10

Write a function called isTodayMyBirthday which should return true if today’s your birthday, false otherwise.

*/

title("Exercise 10");

function isTodayMyBirthday(date) {
    let today = new Date();
    let day = today.getDate();
    let month = today.getUTCMonth() + 1;
    let year = today.getFullYear();
    let todays = day.toString() + month.toString() + year.toString()

    let dates = date.split("/").join("");

    if (todays === dates) {
        return console.log("Is today your birthday?"), true;
    } else {
        return console.log("Is today your birthday?"), false;
    }
}

let birhD = isTodayMyBirthday("2/12/2022")
console.log(birhD);


// JS Arrays & Objects

// NOTE: the movies array used in some exercises is defined at the end of this file

const movies = [

    {

        Title: "The Lord of the Rings: The Fellowship of the Ring",

        Year: "2001",

        imdbID: "tt0120737",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",

    },

    {

        Title: "The Lord of the Rings: The Return of the King",

        Year: "2003",

        imdbID: "tt0167260",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",

    },

    {

        Title: "The Lord of the Rings: The Two Towers",

        Year: "2002",

        imdbID: "tt0167261",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",

    },

    {

        Title: "Lord of War",

        Year: "2005",

        imdbID: "tt0399295",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",

    },

    {

        Title: "Lords of Dogtown",

        Year: "2005",

        imdbID: "tt0355702",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",

    },

    {

        Title: "The Lord of the Rings",

        Year: "1978",

        imdbID: "tt0077869",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",

    },

    {

        Title: "Lord of the Flies",

        Year: "1990",

        imdbID: "tt0100054",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",

    },

    {

        Title: "The Lords of Salem",

        Year: "2012",

        imdbID: "tt1731697",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",

    },

    {

        Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",

        Year: "1984",

        imdbID: "tt0087365",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",

    },

    {

        Title: "Lord of the Flies",

        Year: "1963",

        imdbID: "tt0057261",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",

    },

    {

        Title: "The Avengers",

        Year: "2012",

        imdbID: "tt0848228",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",

    },

    {

        Title: "Avengers: Infinity War",

        Year: "2018",

        imdbID: "tt4154756",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",

    },

    {

        Title: "Avengers: Age of Ultron",

        Year: "2015",

        imdbID: "tt2395427",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",

    },

    {

        Title: "Avengers: Endgame",

        Year: "2019",

        imdbID: "tt4154796",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",

    },

];

/* EXERCISE 11

Write a function called deleteProp which receives an object and a string as parameters,

and returns the given object after deleting its property named as the given string.

*/

title("Exercise 11");

let exc11 = {
    title: "Title11",
    id: 1234,
}

function deleteProp(object, string) {
    delete object[string];
    console.log(object);
}

deleteProp(exc11, "id");

/* EXERCISE 12

Write a function called oldestMovie which finds the oldest movie in the provided movies array.

*/

title("Exercise 12");

function oldestMovie(movie) {

    let ids = movie.map(function (item) {
        return parseInt(item.Year, 10);
    });

    let min = Math.min(...ids);
    let string1 = min.toString();

    let find = movie.find(obj => obj.Year == string1);

    return find;
}

let exc12 = oldestMovie(movies);
console.log(exc12);


/* EXERCISE 13

Write a function called countMovies which returns the number of movies contained in the provided movies array.

*/

title("Exercise 13");

let counting = 0;
function countMovies() {
    for (let index = 0; index < movies.length; index++) {
        counting++;
    }
    return counting;
}
console.log(countMovies());

/* EXERCISE 14

Write a function called onlyTheTitles which creates an array with just the titles of the movies contained in the provided movies array.

*/

title("Exercise 14");

function onlyTheTitles(movie) {
    let onlyTitles = [];
    for (let index = 0; index < movies.length; index++) {
        onlyTitles.push(movies[index].Title);
    }
    movie = onlyTitles;
    return movie;
}

console.log(onlyTheTitles());

/* EXERCISE 15

Write a function called onlyInThisMillennium which returns only the movies produced in this millennium from the provided movies array.

*/

title("Exercise 15");

function onlyInThisMillennium() {
    let thisMillenium = [];

    for (let index = 0; index < movies.length; index++) {
        if (2000 > movies[index].Year) {
            thisMillenium.push(movies[index]);
        }
    }
    return thisMillenium;
}

console.log(onlyInThisMillennium());

/* EXERCISE 16

Write a function called getMovieById which receives an id as a parameter and returns the movie with the given id from the provided movies array.

*/

title("Exercise 16");

function getMovieById(id) {
    let thisMovie = []
    for (let index = 0; index < movies.length; index++) {
        if (id === movies[index].imdbID) {
            thisMovie.push(movies[index])
        };
    }
    return thisMovie;
}

console.log(getMovieById("tt0167260"));

/* EXERCISE 17

Write a function called sumAllTheYears which returns the sum of all the years in which the movies in the provided movies array have been produced.

*/

title("Exercise 17");

function sumAllTheYears() {
    let allYears = [];
    let sum = 0;
    for (let index = 0; index < movies.length; index++) {
        allYears.push(movies[index]["Year"]);

    }
    for (let y = 0; y < allYears.length; y++) {
        parse = parseInt(allYears[y]);
        sum += parse;
    }
    return sum;
}

console.log(sumAllTheYears());

/* EXERCISE 18

Write a function called searchByTitle which receives a string as a parameter and returns all the movies in the provided movies array which contain that string in the title.

*/

title("Exercise 18");

function searchByTitle(string) {
    let searchMovie = []
    for (let index = 0; index < movies.length; index++) {
        if (movies[index].Title.includes(string)) {
            searchMovie.push(movies[index]);
        };
    }
    return searchMovie;
}
console.log(searchByTitle("Rings"));

/* EXERCISE 19

Write a function called searchAndDivide which receives a string as a parameter and returns an object;

this object should contain an array called match, made by all the movies from the provided movies array which contain the given string in the title,

and another array unmatch with all the remaining ones.

*/

title("Exercise 19");

function searchAndDivide(string) {
    let match = []
    let unmatch = []

    for (let index = 0; index < movies.length; index++) {
        if (movies[index].Title.includes(string)) {
            match.push(movies[index])
        } else {
            unmatch.push(movies[index])
        };
    }
    return {
        match, unmatch
    }
}

console.log(searchAndDivide("Lord"));

/* EXERCISE 20

Write a function called "removeIndex" which receives a number as a parameter and returns the provided movies array without the element in the given position.

*/

title("Exercise 20");

function removeIndex(number) {
    movies.splice(number)

    return movies
}


console.log(removeIndex(12))

// [EXTRAS] JS Advanced

/* EXERCISE 21

Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.

Example:

halfTree(3)

*

**

***

*/

title("Exercise 21");

function halfTree(height) {
    let tree = "";
    for (let index = 0; index < height; index++) {
        console.log(tree += "*");
    }
    return tree
}

halfTree(4)

/* EXERCISE 22

Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.

Example:

tree(3)

  *

 ***

*****

*/

/* EXERCISE 23

Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.

*/

/* WHEN YOU ARE FINISHED

Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today’s Eduflow.

*/

/* This movies array is used throughout the exercises. You’re not supposed to alter it. */

