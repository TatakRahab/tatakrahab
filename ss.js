function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");

    var greenDivideText = document.getElementById("greenDivideText");
    greenDivideText.classList.toggle("blurred-text");

    if (!menu.classList.contains("show")) {
        // Fade out boxes when the menu is closed
        fadeOutBoxes();
    }
}

function closeMenu() {
    var menu = document.getElementById("menu");
    menu.classList.remove("show");

    var greenDivideText = document.getElementById("greenDivideText");
    greenDivideText.classList.remove("blurred-text");

    // Fade out boxes when the menu is closed
    fadeOutBoxes();
}

function showSideBoxes() {
    // Show the left and right side boxes with fade-in animation
    var leftBox = document.getElementById("leftBox");
    var rightBox = document.getElementById("rightBox");

    leftBox.style.width = "50%";
    leftBox.style.opacity = 1;

    rightBox.style.width = "50%";
    rightBox.style.opacity = 1;

    // Hide the trailer boxes, ticket boxes, and extra boxes
    hideTrailerBoxes();
    hideTicketBoxes();
    hideExtraBoxes();
}

function hideSideBoxes() {
    // Hide the left and right side boxes with fade-out animation
    var leftBox = document.getElementById("leftBox");
    var rightBox = document.getElementById("rightBox");

    leftBox.style.width = "0";
    leftBox.style.opacity = 0;

    rightBox.style.width = "0";
    rightBox.style.opacity = 0;

    // Hide the trailer boxes, ticket boxes, and extra boxes
    hideTrailerBoxes();
    hideTicketBoxes();
    hideExtraBoxes();
}

function fadeOutBoxes() {
    // Fade out the left, right, trailer, ticket, and extra boxes
    var leftBox = document.getElementById("leftBox");
    var rightBox = document.getElementById("rightBox");
    var ticketBoxLeft = document.getElementById("ticketBoxLeft");
    var ticketBoxRight = document.getElementById("ticketBoxRight");
    var extraBoxLeft = document.getElementById("extraBoxLeft");
    var extraBoxRight = document.getElementById("extraBoxRight");

    leftBox.style.width = "0";
    leftBox.style.opacity = 0;

    rightBox.style.width = "0";
    rightBox.style.opacity = 0;

    ticketBoxLeft.style.width = "0";
    ticketBoxLeft.style.opacity = 0;

    ticketBoxRight.style.width = "0";
    ticketBoxRight.style.opacity = 0;

    hideTrailerBoxes();
    hideTicketBoxes();
    hideExtraBoxes();
}

function showTrailerBoxes() {
    // Show the trailer boxes with fade-in animation
    var trailerBox1 = document.getElementById("trailerBox1");
    var trailerBox2 = document.getElementById("trailerBox2");
    var trailerBox3 = document.getElementById("trailerBox3");
    var trailerBox4 = document.getElementById("trailerBox4");

    trailerBox1.style.width = "50%";
    trailerBox1.style.opacity = 1;

    trailerBox2.style.width = "50%";
    trailerBox2.style.opacity = 1;

    trailerBox3.style.width = "50%";
    trailerBox3.style.opacity = 1;

    trailerBox4.style.width = "50%";
    trailerBox4.style.opacity = 1;

    // Hide the left and right side boxes, ticket boxes, and extra boxes
    hideSideBoxes();
    hideTicketBoxes();
    hideExtraBoxes();
}

function hideTrailerBoxes() {
    // Hide the trailer boxes with fade-out animation
    var trailerBox1 = document.getElementById("trailerBox1");
    var trailerBox2 = document.getElementById("trailerBox2");
    var trailerBox3 = document.getElementById("trailerBox3");
    var trailerBox4 = document.getElementById("trailerBox4");

    trailerBox1.style.width = "0";
    trailerBox1.style.opacity = 0;

    trailerBox2.style.width = "0";
    trailerBox2.style.opacity = 0;

    trailerBox3.style.width = "0";
    trailerBox3.style.opacity = 0;

    trailerBox4.style.width = "0";
    trailerBox4.style.opacity = 0;
}

function fadeOutTrailerBoxes() {
    // Fade out the trailer boxes
    var trailerBox1 = document.getElementById("trailerBox1");
    var trailerBox2 = document.getElementById("trailerBox2");
    var trailerBox3 = document.getElementById("trailerBox3");
    var trailerBox4 = document.getElementById("trailerBox4");

    trailerBox1.style.opacity = 0;
    trailerBox2.style.opacity = 0;
    trailerBox3.style.opacity = 0;
    trailerBox4.style.opacity = 0;
}

function showTicketBoxes() {
    // Show the ticket boxes with fade-in animation
    var ticketBoxLeft = document.getElementById("ticketBoxLeft");
    var ticketBoxRight = document.getElementById("ticketBoxRight");

    ticketBoxLeft.style.width = "50%";
    ticketBoxLeft.style.opacity = 1;

    ticketBoxRight.style.width = "50%";
    ticketBoxRight.style.opacity = 1;

    // Hide the left and right side boxes, trailer boxes, and extra boxes
    hideSideBoxes();
    hideTrailerBoxes();
    hideExtraBoxes();
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

function showExtraBoxes() {
    // Show the extra boxes with fade-in animation
    var extraBoxLeft = document.getElementById("extraBoxLeft");
    var extraBoxRight = document.getElementById("extraBoxRight");

    extraBoxLeft.style.width = "25%";
    extraBoxLeft.style.opacity = 1;

    extraBoxRight.style.width = "25%";
    extraBoxRight.style.opacity = 1;
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
</script>