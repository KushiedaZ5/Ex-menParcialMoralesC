const games = [
  {
    type: "free",
    name: "ArchVile in a Village",
    price: "F2P Jugable",
    image: "img/juegoparcial2.jpg",
    link: "JuegoParcial/juegoparcial.html",
  },
  {
    type: "action",
    name: "GTA V",
    price: "$10",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg?t=1726606628",
    link: "https://example.com/game2",
  },
  {
    type: "sport",
    name: "F1 24 Manager",
    price: "$15",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2591280/header.jpg?t=1726647500",
    link: "https://example.com/game3",
  },
  {
    type: "adventure",
    name: "TLO1 Part 1",
    price: "$20",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg?t=1727359416",
    link: "https://example.com/game4",
  },
  {
    type: "free",
    name: "Freestyle 3",
    price: "Free",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1292630/header.jpg?t=1726737153",
    link: "https://example.com/game5",
  },
  {
    type: "action",
    name: "DeltaRune",
    price: "$12",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1671210/header.jpg?t=1668504080",
    link: "https://example.com/game6",
  },
  {
    type: "sport",
    name: "Madden 25",
    price: "$18",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2582560/header.jpg?t=1726657844",
    link: "https://example.com/game7",
  },
  {
    type: "adventure",
    name: "Final Fantasy XVI",
    price: "$25",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2515020/header.jpg?t=1727966504",
    link: "https://example.com/game8",
  },
  {
    type: "free",
    name: "CS2",
    price: "F2P",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg?t=1719426374",
    link: "https://example.com/game9",
  },
  {
    type: "action",
    name: "COD BO 6",
    price: "$88",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2933620/header.jpg?t=1725896510",
    link: "https://example.com/game10",
  },
  {
    type: "sport",
    name: "EA FC 25",
    price: "$70",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2669320/header.jpg?t=1727470248",
    link: "https://example.com/game11",
  },
  {
    type: "adventure",
    name: "Tomb Raider",
    price: "$30",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/203160/header.jpg?t=1710446431",
    link: "https://example.com/game12",
  },
  {
    type: "free",
    name: "Dota 2",
    price: "Free",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/header.jpg?t=1727827653",
    link: "https://example.com/game13",
  },
  {
    type: "action",
    name: "Raimbow Six Siege",
    price: "$15",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/359550/header.jpg?t=1719504498",
    link: "https://example.com/game14",
  },
];

const gameContainer = document.querySelector(".game-container");
const navLinks = document.querySelectorAll("nav ul li a");
const modal = document.getElementById("gameModal");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalType = document.getElementById("modalType");
const modalPrice = document.getElementById("modalPrice");
const modalLink = document.getElementById("modalLink");
const span = document.getElementsByClassName("close");

function displayGames(filter) {
  gameContainer.innerHTML = "";
  const filteredGames =
    filter === "all" ? games : games.filter((game) => game.type === filter);
  filteredGames.forEach((game) => {
    const gameCard = document.createElement("div");
    gameCard.classList.add("game-card");
    gameCard.innerHTML = `
      <img src="${game.image}" alt="${game.name}" data-link="${game.link}" data-name="${game.name}" data-type="${game.type}" data-price="${game.price}">
      <h3>${game.name}</h3>
      <h4>${game.type}</h4>
      <p>Price: ${game.price}</p>
    `;
    gameContainer.appendChild(gameCard);
  });

  // Agregar evento de clic a las imágenes
  const gameImages = document.querySelectorAll(".game-card img");
  gameImages.forEach((img) => {
    img.addEventListener("click", (e) => {
      const target = e.target;
      modalImage.src = target.src;
      modalName.textContent = target.getAttribute("data-name");
      modalType.textContent = target.getAttribute("data-type");
      modalPrice.textContent = `Price: ${target.getAttribute("data-price")}`;
      modalLink.onclick = () => {
        window.location.href = target.getAttribute("data-link");
      };
      modal.style.display = "block";
    });
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const filter = e.target.getAttribute("data-filter");
    displayGames(filter);
  });
});

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Mostrar todos los juegos al cargar la página
displayGames("all");
