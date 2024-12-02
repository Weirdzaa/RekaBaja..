const menuIcon = document.querySelector("#menu-icon");
const navList = document.querySelector(".navlist");

menuIcon.addEventListener("click", () => {
    navList.classList.toggle("open");
});

document.querySelectorAll(".navlist a").forEach(link => {
    link.addEventListener("click", () => {
        navList.classList.remove("open");
    });
});