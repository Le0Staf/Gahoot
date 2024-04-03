const username = document.getElementById("name-input");
const server = "http://192.168.38.172:3000";

function joinGame() {
    console.log(username.value);
    if (username.value != "") {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", `${server}/send2` , true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            quizId: "1",
            p1: username.value,
            p1Score: "50"
        }));
    }
}