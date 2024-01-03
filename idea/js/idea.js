let id = new URL(location.href).searchParams.get('value');
const ideaTitle = document.getElementsByClassName('idea-title')[0];
const pContentList = document.getElementsByClassName('p-content');
const ideaCategory = document.getElementsByClassName('idea-category')[0];
const prSelect = document.getElementById('progress');

let idea;

axios.get(`http://localhost:3000/idea/${id}`)
    .then((response) => {
        let data = response.data.idea[0];
        idea = data;
        console.log(data);
        ideaTitle.innerHTML = data.title;
        pContentList[0].innerHTML = data.q2;
        pContentList[1].innerHTML = data.q3;
        pContentList[2].innerHTML = data.q4;
        pContentList[3].innerHTML = data.q5;
        pContentList[4].innerHTML = data.q6;

        ideaCategory.style.background = data.color;
        ideaCategory.innerHTML = data.q1
    })
    .catch((error) => {
        console.error(error);
    });

prSelect.onchange = () => {
    idea.checking = parseInt(prSelect.value);
    console.log(idea);
    axios.put(`http://localhost:3000/idea/view/${id}`, idea)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.error(error);
        });
};
