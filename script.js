document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const messageElement = document.getElementById('subscribe-message');

    if (email) {
        messageElement.textContent = "Thank you for subscribing!";
    } else {
        messageElement.textContent = "Please enter a valid email.";
    }
});
