const games = [
  {
    type: "sport",
    name: "F1 23",
    price: "88$",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2108330/header.jpg?t=1725901368",
    link: "https://store.steampowered.com/app/2108330/F1_23/",
  },
  {
    type: "sport",
    name: "Fifa 23",
    price: "44$",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1811260/header.jpg?t=1712678770",
    link: "https://store.steampowered.com/app/1811260/EA_SPORTS_FIFA_23/",
  },
];

document
  .getElementById("categoriasLink")
  .addEventListener("click", function () {
    window.location.href = "categorias.html";
  });

const modal = document.getElementById("gameModal");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalType = document.getElementById("modalType");
const modalPrice = document.getElementById("modalPrice");
const modalLink = document.getElementById("modalLink");
const span = document.getElementsByClassName("close");

document.querySelectorAll(".hero-image img").forEach((img) => {
  img.addEventListener("click", (e) => {
    const gameId = e.target.getAttribute("data-id");
    const game = games[gameId];
    modalImage.src = game.image;
    modalName.textContent = game.name;
    modalType.textContent = game.type;
    modalPrice.textContent = `Price: ${game.price}`;
    modalLink.onclick = () => {
      window.location.href = game.link;
    };
    modal.style.display = "block";
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
