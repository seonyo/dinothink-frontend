const idField = document.getElementById('userid');
const pwFeild = document.getElementById('userpw');
const submitButton = document.getElementById('submit');

submitButton.onclick = () => {
    let id = idField.value;
    let pw = pwFeild.value;

    axios.get('http://192.168.11.206:3000/user')
    .then((response) => {
        console.log(response);
        let data = response.data;
        data.forEach(element => {
            if (element.userid === id && element.userpw === pw) {
                console.log('로그인 성공');
                const localStorage = this.localStorage;
                localStorage.setItem('id', element.id);
                console.log(localStorage.getItem('id'));
            }
        });
    }).catch((err) => {
        console.log(err);
    });
};