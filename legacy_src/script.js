// Data for Projects
const projectsData = [
  {
    title: "Smart Building Energy Monitor",
    description: "ระบบแสดงผล วิเคราะห์ และควบคุมพลังงานในอาคารอัจฉริยะ ด้วย IoT และ AI",
    image: "image/imageWebApp.png",
    tags: ["React.js", "Node.js", "NoSQL", "Recharts", "AI"],
    links: {
      github: "https://github.com/Toppuwittaya/Fontend-energy",
      details: true 
    }
  },
  {
    title: "Portfolio Website",
    description: "เว็บแสดงผลงานพอร์ตโฟลิโอแบบ responsive ที่ออกแบบเอง",
    image: "image/portfolio.png",
    tags: ["HTML", "CSS", "JavaScript", "AOS"],
    links: {
      github: "https://github.com/phraewchuthamat",
    }
  },
  {
    title: "Minimal-Landding-Page",
    description: "ฝึกวางโครงสร้างเว็บ และฝึกตัดเว็บจาก Figma",
    image: "image/minimal-landingpage.png",
    tags: ["HTML", "CSS", "Figma"],
    links: {
      github: "https://github.com/phraewchuthamat/Minimal-LanddingPage",
    }
  },
  {
    title: "Ladding-Page",
    description: "ฝึกเขียน Ladding-Page",
    image: "image/image.png",
    tags: ["HTML", "CSS", "Figma"],
    links: {
      github: "https://github.com/phraewchuthamat/test-html",
    }
  }
];

// Data for Skills
const skillsData = [
  { name: "JavaScript", icon: "fab fa-js-square", color:"#f7df1e", exp: "1+ year" },
  { name: "HTML", icon: "fab fa-html5", color: "#e34f26", exp: "1+ year" },
  { name: "CSS", icon: "fab fa-css3-alt", color: "#2965f1", exp: "1+ year" },
  { name: "React", icon: "fab fa-react", color: "#61dafb", exp: "1+ year" },
  { name: "Git", icon: "fab fa-git-alt", color: "#f1502f", exp: "6 months" },
  { name: "GitHub", icon: "fab fa-github", color: "", exp: "6 months" },
  { name: "Postman", image: "https://cdn.worldvectorlogo.com/logos/postman.svg", exp: "6 months" },
  { name: "Figma", icon: "fa-brands fa-figma", color: "#a259ff", exp: "6 months" },
  { name: "MUI", image: "https://raw.githubusercontent.com/mui/material-ui/master/docs/public/static/logo.png", exp: "6 months" }
];

// Function to render Projects
function renderProjects() {
  const container = document.getElementById("project-cards-container");
  if (!container) return;

  container.innerHTML = projectsData.map((project, index) => `
    <div class="project-card" data-aos="zoom-in-up">
      <img src="${project.image}" alt="${project.title}" class="project-image" />
      <div class="project-details">
        <h2 class="project-title">${project.title}</h2>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
        </div>
        <div class="project-links">
          ${project.links.github ? `
            <a href="${project.links.github}" target="_blank" class="btn-link github">
              <i class="fab fa-github"></i> GitHub
            </a>` : ''}
          ${project.links.details ? `
            <a href="#" class="btn-link details" id="openModalBtn">See More</a>` : ''}
        </div>
      </div>
    </div>
  `).join('');


}

// Function to render Skills
function renderSkills() {
  const container = document.getElementById("skills-grid-container");
  if (!container) return;

  container.innerHTML = skillsData.map(skill => `
    <div class="skill-card">
      ${skill.image 
        ? `<img src="${skill.image}" alt="${skill.name}" class="icon-img" />`
        : `<i class="${skill.icon}" ${skill.color ? `style="color: ${skill.color}"` : ''}></i>`
      }
      <h3>${skill.name}</h3>
      <p>${skill.exp}</p>
    </div>
  `).join('');
}

// Modal Logic
function initModal() {
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const modal = document.getElementById("modal");

    if (openModalBtn && modal) {
        openModalBtn.addEventListener("click", (e) => {
            e.preventDefault();
            modal.style.display = "flex";
            document.body.style.overflow = "hidden";
        });
    }

    if (closeModalBtn && modal) {
        closeModalBtn.addEventListener("click", () => {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        });
    }

    if (modal) {
        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
            }
        });
    }
}

// Contact Form Logic
function initContactForm() {
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                e.preventDefault(); 
                alert("⚠️ กรุณากรอกข้อมูลให้ครบก่อนส่ง");
                return;
            }
            // Allow form submission to proceed
            // alert("✅ ส่งข้อความสำเร็จ!"); // Typically handled after submission or by formspree redirect
        });
    }
}

// Navbar Logic
function updateNavbarActiveLink() {
  const sections = document.querySelectorAll("section[id], .content[id]");
  const navLinks = document.querySelectorAll(".navbar__link");

  let currentActive = "home";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (
      window.scrollY >= sectionTop - 100 &&
      window.scrollY < sectionTop + sectionHeight - 100
    ) {
      currentActive = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    // Handle hrefs like #home, #about
    const href = link.getAttribute("href");
    if (href && href.startsWith("#") && href.substring(1) === currentActive) {
      link.classList.add("active");
    }
  });
}

function initNavbarScroll() {
  window.addEventListener("scroll", updateNavbarActiveLink);
  window.addEventListener("load", updateNavbarActiveLink);

  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const top = section.getBoundingClientRect().top;
      if (top < window.innerHeight * 0.6 && top > 0) {
        section.classList.add("active-section");
      } else {
        section.classList.remove("active-section");
      }
    });
  });
}

// Main Init
document.addEventListener('DOMContentLoaded', () => {
    // Initialize components
    renderProjects();
    renderSkills();
    
    // Initialize logic
    initModal(); // Call this again mostly for the close button, open button handled in renderProjects
    initContactForm();
    initNavbarScroll();
    
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init();
    }
});
