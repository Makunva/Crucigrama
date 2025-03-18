document.addEventListener('DOMContentLoaded', function() {
    let startTime = Date.now();
    let interval;

    const answers = [
        ['L', 'E', 'O', 'N'],
        ['I', 'L', 'L'],
        ['B', 'E', 'F'],
        ['R', 'F', 'A'],
        ['A', 'A', 'T'],
             ['N', 'O'],
             ['T'],
             ['E']
    ];

    function startTimer() {
        interval = setInterval(function() {
            const elapsedTime = (Date.now() - startTime) / 1000;
            const minutes = Math.floor(elapsedTime / 60);
            const seconds = Math.floor(elapsedTime % 60);
            document.getElementById('timer').innerText = `Tiempo: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }, 1000);
    }

    function stopTimer() {
        clearInterval(interval);
    }

    function calculateScore() {
        const inputs = document.querySelectorAll('#crossword input');
        let score = 0;
        inputs.forEach((input, index) => {
            const row = Math.floor(index / 3);
            const col = index % 3;
            if (input.value.toUpperCase() === answers[row][col]) {
                score += 10;
            }
        });
        document.getElementById('score').innerText = `Puntuación: ${score}`;
    }

    function checkAndCompleteWords() {
        const inputs = document.querySelectorAll('#crossword input');
        inputs.forEach((input, index) => {
            const row = Math.floor(index / 3);
            const col = index % 3;
            if (input.value.toUpperCase() === answers[row][col]) {
                input.style.backgroundColor = 'lightgreen';
                input.classList.add('correct');
            } else {
                input.style.backgroundColor = 'lightcoral';
                input.classList.add('wrong');
            }
        });

        // Verificar si todas las palabras están completadas correctamente
        const allCorrect = Array.from(inputs).every((input, index) => {
            const row = Math.floor(index / 3);
            const col = index % 3;
            return input.value.toUpperCase() === answers[row][col];
        });

        if (allCorrect) {
            stopTimer();
            calculateScore();
            showNextLevelButton();
        }
    }

    function showNextLevelButton() {
        document.querySelector('.controls').style.display = 'none';
        document.getElementById('crossword').style.display = 'none';
        document.querySelector('.next-level').style.display = 'flex';
    }

    document.getElementById('start').addEventListener('click', function() {
        document.getElementById('start').style.display = 'none';
        document.querySelector('.controls').style.display = 'flex';
        document.getElementById('crossword').style.display = 'table';
        startTimer();
    });

    document.querySelectorAll('#crossword input').forEach(input => {
        input.addEventListener('input', checkAndCompleteWords);
    });

    document.getElementById('submit').addEventListener('click', function() {
        checkAndCompleteWords();
    });

    document.getElementById('next-level').addEventListener('click', function() {
        // Lógica para ir al siguiente nivel
        alert('¡Siguiente Nivel!');
        // Aquí puedes agregar la lógica para cargar el siguiente nivel
    });
});
