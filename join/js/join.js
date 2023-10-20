const nameField = document.getElementById('name');
const idField = document.getElementById('userid');
const pwField = document.getElementById('userpw');
const checkField = document.getElementById('pwcheck');
const submitButton = document.getElementById('submit');

submitButton.onclick = () => {
    let name = nameField.value;
    let id = idField.value;
    let pw = pwField.value;
    
    let userData = {
        name: name,
        userid: id,
        userpw: pw
    }
    axios.post('http://192.168.11.206:3000/user', userData)
    .then(response => {
        console.log('Registration successful:', response.data);
    })
    .catch(error => {
        console.error('Registration failed:', error);
    });
};