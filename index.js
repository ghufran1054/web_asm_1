const menu = document.getElementById("menu");

if (menu) {
  menu.addEventListener("click", () => {
    const menuList = document.getElementsByClassName("menu-list")[0];
    const menu = document.getElementById("menu");
    if (menuList.classList.contains("open")) {
      menuList.classList.remove("open");
      menu.classList.remove("open");
      menuList.style.display = "none";
    } else {
      menuList.classList.add("open");
      menu.classList.add("open");
      menuList.style.display = "block";
    }
  });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const navbar = document.getElementsByTagName("nav")[0];
    const offset = navbar.offsetHeight + 30;
    const target = document.querySelector(this.getAttribute("href"));
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition - offset;

    window.scrollTo({
      top: startPosition + distance,
      behavior: "smooth",
    });
  });
});

const videoOverlay = document.getElementById("videoOverlay");
const closeOverlay = document.getElementById("closeOverlay");

const projectNametoPath = {
  "Shogi (Japanese Chess)": "assets/chess_demo.mp4",
  Eatopia: "assets/chess_demo.mp4",
  "WhatsApp Clone": "assets/chess_demo.mp4",
};

const projectItems = document.getElementsByClassName("project-item");
for (let i = 0; i < projectItems.length; i++) {
  const playButton = projectItems[i].querySelector(".demo");
  const projectName = projectItems[i].querySelector(".project-name").innerText;

  playButton.addEventListener("click", function () {
    const video = document.getElementById("video-player");
    const videoSource = video.querySelector("source");
    video.play();
    videoSource.src = projectNametoPath[projectName];
    videoOverlay.style.display = "flex";

    // Close overlay when close button is clicked
    closeOverlay.addEventListener("click", function () {
      videoOverlay.style.display = "none";
      video.pause();
      video.currentTime = 0;
    });

    // Close overlay if clicked outside the video
    videoOverlay.addEventListener("click", function (event) {
      if (event.target === videoOverlay) {
        videoOverlay.replaceChild;
        videoOverlay.style.display = "none";
        video.pause();
        video.currentTime = 0;
      }
    });
  });
}
