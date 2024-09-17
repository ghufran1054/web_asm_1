class Skill {
  constructor(name, description, icon) {
    this.name = name;
    this.description = description;
    this.icon = icon;
  }
}
class Project {
  constructor(name, description, github, demo) {
    this.name = name;
    this.description = description;
    this.github = github;
    this.demo = demo;
  }
}
class Post {
  constructor(name, desc, profilePic, timePassed, postContent, postPic) {
    this.name = name;
    this.desc = desc;
    this.profilePic = profilePic;
    this.timePassed = timePassed;
    this.postContent = postContent;
    this.postPic = postPic;
  }
}

/**
 * @param {Skill} skill - The skill object containing name, description, and icon.
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
 * @param {Project} project - The project object containing name, description, github, and demo.
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
        videoOverlay.replaceChild;
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
 * @param {Post} post - The post object containing name, desc, profilePic, timePassed, postContent, and postPic.
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
const PersonalInfo = {
  picture: "assets/profile.jpeg",
  github: "https://github.com/ghufran1054",
  linkedin: "https://www.linkedin.com/in/ghufran-nazir-00b66a23b/",
  email: "mailto:ghufran1054@gmail.com",
};

const skills = [
  new Skill(
    "Python",
    "Skilled in Python for scripting, data analysis, and automating tasks, with expertise in data science libraries (Pandas, NumPy) and deep learning frameworks (TensorFlow, PyTorch) for building AI-driven solutions.",
    "assets/python.png"
  ),
  new Skill(
    "HTML, CSS & Javascript",
    "Proficient in creating responsive web pages semantic HTML, modern CSS (Flexbox, Grid), and dynamic JavaScript for seamless, interactive user experiences.",
    "assets/web.png"
  ),
  new Skill(
    "Flutter",
    "Experienced in building cross-platform mobile apps using Flutter, creating responsive, high-performance UIs with Dart, and integrating backend services for seamless functionality across Android and iOS.",
    "assets/flutter.png"
  ),
  new Skill(
    "C / C++",
    "Proficient in C / C++ for developing system software, embedded systems, and high-performance applications, with expertise in data structures, algorithms, and object-oriented programming concepts.",
    "assets/cpp.png"
  ),
  new Skill(
    "MongoDB & SQL",
    "Skilled in MongoDB for NoSQL database management and SQL for relational database management, with expertise in designing schemas, querying data, and optimizing database performance for efficient data storage and retrieval.",
    "assets/db.png"
  ),
];
const projects = [
  new Project(
    "Shogi - (Japanese Chess)",
    "A two-player strategy board game developed in C++, implementing the rules and gameplay of Shogi (Japanese Chess) with an interactive GUI for a seamless gaming experience.",
    "https://github.com/ghufran1054/Shogi-Japanese-Chess",
    "assets/chess_demo.mp4"
  ),
  new Project(
    "Eatopia",
    "A food ordering and delivery app developed in Flutter, providing users with a platform to explore nearby restaurants, view menus, place orders, and track deliveries in real-time.",
    "https://github.com/ghufran1054/Eatopia",
    "assets/chess_demo.mp4"
  ),
  new Project(
    "WhatsApp Clone",
    "Clone for whatsapp messanger application developed using Flutter. NodeJS used for backend and MongoDB to store user messages and Information",
    "https://github.com/ghufran1054/whatsapp_clone",
    "assets/chess_demo.mp4"
  ),
];

const posts = [
  new Post(
    "Ghufran Nazir",
    "Undergraduate Student @ ITU",
    "assets/profile.jpeg",
    "1d",
    "I am Excited to announce that I'm staring a new position as a Software Engineer at Google. I am looking forward to working with the team and contributing to the projects.",
    "https://media.licdn.com/dms/image/v2/D5612AQEA3uvBa4Tfcg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1665182128980?e=2147483647&v=beta&t=QuO9TVrVkw5SXekoLU37iCGzZVU1Oqz5--vJg7vP8Mo"
  ),
  new Post(
    "Ghufran Nazir",
    "Undergraduate Student @ ITU",
    "assets/profile.jpeg",
    "5w",
    "🎉 Exciting Announcement! 🎉 I am thrilled to share the fantastic news of our recent triumph at the PUCon '24 Speed Programming competition, held at the Old Campus of PU ... Read More.",
    "https://media.licdn.com/dms/image/v2/D4D22AQFblDkJNjN0jQ/feedshare-shrink_800/feedshare-shrink_800/0/1686076140022?e=1729728000&v=beta&t=cm5myOlgNu_qOzL3YQ4lTBBPaR6b6IAiWCNOeC8D3gg"
  ),
  new Post(
    "Ghufran Nazir",
    "Undergraduate Student @ ITU",
    "assets/profile.jpeg",
    "1m",
    "I am Excited to announce that this post is just a dummy post to fill the space. I don't actually have any useful content so I just stole it from somewhere else so that it looks techy.",
    "https://media.licdn.com/dms/image/v2/D5622AQGMMCbpCOlHlQ/feedshare-shrink_800/feedshare-shrink_800/0/1726389386004?e=1729728000&v=beta&t=dorOnp5j3V9LyjI_47hcwBud0Pe1k3dY8Np3ENOOCYw"
  ),
];

// Adding Skills to the Skills Section
(function () {
  const skillsSection = document.getElementById("skills-container");
  if (skillsSection) {
    skills.forEach((skill) => {
      const skillCard = createSkillCard(skill);
      skillsSection.appendChild(skillCard);
    });
  }
})();

// Adding Projects to the Projects Section
(function () {
  const projectsSection = document.getElementById("projects-container");
  if (projectsSection) {
    projects.forEach((project) => {
      const projectCard = createProjectCard(project);
      projectsSection.appendChild(projectCard);
    });
  }
})();

// Adding Posts to the Posts Section
(function () {
  const postsSection = document.getElementById("posts-container");
  if (postsSection) {
    posts.forEach((post) => {
      const postCard = createPostCard(post);
      postsSection.appendChild(postCard);
    });
  }
})();

// Setting Some Contact Information
(function () {
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
