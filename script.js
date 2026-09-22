// ==========================================
// CONTACT FORM VALIDATION
// ==========================================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    // Prevent the form from refreshing the page
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");

    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;


    // ==========================================
    // NAME VALIDATION
    // ==========================================

    if (name === "") {

        nameError.textContent = "Please enter your name.";
        isValid = false;

    } else if (name.length < 3) {

        nameError.textContent = "Name must contain at least 3 characters.";
        isValid = false;
    }


    // ==========================================
    // EMAIL VALIDATION
    // ==========================================

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.textContent = "Please enter your email.";
        isValid = false;

    } else if (!emailPattern.test(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        isValid = false;
    }


    // ==========================================
    // MESSAGE VALIDATION
    // ==========================================

    if (message === "") {

        messageError.textContent =
            "Please enter your message.";

        isValid = false;

    } else if (message.length < 10) {

        messageError.textContent =
            "Message must contain at least 10 characters.";

        isValid = false;
    }


    // ==========================================
    // SUCCESS
    // ==========================================

    if (isValid) {

        successMessage.textContent =
            "Message submitted successfully!";

        // Clear form
        contactForm.reset();
    }

});