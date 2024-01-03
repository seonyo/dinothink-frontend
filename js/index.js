setTimeout(() => {
    window.open('/first', '_top');
}, 1500);

axios.get(`http://localhost:3000/auth/check-login`)
    .then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    });