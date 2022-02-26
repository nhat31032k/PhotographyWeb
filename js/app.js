window.addEventListener('load', function () {
    const showNav = document.querySelector(".navBtn");
    const topNav = document.querySelector(".top-nav");
    showNav.addEventListener("click", function (e) {
        if (topNav.classList.contains("showNav")) {
            topNav.classList.toggle("showNav");
            showNav.innerHTML = `<i class = "fa-solid fa-bars"></i>`;
        } else {
            topNav.classList.add("showNav");
            showNav.innerHTML = `<i class ="fa-solid fa-times"></i>`;
        }
        // console.log(e.target);
        // topNav.classList.add("showNav");
        // e.target.classList.toggle("fa-bars");

    });
});
// close video