const idField = document.getElementById('userid');
const pwFeild = document.getElementById('userpw');
const submitButton = document.getElementById('submit');

submitButton.onclick = () => {
    let id = idField.value;
    let pw = pwFeild.value;

    let userData = {
        userid : id,
        userpw : pw
    }

    axios.post('http://localhost:3000/login', userData)
    .then((response) => {
        console.log(response);
        window.open('/home/?userid=' + id, '_top');
    }).catch((err) => {
        console.log(err);
        if(err.response.status == 404){
            idField.style.borderColor = 'red';
            pwFeild.style.borderColor = 'red';
        }
    });
};