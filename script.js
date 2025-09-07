// Switch between sections
function nextPage(pageId) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");

  // Start hearts on page 2
  if (pageId === "page2") {
    setInterval(createHeart, 300);
  }
}

// Falling hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}
