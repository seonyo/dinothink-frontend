let id = localStorage.getItem("id");
let userid;
let username = document.getElementById("name");

axios.get(`http://localhost:3000/idea/${id}`)
    .then((response) => {
        console.log(response);
        userid = response.data.result[0].name;
       
        username.innerHTML = userid;

    })
    .catch((error) => {
        console.error(error);
    });


    axios.get(`http://localhost:3000/auth/check-login`)
    .then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    });