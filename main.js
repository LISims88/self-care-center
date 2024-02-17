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
//cancelButton.addEventListener("click", hideForm)
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
function showForm(){
messageSelectorView.classList.add('hidden');
createMessageView.classList.remove('hidden')
}
// function hideForm(){
 
// }

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
            console.log(randomMessage)
            console.log(selectedSelfCare)
            message.innerText = randomMessage;
            showMessage();
                
    
    }
}
