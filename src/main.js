// películas curadas
const tearJerkers = ["The Lovely Bones", "Dear John", "The Notebook", "A Walk to remember"];
const mindBlowing = ["Trainspotting","Inception", "Memento"];
const familyFriendly = ["Up", "WALL·E", "Benji", "A Bug's Life", "Toy Story", "Inside Out"];
const oscarWinners = ["The Lord of the Rings: The Return of the King", "Titanic", "Ben-Hur", "Gravity"];
const funnyOrDopey = ["Zoolander","Mean Girls", "Borat", "Superbad","Step Brothers"];

const moviesSection = document.getElementById('movies-section');

function fetchMovie (movieArray)
{
  for (i = 0;i < movieArray.length; i++)
  {
    let fetchURL = "https://omdbapi.com/?t=" + movieArray[i] + "&apikey=35b98c4d";
    fetch(`${fetchURL}`
    )
    .then(function(response) {
      console.log(response.status);
      return response.json();
    })
    .then(function(jsn) {
      console.log(jsn);
      createDivs(jsn);
      }
    )
  }
}

document.getElementById("familyFriendlyHTML").onclick = ()=> {fetchMovie(familyFriendly)};
document.getElementById("tearJerkersHTML").onclick = ()=> {fetchMovie(tearJerkers)};
document.getElementById("funnyOrDopeyHTML").onclick = ()=> {fetchMovie(funnyOrDopey)};
document.getElementById("oscarWinnersHTML").onclick = ()=> {fetchMovie(oscarWinners)};
document.getElementById("mindBlowingHTML").onclick = ()=> {fetchMovie(mindBlowing)};

// crear cartas
function createDivs(jsn)
{
    let newDiv = document.createElement("div");
    newDiv.innerHTML =
   `<div class="movie-card">
     <h3>${jsn.Title}</h3>
      <p>
      Año: ${jsn.Year}

      Sinopsis: ${jsn.Plot}
      </p>
      <img src=${jsn.Poster} alt="movie-card">
   </div>`;
    moviesSection.appendChild(newDiv);
}
