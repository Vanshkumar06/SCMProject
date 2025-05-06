const resultField = document.getElementById('result');
const historyList = document.getElementById('historyList');

function appendToResult(value) {
    resultField.value += value;
}

// jhg
function clearResult() {
    resultField.value = '';
}

function calculateResult() {
    try {
        const result = eval(resultField.value);
        historyList.innerHTML += `<li>${resultField.value} = ${result}</li>`;
        resultField.value = result;
    } catch (error) {
        alert('Invalid calculation');
    }
}

document.getElementById('voiceBtn').addEventListener('click', function() {
    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

        recognition.onstart = function() {
            console.log('Voice recognition started. Try speaking into the microphone.');
        };

        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            console.log('Transcript: ', transcript);
            appendToResult(transcript);
            calculateResult();
        };

        recognition.onerror = function(event) {
            console.error('Error occurred in recognition: ' + event.error);
        };

        recognition.start();
    } else {
        alert('Sorry, your browser does not support speech recognition.');
    }
});
