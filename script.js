const menu = document.querySelector(".menu_body");
const menuBtn = document.querySelector(".menu_icon");
const body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
    body.classList.toggle("lock");
  });
  menu.querySelectorAll(".menu_link").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      menuBtn.classList.remove("active");
      body.classList.remove("lock");
    });
  });
}

// =======================================================

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach((anchors) => {
  anchors.addEventListener("click", (event) => {
    event.preventDefault();

    const blockID = anchors.getAttribute("href").substring(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
