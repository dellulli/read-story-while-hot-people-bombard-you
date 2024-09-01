document.addEventListener('DOMContentLoaded', () => {
    // Correct answers for each question
    const correctAnswers = ['b', 'c', 'c', 'c', 'b'];

    // Retrieve user answers from localStorage
    const userAnswers = [
        localStorage.getItem('answer1'),
        localStorage.getItem('answer2'),
        localStorage.getItem('answer3'),
        localStorage.getItem('answer4'),
        localStorage.getItem('answer5')
    ];

    // Define questions and their full answers
    const questions = [
        "What are the first words Mary says to her husband?",
        "What is the grocer's name?",
        "What happens at the end of the story?",
        "What does her husband tell her that makes Mary kill him?",
        "What did Mary buy at the grocer's?"
    ];

    const answerTexts = {
        'b': ["Hullo, darling.", "Sam", "The detectives unknowingly eat the murder weapon.", "He is leaving her and wants a divorce.", "A can of peas and some potatoes."],
        'c': ["Hullo, darling.", "Sam", "The detectives unknowingly eat the murder weapon.", "He is leaving her and wants a divorce.", "A can of peas and some potatoes."],
        // Add other options and answers if needed
    };

    // Calculate total score
    let score = 0;

    // Generate results table
    const tableBody = document.querySelector('.results-table tbody');
    
    questions.forEach((question, index) => {
        const userAnswer = userAnswers[index] || 'Not answered';
        const correctAnswer = correctAnswers[index];
        const isCorrect = userAnswer === correctAnswer;
        if (isCorrect) score++;

        const resultRow = document.createElement('tr');
        resultRow.innerHTML = `
            <td>${question}</td>
            <td>${answerTexts[userAnswer][index] || 'Not answered'}</td>
            <td>${answerTexts[correctAnswer][index] || 'Unknown'}</td>
            <td class="${isCorrect ? 'tick' : 'cross'}">${isCorrect ? '✓' : '✗'}</td>
        `;
        tableBody.appendChild(resultRow);
    });

    // Display total score
    document.getElementById('total-mark').textContent = score;
});
