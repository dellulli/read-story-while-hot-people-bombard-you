const correctAnswers = {
    q1: 'Hullo, darling.',
    q2: 'Sam',
    q3: 'The detectives unknowingly eat the murder weapon.',
    q4: 'He is leaving her and wants a divorce.'
};

const userAnswers = JSON.parse(sessionStorage.getItem('answers'));
let score = 0;

function generateResults() {
    const resultsTable = document.getElementById('resultsTable');
    let rows = '';
    for (let [question, correctAnswer] of Object.entries(correctAnswers)) {
        const userAnswer = userAnswers[question] || 'No answer';
        const result = userAnswer === correctAnswer ? '✔️' : '❌';
        if (result === '✔️') score++;
        rows += `<tr>
                    <td>Question ${question.charAt(1)}</td>
                    <td>${userAnswer}</td>
                    <td>${correctAnswer}</td>
                    <td>${result}</td>
                </tr>`;
    }
    resultsTable.innerHTML = rows;
}

document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'index.html';
});

generateResults();
