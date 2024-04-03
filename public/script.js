const quizContainer = document.getElementById("main");
const server = "http://192.168.38.172:3000";

latestArrayLength = 0;

getText();

function getText() {
    xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", `${server}/text`, true);
    
    xmlhttp.onload = () => {
        array = JSON.parse(xmlhttp.responseText);
        if (array.length > latestArrayLength){
            for (i = latestArrayLength; i < array.length; i++) {
                quizContainer.innerHTML += 
                `

                <a onclick="StartGame()" href="game.html" class="quiz">
                    <p href="#" class="quiz-name">${array[i][0]}</p>
                </a>
                `; 
            }
            latestArrayLength = array.length;
        } 
    }
    xmlhttp.send();
}

function StartGame() {
    fetch('/start_game')
            .then(response => response.text())
            .then(data => {
                console.log(data);
            })
            .catch(error => console.error('Error:', error));
}

const interval = setInterval(function() {
    getText();
}, 1000);