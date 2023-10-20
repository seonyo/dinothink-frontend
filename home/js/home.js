// let id = localStorage.getItem("id");
let id = 3;
let userid;
let title;
let category;
let q2;
let PK;

let mainLabel = document.getElementById("main-label");
let ideaTitle = document.getElementById("idea-title");
let ideaCategory = document.getElementById("idea-category");
let ideaQ2 = document.getElementById("q2");

axios.get(`http://192.168.11.206:3000/idea/${id}`)
    .then((response) => {
        console.log(response);
        userid = response.data.result[0].name;
        title = response.data.results[0].title;
        category = response.data.results[0].q1;
        q2 = response.data.results[0].q2;
        PK = response.data.results[0].id;

        mainLabel.innerHTML = userid + "님의 아이디어 발자국";
        ideaTitle.innerHTML = title;
        ideaCategory.innerHTML = category;
        ideaQ2.innerHTML = q2;
        document.querySelector(".idea-header").value = PK;

    })
    .catch((error) => {
        console.error(error);
    });

document.querySelector(".idea-header").addEventListener("click", function (event) {
    const value = event.currentTarget.value;

    
});