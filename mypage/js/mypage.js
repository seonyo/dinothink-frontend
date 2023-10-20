// let id = localStorage.getItem("id");
let id = 3;
let userid;
let username = document.getElementById("name");

axios.get(`http://192.168.11.206:3000/idea/${id}`)
    .then((response) => {
        console.log(response);
        userid = response.data.result[0].name;
       
        username.innerHTML = userid;

    })
    .catch((error) => {
        console.error(error);
    });