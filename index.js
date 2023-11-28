var password = "JlqJLsVkMAjNEaIRVd";

function passcheck() {
    var inputPassword = document.getElementById('pass1').value;

    if (inputPassword != password) {
        alert('Wrong Password');
        return false;
    }

    if (inputPassword == password) {
        replacePasswordFormWithBox();
        setTimeout(function () {
            window.location.href = "webpage.html"; // Redirect after a delay
        }, 2000); // Adjust the delay time as needed
        return false; // Prevent form submission
    }
}

function replacePasswordFormWithBox() {
    var passwordForm = document.querySelector('.passform');
    passwordForm.style.display = 'none';

    var box = document.createElement('div');
    box.className = 'access-granted';
    box.style.border = '2px solid #00FF19';
    box.style.margin = '20px';
    box.style.padding = '30px 30px';
    box.style.color = '#00FF19';
    box.style.textAlign = 'center';
    box.style.fontFamily = 'Courier New, Courier, serif';
    box.style.position = 'absolute';
    box.style.top = '45%';
    box.style.left = '50%';
    box.style.transform = 'translate(-50%, -50%)';
    box.innerHTML = 'Access Granted';
    box.style.zIndex = '30';
    box.style.background = 'none';
    box.style.fontSize = '25px';

    document.body.appendChild(box);

    // Delay the appearance of the "Access Granted" box
    setTimeout(function () {
        box.style.opacity = 1;
    }, 100); // Adjust the delay time as needed

    // Add fade-out effect after 2 seconds
    setTimeout(function () {
        box.style.transition = 'opacity 1s ease-in-out';
        box.style.opacity = 0;
    }, 3000); // Adjust the delay time for fade-out as needed

    // Remove the box from the DOM after the fade-out effect completes
    setTimeout(function () {
        document.body.removeChild(box);
    }, 3000); // Adjust the delay time to match the total duration of the fade-in and fade-out effects
}