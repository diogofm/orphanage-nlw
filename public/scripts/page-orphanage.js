const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

const lat = document.querySelector('span[data-lat]').dataset.lat;
const lng = document.querySelector('span[data-lng]').dataset.lng;
const name = document.querySelector('span[data-name]').dataset.name;

// create map
const map = L.map("mapid", options).setView([lat, lng], 15);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//create popup overlay
const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240,
}).setContent(
  `${name} <a href="/orphanage?id=1" class="choose-orphanage"> <img src="/images/arrow-white.svg"> </a>`
);

//create and add marker
L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup);

// image gallery
function selectImage(event) {
  const button = event.currentTarget;

  // remover todas as classes .active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  // selecionar a image clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  // atualizar o container de image
  imageContainer.src = image.src;

  // adicionar a class .active para este botão
  button.classList.add("active");
}
