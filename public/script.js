const quizContainer = document.getElementById("main");
const server = "http://10.155.16.253:3000";

latestArrayLength = 0;

function getText() {
    xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", `${server}/text`, true);
    
    xmlhttp.onload = () => {
        array = JSON.parse(xmlhttp.responseText);
        if (array.length > latestArrayLength){
            for (i = latestArrayLength; i < array.length; i++) {
                quizContainer.innerHTML += 
                `
                <div class="quiz">
                    <div class="quiz-color"></div>
                    <a href="#" class="quiz-name">${array[i][0]}</a>
                </div>
                `; 
            }
            latestArrayLength = array.length;
        } 
    }
    xmlhttp.send();
}

const interval = setInterval(function() {
    console.log("Fortnite");
    getText();
}, 1000);