let id = new URL(location.href).searchParams.get('value');
const ideaTitle = document.getElementsByClassName('idea-title')[0];
const pContentList = document.getElementsByClassName('p-content');

axios.get(`http://192.168.11.206:3000/idea/2`)
    .then((response) => {
        let data = response.data.idea[0];
        console.log(data);
        ideaTitle.innerHTML = data.title;
        pContentList[0] = data.q2;
        pContentList[1] = data.q3;
        pContentList[2] = data.q4;
        pContentList[3] = data.q5;
        pContentList[4] = data.q6;
    })
    .catch((error) => {
        console.error(error);
    });

