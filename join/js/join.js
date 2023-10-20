const nameField = document.getElementById('name');
const idField = document.getElementById('userid');
const pwField = document.getElementById('userpw');
const checkField = document.getElementById('pwcheck');
const submitButton = document.getElementById('submit');
const errorMsg = document.getElementsByClassName('error-msg')[0];

submitButton.onclick = () => {
    let name = nameField.value;
    let id = idField.value;
    let pw = pwField.value;
    let pwcheck = checkField.value;

    if (pw !== pwcheck) {
        checkField.style.borderColor = 'red';
        errorMsg.style.display = 'block';
        return;
    }
    
    let userData = {
        name: name,
        userid: id,
        userpw: pw
    }
    axios.post('http://localhost:3000/user', userData)
    .then(response => {
        console.log('Registration successful:', response.data);
        window.open('/login', '_top');
    })
    .catch(error => {
        console.error('Registration failed:', error);
    });
};