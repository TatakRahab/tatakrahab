document.addEventListener("DOMContentLoaded", function () {
    let loadingContainer = document.getElementById("loading-container");
    let videoContainer = document.getElementById("video-container");
    let width = 1;

    let interval = setInterval(function () {
        if (width >= 100) {
            clearInterval(interval);
            // After completion, fade out the loading container
            fadeOutElements([loadingContainer]);

            // Fade in the video and "Encrypting File...." after a delay and start autoplay
            setTimeout(function () {
                fadeInElements([videoContainer]);
                document.getElementById("video_background").play();
            }, 1000); // Adjust the delay as needed
        } else {
            width++;
            document.getElementById("progress-bar").style.width = width + "%";
            document.getElementById("progress-bar").innerHTML = width + "%";
        }
    }, 30); // Adjust the interval duration for smoother animation

    function fadeOutElements(elements) {
        elements.forEach(element => {
            element.style.opacity = 0;
        });
    }

    function fadeInElements(elements) {
        elements.forEach(element => {
            element.style.opacity = 1;
        });
    }
});


