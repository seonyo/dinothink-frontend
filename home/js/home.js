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
        let size = response.data.results.length;

        userid = response.data.result[0].name;
        title = response.data.results[size - 1].title;
        category = response.data.results[size - 1].q1;
        q2 = response.data.results[size - 1].q2;
        PK = response.data.results[size - 1].id;

        mainLabel.innerHTML = userid + "님의 아이디어 발자국";
        ideaTitle.innerHTML = title;
        ideaCategory.innerHTML = category;
        ideaQ2.innerHTML = q2;
        document.querySelector(".idea-header").value = PK;

        let ideasContainer = document.getElementById("ideas");

        if (size > 1) {
            for (let i = size - 1; i >= 0; i--) {
                const idea = response.data.results[i];
                const ideaContainer = document.createElement("div");
                ideaContainer.classList.add("idea-container");

                const ideaTitle = document.createElement("div");
                ideaTitle.classList.add("idea-title");
                ideaTitle.innerText = idea.title;

                const ideaCategory = document.createElement("div");
                ideaCategory.classList.add("idea-category");
                ideaCategory.innerText = idea.q1;

                ideaContainer.appendChild(ideaTitle);
                ideaContainer.appendChild(ideaCategory);

                ideasContainer.appendChild(ideaContainer);
            }
        }

    })
    .catch((error) => {
        console.error(error);
    });

document.querySelector(".idea-header").addEventListener("click", function (event) {
    const value = event.currentTarget.value;

});

