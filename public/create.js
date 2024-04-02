const title = document.getElementById("quiz-title");
const question1 = document.getElementById("question1");
const q1a1 = document.getElementById("q1a1");
const q1a2 = document.getElementById("q1a2");
const q1a3 = document.getElementById("q1a3");
const q1a4 = document.getElementById("q1a4");
const server = "http://10.155.16.253:3000";

let rightAnswer1;

function setAnswer1(answer) {
    if (answer == 1) {
        rightAnswer1 = q1a1.value;
        document.getElementById("q1r1").style.backgroundColor = "rgb(132, 255, 132)";
        document.getElementById("q1r2").style.backgroundColor = "rgb(255, 255, 255)";
        document.getElementById("q1r3").style.backgroundColor = "rgb(255, 255, 255)";
        document.getElementById("q1r4").style.backgroundColor = "rgb(255, 255, 255)";
    }
    else if (answer == 2) {
        rightAnswer1 = q1a2.value;
        document.getElementById("q1r1").style.backgroundColor = "rgb(255, 255, 255)";
        document.getElementById("q1r2").style.backgroundColor = "rgb(132, 255, 132)";
        document.getElementById("q1r3").style.backgroundColor = "rgb(255, 255, 255)";
        document.getElementById("q1r4").style.backgroundColor = "rgb(255, 255, 255)";
    }
    else if (answer == 3) {
        rightAnswer1 = q1a3.value;
        document.getElementById("q1r1").style.backgroundColor = "rgb(255, 255, 255)";
        document.getElementById("q1r2").style.backgroundColor = "rgb(255, 255, 255)";
        document.getElementById("q1r3").style.backgroundColor = "rgb(132, 255, 132)";
        document.getElementById("q1r4").style.backgroundColor = "rgb(255, 255, 255)";
    }
    else if (answer == 4) {
        rightAnswer1 = q1a4.value;
        document.getElementById("q1r1").style.backgroundColor = "rgb(255, 255, 255)";
        document.getElementById("q1r2").style.backgroundColor = "rgb(255, 255, 255)";
        document.getElementById("q1r3").style.backgroundColor = "rgb(255, 255, 255)";
        document.getElementById("q1r4").style.backgroundColor = "rgb(132, 255, 132)";
    }
}

function createQuiz() {
    if (title.value != "" && question1.value != "" && rightAnswer1 != null && q1a1.value != "" && q1a2.value != "" && q1a3.value != "" && q1a4.value != "") {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", `${server}/send` , true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            title: title.value,
            question1: question1.value,
            answer1: rightAnswer1,
            q1a1: q1a1.value,
            q1a2: q1a2.value,
            q1a3: q1a3.value,
            q1a4: q1a4.value
        }));
    }
}

