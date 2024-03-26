const ROOT = document.getElementById("photos");

ROOT.innerHTML = ``;

function displayPhoto({ title, url }) {
  let photo = document.createElement("div");
  photo.className = "photo";
  photo.innerHTML = `<img
  class="photo__img"
  src="${url}"
  alt="photo of the album"
/>
<span class="photo__title"
  >${title}</span
>`;
  return photo;
}

async function fetchPhotos(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    data.map((photo) => ROOT.append(displayPhoto(photo)));
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

const url = window.location.href;

const queryParams = new URLSearchParams(new URL(url).search);

const id = queryParams.get("id");

const title = document.querySelector(".title");
title.textContent = `Album #${id}`;

fetchPhotos(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
