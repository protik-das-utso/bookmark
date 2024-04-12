let open_bar_btn = document.querySelector(".open-bar-btn");
let close_bar_btn = document.querySelector(".close-bar-btn");
let mobile_menu = document.querySelector(".mobile-menu");

open_bar_btn.addEventListener("click", open_mobile_bar);
close_bar_btn.addEventListener("click", close_mobile_bar);

function open_mobile_bar() {
    mobile_menu.classList.remove("hidden");
    mobile_menu.classList.add("active");

    open_bar_btn.classList.remove("active");
    open_bar_btn.classList.add("hidden");

    close_bar_btn.classList.remove("hidden");
    close_bar_btn.classList.add("active");
}
function close_mobile_bar() {
    mobile_menu.classList.remove("active");
    mobile_menu.classList.add("hidden");

    open_bar_btn.classList.remove("hidden");
    open_bar_btn.classList.add("active");

    close_bar_btn.classList.remove("active");
    close_bar_btn.classList.add("hidden");
}
