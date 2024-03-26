const API = "https://jsonplaceholder.typicode.com/albums";

const ROOT = document.getElementById("albums");

ROOT.innerHTML = ``;

function displayAlbum({ id, title }) {
  let album = document.createElement("a");
  album.className = "album";
  album.setAttribute("href", `photos.html?id=${id}`);
  album.innerHTML = `<span>${id}. ${title}</span>`;
  return album;
}

async function fetchAlbums(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    data.map((album) => ROOT.append(displayAlbum(album)));
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

fetchAlbums(API);
