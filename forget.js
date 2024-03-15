document.addEventListener('DOMContentLoaded', function() {
    var emailInput = document.querySelector('.email input');
    var resetButton = document.querySelector('.reset button');

    resetButton.addEventListener('click', function(event) {
        event.preventDefault();
        var email = emailInput.value;

        if (validateEmail(email)) {
            alert('Password reset link sent to ' + email);
            // You can add code here to send a password reset link
        } else {
            alert('Please enter a valid email address.');
        }
    });

    function validateEmail(email) {
        // This is a simple email validation regex
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});
