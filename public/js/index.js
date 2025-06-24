"use strict";

async function getRandomImage() {
  const endpoint = `http://localhost:8080/api/v1/getRandomImage`;
  try {
    const response = await fetch(endpoint);
    if(!response.ok) {
        throw new Error(`${endpoint} failed to fetch`);
    }
    const returnedData = await response.json();
    const receivedPhotoURL = returnedData.data;

    const imgDiv = document.querySelector(".background-img");
    imgDiv.style.backgroundImage = `url("${receivedPhotoURL}")`;
  } catch (error) {
    console.log(error);
  }
}

getRandomImage();