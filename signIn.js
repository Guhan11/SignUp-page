document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var username = document.querySelector('.username input').value;
        var password = document.querySelector('.password input').value;

        if (!username || !password) {
            alert('Please fill in both username and password fields.');
            return;
        }

        // If all checks pass, you can submit the form
        form.submit();
    });
});
