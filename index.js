async function loadJSON(path) {
  const response = await fetch(path);
  const data = await response.json();
  return data;
}
/**
 * @param {object} skill - The skill object containing name, description, and icon.
 * @returns {HTMLElement} - The created skill card element.
 */
function createSkillCard(skill) {
  const skillCard = document.createElement("div");
  skillCard.className = "skills-item";
  skillCard.innerHTML = `<div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                        <img src="${skill.icon}" alt="html">
                        <span>${skill.name}</span>
                    </div>
                    <p>${skill.description}</p>`;
  return skillCard;
}

/**
 * @param {object} project - The project object containing name, description, github, and demo.
 * @returns {HTMLElement} - The created project card element.
 * @description - This function creates a project card element with the given project object.
 */

function createProjectCard(project) {
  const videoOverlay = document.getElementById("videoOverlay");
  const closeOverlay = document.getElementById("closeOverlay");

  function playDemo() {
    const video = document.getElementById("video-player");
    const videoSource = video.querySelector("source");
    videoSource.src = project.demo;
    video.replaceChild(videoSource, videoSource);
    video.play();
    // Close overlay when close button is clicked
    closeOverlay.addEventListener("click", function () {
      videoOverlay.style.display = "none";
      video.pause();
      video.currentTime = 0;
    });

    // Close overlay if clicked outside the video
    videoOverlay.addEventListener("click", function (event) {
      if (event.target === videoOverlay) {
        videoOverlay.style.display = "none";
        video.pause();
        video.currentTime = 0;
      }
    });
    videoOverlay.style.display = "flex";
  }
  const projectCard = document.createElement("div");
  projectCard.className = "project-item";
  projectCard.innerHTML = `<div class="project-name">
                        ${project.name}
                    </div>
                    <p>${project.description}</p>
                    <div>

                        <button class="btn"
                            onclick="window.open('${project.github}')">Github</button>
                        <button class="btn demo">Demo</button>
                    </div>`;
  projectCard.querySelector(".demo").addEventListener("click", playDemo);
  return projectCard;
}

/**
 * @param {object} post - The post object containing name, desc, profilePic, timePassed, postContent, and postPic.
 * @returns {HTMLElement} - The created post card element.
 * @description - This function creates a post card element with the given post object.
 */
function createPostCard(post) {
  const postCard = document.createElement("div");
  postCard.className = "post-container";
  postCard.innerHTML = `<div class="profile-info">
                    <img src="${post.profilePic}" alt="Profile Picture">
                    <div>
                        <div class="name">${post.name}</div>
                        <div class="details">${
                          post.desc + " . " + post.timePassed
                        }</div>
                    </div>
                </div>
                <div class="post-content">
                    ${post.postContent}
                </div>
                <div class="media">
                    <img src="${post.postPic}"
                        alt="Tech Image">
                </div>
                <div class="engagement">
                    <button><i class="fas fa-thumbs-up"></i> Like</button>
                    <button><i class="fas fa-comment"></i> Comment</button>
                    <button><i class="fas fa-share"></i> Repost</button>
                </div>`;
  return postCard;
}

// Adding Skills to the Skills Section
(async function () {
  const skillsSection = document.getElementById("skills-container");
  if (!skillsSection) {
    return;
  }

  const skills = await loadJSON("data/skills.json");

  skills.forEach((skill) => {
    const skillCard = createSkillCard(skill);
    skillsSection.appendChild(skillCard);
  });
})();

// Adding Projects to the Projects Section
(async function () {
  const projectsSection = document.getElementById("projects-container");
  if (!projectsSection) {
    return;
  }

  const projects = await loadJSON("data/projects.json");

  projects.forEach((project) => {
    const projectCard = createProjectCard(project);
    projectsSection.appendChild(projectCard);
  });
})();

// Adding Posts to the Posts Section
(async function () {
  const postsSection = document.getElementById("posts-container");
  if (!postsSection) {
    return;
  }

  const posts = await loadJSON("data/posts.json");

  posts.forEach((post) => {
    const postCard = createPostCard(post);
    postsSection.appendChild(postCard);
  });
})();

// Setting Some Contact Information
(async function () {
  const linkedin = document.getElementsByClassName("linkedin");
  const hireMe = document.getElementById("hire-me");
  const mail = document.getElementById("mail");
  const menuListCont = document.getElementById("menu-list");
  const navList = document.createElement("ul");
  const menuList = document.createElement("ul");
  const navbar = document.getElementsByTagName("nav")[0];
  navList.innerHTML = `<li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#posts">Posts</a></li>
                    <li><a href="#contact">Contact</a></li>`;
  menuList.innerHTML = navList.innerHTML;
  menuListCont.appendChild(menuList);
  navbar.appendChild(navList);
  const PersonalInfo = await loadJSON("data/personalInfo.json");

  // Emails
  hireMe.onclick = () =>
    open(
      `${PersonalInfo.email}?subject=Job Inquiry&body=Hi Ghufran,%0AI hope you are fine. I am interested in hiring you for...`
    );
  mail.onclick = () => open(`${PersonalInfo.email}`);
  mail.querySelector("#mail-txt").innerText = PersonalInfo.email.split(":")[1];

  // LinkedIn buttons
  for (let i = 0; i < linkedin.length; i++) {
    console.log(linkedin[i]);
    linkedin[i].onclick = () => open(PersonalInfo.linkedin);
  }
})();
// Menu For small screens
const menu = document.getElementById("menu");
if (menu) {
  menu.addEventListener("click", () => {
    const menuList = document.getElementById("menu-list");
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
