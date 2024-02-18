//DOM Variables
var message = document.querySelector("p")
var image = document.querySelector('img')
var receiveMessageButton = document.querySelector(".receive-message")
var removeMessageButton = document.querySelector(".remove-message")
var createMessageButton = document.querySelector(".create-your-own")
var submitButton = document.querySelector(".submit")
var cancelButton = document.querySelector(".cancel")
var messageResponseView = document.querySelector(".message-response") 
var messageSelectorView = document.querySelector(".message-type-selector")
var createMessageView = document.querySelector(".make-own-message")

//Query Selectors
receiveMessageButton.addEventListener('click', getRandomMessage);
createMessageButton.addEventListener('click', showForm)
cancelButton.addEventListener('click', hideForm)
submitButton.addEventListener('click',createMessage)
removeMessageButton.addEventListener("click", deleteMessage)
//Event Handlers
function getRandomAffirmation(){
    var randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    return randomAffirmation;
}

function getRandomMantra(){
    var randomMantra = mantras[Math.floor(Math.random() * mantras.length)];
    return randomMantra;
}

function showMessage(){
    image.style.display = 'none';
    removeMessageButton.classList.remove('hidden')



}
function showForm(){
messageSelectorView.classList.add('hidden');
createMessageView.classList.remove('hidden')
}
function hideForm(event){
messageSelectorView.classList.remove('hidden');
createMessageView.classList.add('hidden')
event.preventDefault()
}









//Functions 

function getRandomMessage() {
    var selectedSelfCare = document.querySelector('input[name="message-type"]:checked')
    if (selectedSelfCare && selectedSelfCare.value) {
        var randomMessage;
        switch (selectedSelfCare.value) {
            case 'affirmation':
                randomMessage = getRandomAffirmation();
                break;
                case 'mantra':
                    randomMessage = getRandomMantra();
                    break;
        }
        message.innerText = randomMessage;
        showMessage();
    }
}

function createMessage(event){
    var selectedSelfCare = document.querySelector('input[name="message-type"]:checked')
    var userMessage = document.querySelector('input[name="user-message"').value
    if (selectedSelfCare && selectedSelfCare.value && userMessage) {
            switch (selectedSelfCare.value) {
            case 'affirmation':
                affirmations.unshift(userMessage)
                break;
            case 'mantra':
                mantras.unshift(userMessage)
                break;
        }
        message.innerText = userMessage;
        event.preventDefault()
        showMessage()
    }
}
function deleteMessage(event){
    var selectedSelfCare = document.querySelector('input[name="message-type"]:checked')
    if (selectedSelfCare && selectedSelfCare.value) {
        var message;
        switch (selectedSelfCare.value) {
            case 'affirmation':
                message = affirmations.splice(message,1);
                break;
            case 'mantra':
                message = mantras.splice(message,1);
                break;
        }
        event.preventDefault()
        getRandomMessage()
    }
}