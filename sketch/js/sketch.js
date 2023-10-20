const questions = [
    '어떤 종류의 아이디어인가요?',
    '어떤 아이디어인지 간단히 말해주세요!',
    '이 앱을 만들게 된 계기는 무엇인가요?',
    '아이디어에 대해 더 상세하게 설명해주세요!',
    '이 아이디어가 실현된다면 어떤 효과가 있을까요?',
    '예상되는 문제점이 있나요?'
];
const chatDiv = document.getElementsByClassName('chat')[0];
const sendButton = document.getElementsByClassName('icon-container')[0];
const chatField = document.getElementById('chattext');
const myChatDiv = document.querySelector('.message-container.my-message');
const myMessageBox = myChatDiv.getElementsByClassName('message-box')[0];

const thinkMessageDiv = document.querySelector('.message-container.think');
const thinkChat = thinkMessageDiv.getElementsByClassName('message-box')[0];

let index = 0;

let ideaList = [];

sendButton.onclick = () => {
    let chat = chatField.value;
    myMessageBox.innerHTML = chat;
    myChatDiv.style.display = 'flex';
    chatField.value = '';

    ideaList.push(chat);

    setTimeout(()=>{
        chatDiv.style.display = 'none';
        setTimeout(()=>{
            thinkChat.innerHTML = questions[++index];
            myChatDiv.style.display = 'none';
            chatDiv.style.display = 'flex';

            if (index === questions.length - 1) {
                
            }
        }, 800);
    }, 1000);
};