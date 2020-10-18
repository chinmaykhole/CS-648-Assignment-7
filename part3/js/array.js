//Problem 1
var favMovies = ["Inception", "Shawshank", "Fight Club", "Seven", "Goodfellas"];
console.log(favMovies[1]);

//Problem 2
var movies = new Array(5);
for (var i = 0; i < favMovies.length; i++) {
    movies[i] = favMovies[i];
}
console.log(movies[0]);

//Problem 3
movies.splice(2, 0, "Hachiko");
window.console.log(movies.length);
window.console.log("\n");

//Problem 4
var movies = [];
for (var i = 0; i < favMovies.length; i++) {
    movies.push(favMovies[i]);
}
delete movies[0];
console.log(movies);

//Problem 5
var favMovies = ["Inception", "Shawshank", "Fight Club", "Seven", "Goodfellas","Sleepers","Godfather"];
var movies = [];


for (var i = 0; i < favMovies.length; i++) {
    movies.push(favMovies[i]);
}


for (var j = 0; j < movies.length; j++) {
    console.log(movies[j]);
}

//Problem 6
for (x in movies) {
    console.log(movies[x]);
}

//Problem 7
var sortedMovies = movies.sort();
for (x in sortedMovies) {
    console.log(sortedMovies[x]);
}

//Problem 8
var leastFavMovies = ["The ring", "Annabelle", "James Bond"];
var favMovies = movies;

console.log("\nMovies I like:\n\n" + favMovies.join("\n") +
            "\n\nMovies I regret watching:\n\n" + leastFavMovies.join("\n") + "\n\n");

//Problem 9
var movies = favMovies.concat(leastFavMovies);
var reverseSort = movies.sort().reverse();

console.log(reverseSort.join("\n"));

//Problem 10
console.log(reverseSort.pop());


