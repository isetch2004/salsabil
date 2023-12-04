document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // You can add your code here to process the form data (e.g., sending an email or storing it in a database).

        // For demonstration purposes, let's just log the form data to the console.
        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Message: " + message);

        // Optionally, you can display a confirmation message to the user.
        alert("Thank you for contacting us!");
    });
});