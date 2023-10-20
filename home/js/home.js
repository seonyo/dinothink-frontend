// let id = localStorage.getItem("id");
let id = localStorage.getItem('id');
let userid;
let title;
let category;
let q2;
let PK;

let mainLabel = document.getElementById("main-label");
let ideaTitle = document.getElementById("idea-title");
let ideaCategory = document.getElementById("idea-category");
let ideaQ2 = document.getElementById("q2");


axios.get(`http://localhost:3000/idea/${id}`)
    .then((response) => {
        let size = response.data.results.length;

        console.log(response);
        userid = response.data.result[0].name;
        title = response.data.results[size - 1].title;
        category = response.data.results[size - 1].q1;
        q2 = response.data.results[size - 1].q2;
        PK = response.data.results[size-1].id;

        ideaCategory.style.background = response.data.results[size-1].color;
        mainLabel.innerHTML = userid + "님의 아이디어 발자국";
        ideaTitle.innerHTML = title;
        ideaCategory.innerHTML = category;
        ideaQ2.innerHTML = q2;
        document.querySelector(".idea-header").value = PK;

        let ideasContainer = document.getElementById("ideas");

        if (size > 1) {
            for (let i = size - 2; i >= 0; i--) {
                const idea = response.data.results[i];
                console.log(idea);
                const ideaContainer = document.createElement("div");
                ideaContainer.classList.add("idea-container");
                ideaContainer.setAttribute("value", idea.id);
                ideaContainer.addEventListener("click", function (event) {
                    const value = event.currentTarget.getAttribute("value");
                    console.log(value)
                    window.open(`/idea/?value=${value}`);
                });

                const ideaTitle = document.createElement("div");
                ideaTitle.classList.add("idea-title");
                ideaTitle.innerText = idea.title;

                const ideaCategory = document.createElement("div");
                ideaCategory.classList.add("idea-category");
                ideaCategory.innerText = idea.q1;
                ideaCategory.style.background = idea.color;
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
    console.log(value)
    window.open(`/idea/?value=${value}`, '_top')
});



