"use strict";

async function getRandomImage() {
  const client_id = "ACCESS_TOKEN";
  const endpoint = `https://api.unsplash.com/photos/random/?client_id=${client_id}`;
  try {
    const response = await fetch(endpoint);
    const returnedData = await response.json();
    const receivedPhotoURL = returnedData.urls.regular;

    const imgDiv = document.querySelector(".background-img");
    imgDiv.style.backgroundImage = `url("${receivedPhotoURL}")`;
  } catch (error) {
    console.log(error);
  }
}

getRandomImage();
