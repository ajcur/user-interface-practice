const btns = document.querySelectorAll(".dropdown-btn");

function toggleDropdown(e) {
    let menu = e.target.parentElement.querySelector(".dropdown-menu");
    let visible = menu.classList.contains("visible");
    visible ? menu.classList.remove("visible") : menu.classList.add("visible");
}

for (let btn of btns) {
    btn.addEventListener("click", toggleDropdown);
}
