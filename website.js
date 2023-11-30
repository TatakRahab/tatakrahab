function toggleMenu() {
    var menu = document.getElementById("menu");
    var greenDivideText = document.getElementById("greenDivideText");

    var menu = document.getElementById("menu");
    var the = document.getElementById("the");

    // Check if the menu is open
    if (!menu.classList.contains("show")) {
        // Menu is not open, toggle the menu and apply styles to THE GREEN DIVIDE
        menu.classList.toggle("show");
        greenDivideText.classList.toggle("blurred-text");

        // Your other code when the menu is opened...

    } else {
        // Menu is open, do not toggle THE GREEN DIVIDE
        // You can add additional logic or actions here if needed
    }
    if (!menu.classList.contains("show")) {
        // Menu is not open, toggle the menu and apply styles to THE GREEN DIVIDE
        menu.classList.toggle("show");
        the.classList.toggle("blurred-text");

        // Your other code when the menu is opened...

    } else {
        // Menu is open, do not toggle THE GREEN DIVIDE
        // You can add additional logic or actions here if needed
    }
}

function closeMenu() {
    var menu = document.getElementById("menu");
    var greenDivideText = document.getElementById("greenDivideText");

    // Fade out side boxes when the menu is closed
    fadeOutBoxes();
    hideScheduleBoxes();
    fadeOutTicketBoxes();
    hideSideBoxes();
    hideExtraBoxes();

    // Remove the "show" class from the menu to hide it
    menu.classList.remove("show");

    // Remove the blurred-text class from THE GREEN DIVIDE
    greenDivideText.classList.remove("blurred-text");
}


function showSideBoxes() {
    // Show the left and right side boxes with fade-in animation
    var leftBox = document.getElementById("leftBox");
    var rightBox = document.getElementById("rightBox");

    leftBox.style.width = "30%";
    leftBox.style.opacity = 1;

    rightBox.style.width = "20%";
    rightBox.style.opacity = 1;

    // Show the additional right side boxes with fade-in animation
    var rightBox1 = document.getElementById("rightBox1");
    var rightBox2 = document.getElementById("rightBox2");

    rightBox1.style.width = "20%";
    rightBox1.style.opacity = 1;

    rightBox2.style.width = "20%";
    rightBox2.style.opacity = 1;



    hideExtraBoxes();
    hideTicketBoxes();
    hideScheduleBoxes()


}

function hideSideBoxes() {
    // Hide the left and right side boxes with fade-out animation
    var leftBox = document.getElementById("leftBox");
    var rightBox = document.getElementById("rightBox");

    leftBox.style.width = "0";
    leftBox.style.opacity = 0;

    rightBox.style.width = "0";
    rightBox.style.opacity = 0;

    // Hide the additional right side boxes with fade-out animation
    var rightBox1 = document.getElementById("rightBox1");
    var rightBox2 = document.getElementById("rightBox2");

    rightBox1.style.width = "0";
    rightBox1.style.opacity = 0;

    rightBox2.style.width = "0";
    rightBox2.style.opacity = 0;




}
function fadeOutBoxes() {
    // Fade out the left, right, trailer, and extra boxes
    var leftBox = document.getElementById("leftBox");
    var rightBox = document.getElementById("rightBox");
    var extraBoxLeft = document.getElementById("extraBoxLeft");
    var extraBoxRight = document.getElementById("extraBoxRight");
    var ticketBoxLeft = document.getElementById("ticketBoxLeft");
    var ticketBoxRight = document.getElementById("ticketBoxRight");

    leftBox.style.width = "0";
    leftBox.style.opacity = 0;

    rightBox.style.width = "0";
    rightBox.style.opacity = 0;

    ticketBoxLeft.style.width = "0";
    ticketBoxLeft.style.opacity = 0;

    ticketBoxRight.style.width = "0";
    ticketBoxRight.style.opacity = 0;



}

function fadeOutSideBoxes() {
    // Fade out the left and right side boxes
    var leftBox = document.getElementById("leftBox");
    var rightBox = document.getElementById("rightBox");

    leftBox.style.opacity = 0;
    rightBox.style.opacity = 0;

    // Fade out the additional right side boxes
    var rightBox1 = document.getElementById("rightBox1");
    var rightBox2 = document.getElementById("rightBox2");

    rightBox1.style.opacity = 0;
    rightBox2.style.opacity = 0;
}



function showExtraBoxes() {
    // Show the extra boxes with fade-in animation
    var extraBoxLeft = document.getElementById("extraBoxLeft");
    var extraBoxRight = document.getElementById("extraBoxRight");

    extraBoxLeft.style.width = "17%";
    extraBoxLeft.style.opacity = 1;

    extraBoxRight.style.width = "20%";
    extraBoxRight.style.opacity = 1;

    fadeOutSideBoxes();
    hideTicketBoxes();
    hideScheduleBoxes();

    // Add an onclick event to the button
    var trailerButton = document.querySelector("#trailerLink");
    trailerButton.parentElement.onclick = function () {
        // Redirect to the specified link when the button is clicked
        window.location.href = "index.html";
    };
}

// Additional function to handle the redirection
function redirectTrailer() {
    window.location.href = "index.html";
}



function hideExtraBoxes() {
    // Hide the extra boxes with fade-out animation
    var extraBoxLeft = document.getElementById("extraBoxLeft");
    var extraBoxRight = document.getElementById("extraBoxRight");

    extraBoxLeft.style.width = "0";
    extraBoxLeft.style.opacity = 0;

    extraBoxRight.style.width = "0";
    extraBoxRight.style.opacity = 0;


}
function showTicketBoxes() {
    // Show the ticket boxes with fade-in animation
    var ticketBoxLeft = document.getElementById("ticketBoxLeft");
    var ticketBoxRight = document.getElementById("ticketBoxRight");

    ticketBoxLeft.style.width = "30%";
    ticketBoxLeft.style.opacity = 1;

    ticketBoxRight.style.width = "30%";
    ticketBoxRight.style.opacity = 1;

    // Hide the left and right side boxes and trailer boxes and extra boxes
    hideSideBoxes();
    hideExtraBoxes();
    hideScheduleBoxes()
}

function hideTicketBoxes() {
    // Hide the ticket boxes with fade-out animation
    var ticketBoxLeft = document.getElementById("ticketBoxLeft");
    var ticketBoxRight = document.getElementById("ticketBoxRight");

    ticketBoxLeft.style.width = "0";
    ticketBoxLeft.style.opacity = 0;

    ticketBoxRight.style.width = "0";
    ticketBoxRight.style.opacity = 0;
}

function fadeOutTicketBoxes() {
    // Fade out the ticket boxes
    var ticketBoxLeft = document.getElementById("ticketBoxLeft");
    var ticketBoxRight = document.getElementById("ticketBoxRight");

    ticketBoxLeft.style.opacity = 0;
    ticketBoxRight.style.opacity = 0;
}

function showScheduleBoxes() {
    // Show the schedule boxes with fade-in animation
    var scheduleBoxLeft = document.getElementById("scheduleBoxLeft");
    var scheduleBoxRight = document.getElementById("scheduleBoxRight");

    scheduleBoxLeft.style.width = "30%";
    scheduleBoxLeft.style.opacity = 1;

    scheduleBoxRight.style.width = "20%";
    scheduleBoxRight.style.opacity = 1;

    // Hide the left and right side boxes, trailer boxes, extra boxes, and ticket boxes
    hideSideBoxes();
    hideExtraBoxes();
    hideTicketBoxes();
}

function hideScheduleBoxes() {
    // Hide the schedule boxes with fade-out animation
    var scheduleBoxLeft = document.getElementById("scheduleBoxLeft");
    var scheduleBoxRight = document.getElementById("scheduleBoxRight");

    scheduleBoxLeft.style.width = "0";
    scheduleBoxLeft.style.opacity = 0;

    scheduleBoxRight.style.width = "0";
    scheduleBoxRight.style.opacity = 0;
}
function handleExtraBoxClick(boxId) {
    switch (boxId) {
        case 'extraBoxLeft':
            // Handle click for extra box left
            // Example: Open a link
            window.location.href = "https://tatakrahab.github.io/tatakrahab/";
            break;
        case 'extraBoxRight':
            // Handle click for extra box right
            // Example: Perform some action
            alert("Clicked on extra box right");
            break;
        // Add more cases for additional boxes if needed
    }
}
document.addEventListener('click', function(event) {
    var menu = document.getElementById('menu');
    var isClickInsideMenu = menu.contains(event.target);

    if (!isClickInsideMenu) {
        // Click is outside the menu, close or hide the boxes
        fadeOutBoxes();
        hideScheduleBoxes();
        fadeOutTicketBoxes();
        hideSideBoxes();
        hideExtraBoxes();
    }
});

// Your existing code...

function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");

    var greenDivideText = document.getElementById("greenDivideText");
    greenDivideText.classList.toggle("blurred-text");

    if (!menu.classList.contains("show")) {
        // Fade out side boxes when the menu is closed
        fadeOutBoxes();
        hideScheduleBoxes();
        fadeOutTicketBoxes();
        hideSideBoxes();
        hideExtraBoxes();
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.menu');
    const titleText = document.querySelector('.title-page h1');

    menu.addEventListener('mouseenter', function () {
        titleText.classList.add('blurred-text');
    });

    menu.addEventListener('mouseleave', function () {
        titleText.classList.remove('blurred-text');
    });
});