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