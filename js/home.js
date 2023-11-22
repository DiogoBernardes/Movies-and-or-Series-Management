document.addEventListener("DOMContentLoaded", function () {
  // Encontra todos os elementos com a classe .fav-icon
  const favIcons = document.querySelectorAll(".fav-icon");

  // Itera sobre os elementos encontrados
  favIcons.forEach(function (favIcon) {
    // Quando clicarmos em um ícone
    favIcon.addEventListener("click", function () {
      // Verifica se é o ícone que pretendemos
      if (favIcon.classList.contains("bi-heart")) {
        // Se o ícone for o default, troca para o ícone preenchido
        favIcon.classList.remove("bi-heart");
        favIcon.classList.add("bi-heart-fill", "text-danger");
      } else {
        // Se o ícone for o coração preenchido, troca para o default
        favIcon.classList.remove("bi-heart-fill", "text-danger");
        favIcon.classList.add("bi-heart");
      }
    });
  });
});

function loadTrailer(index) {
  var trailerIframe = document.getElementById("trailerIframe-" + index);
  var closeButton = document.getElementById("closeButton-" + index);
  if (trailerIframe && closeButton) {
    var videoSrc = trailerIframe.getAttribute("data-src");
    trailerIframe.setAttribute("src", videoSrc);
    trailerIframe.style.display = "block";
    closeButton.style.display = "block";
  }
}

function hideTrailer(index) {
  var trailerIframe = document.getElementById("trailerIframe-" + index);
  var closeButton = document.getElementById("closeButton-" + index);
  if (trailerIframe && closeButton) {
    trailerIframe.style.display = "none";
    closeButton.style.display = "none";
  }
}


document.addEventListener('DOMContentLoaded', function () {
  const searchBar = document.getElementById('searchBar');
  const offcanvas = document.getElementById('offcanvasNavbar');

  // Evento quando a offcanvas está sendo aberta
  offcanvas.addEventListener('show.bs.offcanvas', function () {
      searchBar.style.display = 'none';
  });

  // Evento quando a offcanvas está sendo fechada
  offcanvas.addEventListener('hide.bs.offcanvas', function () {
      searchBar.style.display = '';
  });
});

