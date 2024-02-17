//DOM Variables
var selectedSelfCare = document.querySelector('input[type="radio"]')
var message = document.querySelector("p")
var image = document.querySelector('img')
var receiveMessageButton = document.querySelector(".receive-message")
var removeMessageButton
var createMessageButton
var submitButton
var cancelButton
var messageResponseView = document.querySelector(".message-response") 
var createMessageForm 

//Query Selectors
receiveMessageButton.addEventListener('click', getRandomMessage);

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

}


//Functions 

function getRandomMessage(){
        var randomMessage = "";
    if(selectedSelfCare){
        switch (selectedSelfCare.value) {
            case 'affirmation':
                randomMessage = getRandomAffirmation();
                break;
            case 'mantra':
                randomMessage = getRandomMantra();
                break;
        }
        message.innerText = `${randomMessage}`
        showMessage()
    }
}