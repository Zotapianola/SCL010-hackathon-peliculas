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
{   let newDiv = document.createElement("div");
    newDiv.innerHTML =
      `<div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${jsn.Poster}" alt="Card image cap">
      <div class="card-body">
      <h5 class="card-title">${jsn.Title}</h5>
      <p class="card-year">Year: ${jsn.Year}</p>
      <p class="card-plot">Plot: ${jsn.Plot}</p>
      <a href="#" class="btn btn-primary">Back</a>
      </div>
      </div>;`
    moviesSection.appendChild(newDiv);
}
