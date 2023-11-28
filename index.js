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
    box.style.padding = '10px';
    box.style.margin = '20px';
    box.style.color = '#00FF19';
    box.style.textAlign = 'center';
    box.style.fontFamily = 'Courier New, Courier, serif';
    box.style.position = 'fixed';
    box.style.top = '50%';
    box.style.left = '50%';
    box.style.transform = 'translate(-50%, -50%)';
    box.innerHTML = 'Access Granted';

    document.body.appendChild(box);
}