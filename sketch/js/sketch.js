const questions = [
    '어떤 종류의 아이디어인가요?',
    '어떤 아이디어인지 간단히 말해주세요!',
    '이 앱을 만들게 된 계기는 무엇인가요?',
    '아이디어에 대해 더 상세하게 설명해주세요!',
    '이 아이디어가 실현된다면 어떤 효과가 있을까요?',
    '예상되는 문제점이 있나요?',
    '아이디어의 타이틀을 알려주세요!',
    '아이디어의 컬러를 설정해 주세요!'
];
const chatDiv = document.getElementsByClassName('chat')[0];
const sendButton = document.getElementsByClassName('icon-container')[0];
const chatField = document.getElementById('chattext');
const myChatDiv = document.querySelector('.message-container.my-message');
const myMessageBox = myChatDiv.getElementsByClassName('message-box')[0];

const thinkMessageDiv = document.querySelector('.message-container.think');
const thinkChat = thinkMessageDiv.getElementsByClassName('message-box')[0];

const chatFieldBox = document.getElementsByClassName('chat-field')[0]

const colors = [...document.getElementsByClassName('color')];

let index = 1;

let ideaList = [];
ideaList.push(window.localStorage.getItem('id'));

sendButton.onclick = () => {
    let chat = chatField.value;
    myMessageBox.innerHTML = chat;
    myChatDiv.style.display = 'flex';
    chatField.value = '';

    ideaList.push(chat);
    chatFieldBox.style.display = 'none'
    setTimeout(()=>{
        chatDiv.style.display = 'none';
        setTimeout(()=>{
            thinkChat.innerHTML = questions[index++];
            myChatDiv.style.display = 'none';
            chatDiv.style.display = 'flex';
            chatFieldBox.style.display = 'flex';

            if (index === 7) {
                chatFieldBox.style.display = 'none';
                document.getElementsByClassName('color-container')[0].style.display = 'flex';
            } else {
                chatFieldBox.style.display = 'flex';
            }
        }, 800);
    }, 600);

    console.log(index);
};

colors.forEach((element, i) => {

    element.onclick = () => {

        if (i === 0) {
            ideaList.push('#D083EB');
        } else if (i === 1) {
            ideaList.push('#83D8EB');
        } else if (i === 2) {
            ideaList.push('#A4EB83');
        } else if (i === 3) {
            ideaList.push('#FFBA69');
        } else {
            ideaList.push('#FF6969');
        }

        
        chatDiv.style.display = 'none';
        chatFieldBox.style.display = 'none';
        console.log(ideaList);

        postIdea(ideaList);
    };
});

function postIdea(ideaList) {
    let idea = {
        userid: parseInt(ideaList[0]),
        q1: ideaList[1],
        q2: ideaList[2],
        q3: ideaList[3],
        q4: ideaList[4],
        q5: ideaList[5],
        q6: ideaList[6],
        checking: 0,
        memo: "",
        title: "",
        color: ideaList[7]
    };
    axios.post('http://localhost:3000/idea', idea)
    .then(response => {
        console.log('Registration successful:', response.data);
        window.open('/home', '_top');
    })
    .catch(error => {
        console.error('Registration failed:', error);
    });
}