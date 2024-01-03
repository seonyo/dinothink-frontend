const addIdeaContainer = document.getElementsByClassName('add-idea-container')[0];
const main = document.getElementById('main');
const ideaContainer = document.getElementsByClassName('idea-container');

addIdeaContainer.onclick = () => {
    window.open('/sketch', '_top');
};

let id = localStorage.getItem('id');


axios.get(`http://localhost:3000/idea/view/${id}`)
    .then((response) => {
        let data = response.data.results;
        console.log(data);
        data.forEach(element => {
            main.innerHTML += `
            <div class="idea-container" onclick="window.open('/idea/?value=${element.id}', '_top')">
                <div class="idea-title">${element.title}</div>
                <div class="idea-progress">
                    <img src="../images/progress${element.checking}.svg" alt="">
                </div>
            </div>
            `;
        });
        

    })
    .catch((error) => {
        console.error(error);
    });