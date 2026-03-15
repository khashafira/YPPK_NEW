const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
document.querySelectorAll('.counter').forEach(counter => {
  const target = Number(counter.dataset.target);
  let current = 0;

  const updateCounter = () => {
    const increment = target / 80;
    current += increment;

    if (current < target) {
      counter.innerText = Math.floor(current);
      requestAnimationFrame(updateCounter);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

const programData = {
  teknis: {
    title: "Pelatihan Teknis Kearsipan",
    subtitle: "Program peningkatan kompetensi arsiparis sesuai standar nasional",
    image: "assets/images/P1.png",
    about: "Pelatihan ini dirancang untuk meningkatkan pemahaman...",
    learning: [
      "Manajemen arsip dinamis & statis",
      "Penyusunan klasifikasi arsip",
      "Standar kearsipan nasional",
      "Studi kasus & praktik langsung"
    ],
    priceOld: "2.100.000",
    priceNew: "1.500.000"
  },

  webinar: {
    title: "Webinar Kearsipan",
    subtitle: "Diskusi tematik bersama praktisi",
    image: "assets/images/P5.jpg",
    about: "Webinar interaktif yang membahas isu aktual...",
    learning: [
      "Isu kearsipan terkini",
      "Sharing best practice",
      "Diskusi interaktif"
    ],
    priceOld: "350.000",
    priceNew: "250.000"
  }
};
