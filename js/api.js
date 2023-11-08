const apiKey = "12b0d5a9";

function searchOnEnter(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    search();
  }
}

function search() {
  const title = document.getElementById("title").value;

  if (title) {
    const apiURL = `https://www.omdbapi.com/?t=${encodeURIComponent(
      title
    )}&apikey=${apiKey}`;

    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        const results = document.getElementById("search-results");
        results.innerHTML = `<h1>${data.Title}</h1>
                                <p>${data.Year}</p>
                                <p>${data.Plot}</p>
                                <img src="${data.Poster}" alt="${data.Title}">
                                <button onclick="openWarezLink('${generateWarezLink(
                                  data
                                )}')">Watch Now</button>`;
      })
      .catch((error) => {
        console.error("Erro ao ir buscar os dados da API", error);
      });
  }
}

function generateWarezLink(data) {
  if (data.Type === "movie") {
    return `https://embed.warezcdn.com/filme/${data.imdbID}`;
  } else if (data.Type === "series") {
    return `https://embed.warezcdn.com/serie/${data.imdbID}`;
  } else {
    return "Tipo de conteúdo não suportado";
  }
}

function openWarezLink(url) {
  window.open(url, "_blank"); // Abre o link em uma nova janela ou guia
}

function updateMovieData(title) {
  const apiURL = `https://www.omdbapi.com/?t=${encodeURIComponent(
    title
  )}&apikey=${apiKey}`;

  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      const movieTitleElement = document.querySelector(
        ".hero-list__movie-title"
      );
      const movieImageElement = document.querySelector(".hero-list__img");
      const movieYearElement = document.querySelector(
        ".hero-list__information p:first-child"
      );
      const movieTimeElement = document.querySelector(
        ".hero-list__information p:nth-of-type(2)"
      );
      const imdbRatingElement = document.querySelector(
        ".hero-list__information .imdb-icon"
      );

      const year = data.Year.substring(0, 4);
      movieTitleElement.textContent = data.Title;
      movieImageElement.src = data.Poster;
      movieYearElement.textContent = year;
      movieTimeElement.textContent = data.Runtime;
      imdbRatingElement.textContent = data.imdbRating;
    })
    .catch((error) => {
      console.error("Erro ao buscar dados da API", error);
    });
}
// Suponha que você tenha uma lista de títulos de séries
const seriesTitles = ["See", "The 100", "See"]; // Adicione os títulos das séries desejadas

// Loop para criar elementos HTML para cada série e inseri-los na lista
for (const title of seriesTitles) {
  // Chame a função para buscar os dados da API com base no título
  updateMovieData(title);

  // Nota: A função updateMovieData(title) irá atualizar os elementos HTML na página
}
