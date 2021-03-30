const btn = document.querySelector("#start-top");
const rocket = document.querySelector("#rocket_body");
const fireLine = document.querySelector("#fire-line");
const bottomSmoke = document.querySelector("#bottom-smoke");
const middleSmoke = document.querySelector("#middle-smoke");
const fire = document.querySelector("#fire");

btn.addEventListener("click", () => {
    if (!btn.classList.contains("start-top_click")) {
        btn.classList.add("start-top_click");
        rocket.classList.add("rocket_animate");
        fireLine.classList.add("fire-line_animate");
        bottomSmoke.classList.add("bottom-smoke_animate");
        middleSmoke.classList.add("middle-smoke_animate");
        fire.classList.add("fire_animate");
    }
});
rocket.addEventListener("animationend", () => {
    fireLine.classList.add("fire-line_destroy");
    bottomSmoke.classList.add("destroy");
    middleSmoke.classList.add("destroy");
});
