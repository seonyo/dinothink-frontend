const loginButton = document.getElementById('login');
const joinButton = document.getElementById('join');

loginButton.onclick = () => {
    window.open('/login', '_top');
};

joinButton.onclick = () => {
    window.open('/join', '_top');
};