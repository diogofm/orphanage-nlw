// create map
const map = L.map("mapid").setView([-27.222633, -49.6455874], 15);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add photo fields
function addPhotoField() {
  // get photos container #images
  const container = document.querySelector("#images");

  // get container to duplicate .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");

  // clone last added image
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  // verify if input is empty. if yes, dont add to image container
  const input = newFieldContainer.children[0];

  if (input == "") {
    return;
  }

  // clean field before add to image container
  input.value = "";

  // add clone to #images container
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length <= 1) {
    span.parentNode.children[0].value = "";
    return;
  }

  span.parentNode.remove();
}

// select yes or no
function toggleSelect(event) {
  // remove class .active from both buttons
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));

  // get clicked button
  const button = event.currentTarget;

  // set .active class to clicked button
  button.classList.add("active");

  // update hidden input with selected value
  const input = document.querySelector('[name="open_on_weekends"]');

  // check yes or no
  input.value = button.dataset.value;
}
