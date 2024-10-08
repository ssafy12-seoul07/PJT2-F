import { items } from "./videoData.js";

const urlParams = new URLSearchParams(window.location.search);
const videoId = urlParams.get("id") ?? items[0].id;

// Find the video in the items array
const video = items.find((v) => v.id === videoId);

// Set the video data into the page
const titleTag = document.getElementById("video-title");
const linkTag = document.getElementById("video-hyperlink");
const thumbnailTag = document.getElementById("video-thumbnail");

if (video) {
  titleTag.textContent = video.title;
  linkTag.href = video.url;
  thumbnailTag.src = `https://img.youtube.com/vi/${video.id}/0.jpg`;
  thumbnailTag.alt = video.title;
} else {
  titleTag.textContent = "Video not found";
  thumbnailTag.alt = "Video not found";
}
