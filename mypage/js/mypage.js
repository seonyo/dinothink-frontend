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