document.getElementById('loginButton').addEventListener('click', function() {
    const userName = prompt("Introduce yourself:", '');

    if (userName === 'Admin') {
        let userPass = prompt('Password:', '');

        if (userPass === 'Boss') {
            alert('Hello!');
        } else if (userPass === '' || userPass === null) {
            alert('Aborted');
        } else {
            alert('Invalid password');
        }
    } else if (userName === '' || userName === null) {
        alert('Aborted');
    } else {
        alert("Sorry! I don't know you.");
    }
});

// Explanation:

// If the visitor enters “Admin”, prompt asks for a password, 
// if nothing is entered or the Esc key is pressed - show “Aborted”, 
// otherwise display “Sorry! I don't know you.”.


// Password verification:

// If the password “Boss” is entered, then output “Hello!”,
// Otherwise - “Invalid password”,
// If canceled or if nothing is entered - “Aborted”.