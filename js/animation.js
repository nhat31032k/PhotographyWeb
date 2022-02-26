const showVideo = document.querySelector(".fa-play");
showVideo.addEventListener("click", openVideo);

function openVideo(e) {
    console.log(e.target);
    const template = `
    <div class = "responsive-video" >
        <div class = "lightbox-content" >
            <iframe width = "700"
                height = "400"
                src = "https://www.youtube.com/embed/mvrW4aKwAXw"
                title = "YouTube video player"
                frameborder = "0"
                allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen >
            </iframe>
        </div>
    </div>`
    document.body.insertAdjacentHTML("beforeend", template);
}
document.addEventListener("click", function (e) {
    console.log(e.target);
    if (e.target.matches(".responsive-video")) {
        // e.target.parentNode.parentNode.removeChild(e.target);
        e.target.remove();
    }
});
var lightbox = new SimpleLightbox('.gallery a', {
    /* options */
});