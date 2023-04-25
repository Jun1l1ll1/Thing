
function go_to(n) {
    height = window.innerHeight;
    window.scrollTo({
        top: height*(n-1),
        left: 0,
        behavior: "smooth",
    });
}