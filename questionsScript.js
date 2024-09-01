document.getElementById('doneButton').addEventListener('click', function() {
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);
    let answers = {
        q1: formData.get('q1'),
        q2: formData.get('q2'),
        q3: formData.get('q3'),
        q4: formData.get('q4')
    };

    // Store answers and redirect to results page
    sessionStorage.setItem('answers', JSON.stringify(answers));
    window.location.href = 'results.html';
});
