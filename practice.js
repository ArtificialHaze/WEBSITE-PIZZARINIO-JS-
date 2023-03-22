window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const toggleMenu = () => {
  const menuBar = document.querySelector(".menuToggle");
  const nav = document.querySelector(".nav");

  menuBar.classList.toggle("active");
  nav.classList.toggle("active");
};

const menuFilter = document.querySelector(".menu-tabs");
const menuItems = document.querySelectorAll(".item");

menuFilter.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("tab-item") &&
    !e.target.classList.contains("active")
  ) {
    menuFilter.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    const targetAttribute = e.target.getAttribute("data-category");

    menuItems.forEach((item) => {
      if (
        targetAttribute === item.getAttribute("data-category") ||
        targetAttribute === "all"
      ) {
        item.classList.remove("hidden");
        item.classList.add("show");
      } else {
        item.classList.add("hidden");
        item.classList.remove("show");
      }
    });
  }
});

window.addEventListener("load", () => {
  document.querySelector(".page-loader").classList.add("fade-out");

  setTimeout(() => {
    document.querySelector(".page-loader").style.display = "none";
  }, 3000);

  AOS.init({
    delay: 50,
    duration: 600,
  });
});
