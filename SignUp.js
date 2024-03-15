        function signup(){
            var name = document.getElementById('name').value;
            var phone = document.getElementById('number').value;
            var uname = document.getElementById('username').value;
            var orgpass = document.getElementById('password').value;
            var reorgpass = document.getElementById('repeatpassword').value;
            if(name=='' || phone==''|| uname==''|| orgpass==''|| reorgpass==''){
                alert('please enter all details');
            }
            else if (name == '' || name == null) {
                alert('Please enter your name.');
            }
            else if (phone.length != 10) {
                alert('Please enter a valid phone number.');
            }
            else if (uname == '' || uname == null) {
                alert('Please enter a username.');
            }
            // else if (orgpass.length > 6) {
            //     alert("Please enter a password with at least 6 characters.");
            // }
            else if (reorgpass != orgpass) {
                alert("Passwords do not match. Please enter the same password.");
            }
            else {
                alert("Signup successful!");

                fetch('http://localhost:8080/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    alert(data.message);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            }
          
        }
        