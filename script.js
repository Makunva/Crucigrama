document.addEventListener('DOMContentLoaded', function() {
    const crucigrama = document.getElementById('crucigrama');
    const pistas = document.getElementById('pistas');
    const nextLevelButton = document.getElementById('nextLevelButton');
    const pistaButton = document.getElementById('pistaButton');

    // Ejemplo de crucigrama (ajusta según tu diseño)
    let currentLevel = 1;
    const levels = [
        {
            casillas: [
                { x: 0, y: 0, letra: '' },
                { x: 1, y: 0, letra: '' },
                { x: 2, y: 0, letra: '' },
                { x: 3, y: 0, letra: '' },
                { x: 4, y: 0, letra: '' },
                { x: 5, y: 0, letra: '' },
                { x: 6, y: 0, letra: '' },
                { x: 0, y: 1, letra: '' },
                { x: 1, y: 1, letra: '' },
                { x: 2, y: 1, letra: '' },
                { x: 3, y: 1, letra: '' },
                { x: 4, y: 1, letra: '' },
                { x: 5, y: 1, letra: '' },
                { x: 6, y: 1, letra: '' },
                { x: 0, y: 2, letra: '' },
                { x: 1, y: 2, letra: '' },
                { x: 2, y: 2, letra: '' },
                { x: 3, y: 2, letra: '' },
                { x: 4, y: 2, letra: '' },
                { x: 5, y: 2, letra: '' },
                { x: 6, y: 2, letra: '' },
                { x: 0, y: 3, letra: '' },
                { x: 1, y: 3, letra: '' },
                { x: 2, y: 3, letra: '' },
                { x: 3, y: 3, letra: '' },
                { x: 4, y: 3, letra: '' },
                { x: 5, y: 3, letra: '' },
                { x: 6, y: 3, letra: '' },
                { x: 0, y: 4, letra: '' },
                { x: 1, y: 4, letra: '' },
                { x: 2, y: 4, letra: '' },
                { x: 3, y: 4, letra: '' },
                { x: 4, y: 4, letra: '' },
                { x: 5, y: 4, letra: '' },
                { x: 6, y: 4, letra: '' },
                { x: 0, y: 5, letra: '' },
                { x: 1, y: 5, letra: '' },
                { x: 2, y: 5, letra: '' },
                { x: 3, y: 5, letra: '' },
                { x: 4, y: 5, letra: '' },
                { x: 5, y: 5, letra: '' },
                { x: 6, y: 5, letra: '' },
                { x: 0, y: 6, letra: '' },
                { x: 1, y: 6, letra: '' },
                { x: 2, y: 6, letra: '' },
                { x: 3, y: 6, letra: '' },
                { x: 4, y: 6, letra: '' },
                { x: 5, y: 6, letra: '' },
                { x: 6, y: 6, letra: '' }
            ],
            pistas: [
                { numero: 1, pista: 'Paisaje natural (7)' },
                { numero: 2, pista: 'Animal (5)' },
                { numero: 3, pista: 'Lugar de reunión (7)' }
            ],
            soluciones: ['MONTAÑA', 'LEÓN', 'CIUDAD']
        },
        {
            casillas: [
                { x: 0, y: 0, letra: '' },
                { x: 1, y: 0, letra: '' },
                { x: 2, y: 0, letra: '' },
                { x: 3, y: 0, letra: '' },
                { x: 4, y: 0, letra: '' },
                { x: 5, y: 0, letra: '' },
                { x: 6, y: 0, letra: '' },
                { x: 0, y: 1, letra: '' },
                { x: 1, y: 1, letra: '' },
                { x: 2, y: 1, letra: '' },
                { x: 3, y: 1, letra: '' },
                { x: 4, y: 1, letra: '' },
                { x: 5, y: 1, letra: '' },
                { x: 6, y: 1, letra: '' },
                { x: 0, y: 2, letra: '' },
                { x: 1, y: 2, letra: '' },
                { x: 2, y: 2, letra: '' },
                { x: 3, y: 2, letra: '' },
                { x: 4, y: 2, letra: '' },
                { x: 5, y: 2, letra: '' },
                { x: 6, y: 2, letra: '' },
                { x: 0, y: 3, letra: '' },
                { x: 1, y: 3, letra: '' },
                { x: 2, y: 3, letra: '' },
                { x: 3, y: 3, letra: '' },
                { x: 4, y: 3, letra: '' },
                { x: 5, y: 3, letra: '' },
                { x: 6, y: 3, letra: '' },
                { x: 0, y: 4, letra: '' },
                { x: 1, y: 4, letra: '' },
                { x: 2, y: 4, letra: '' },
                { x: 3, y: 4, letra: '' },
                { x: 4, y: 4, letra: '' },
                { x: 5, y: 4, letra: '' },
                { x: 6, y: 4, letra: '' },
                { x: 0, y: 5, letra: '' },
                { x: 1, y: 5, letra: '' },
                { x: 2, y: 5, letra: '' },
                { x: 3, y: 5, letra: '' },
                { x: 4, y: 5, letra: '' },
                { x: 5, y: 5, letra: '' },
                { x: 6, y: 5, letra: '' },
                { x: 0, y: 6, letra: '' },
                { x: 1, y: 6, letra: '' },
                { x: 2, y: 6, letra: '' },
                { x: 3, y: 6, letra: '' },
                { x: 4, y: 6, letra: '' },
                { x: 5, y: 6, letra: '' },
                { x: 6, y: 6, letra: '' }
            ],
            pistas: [
                { numero: 1, pista: 'Animal (5)' },
                { numero: 2, pista: 'Fruta (7)' },
                { numero: 3, pista: 'Lugar de reunión (7)' }
            ],
            soluciones: ['LEÓN', 'MANZANA', 'CIUDAD']
        }
    ];

    let selectedCasilla = null;
    let pistaCount = 0;

    function loadLevel(level) {
        crucigrama.innerHTML = '';
        pistas.innerHTML = '';
        pistaCount = 0;

        levels[level].casillas.forEach(casilla => {
            const div = document.createElement('div');
            div.classList.add('casilla');
            div.dataset.x = casilla.x;
            div.dataset.y = casilla.y;
            div.textContent = casilla.letra;
            div.addEventListener('click', function() {
                selectCasilla(this);
            });
            crucigrama.appendChild(div);
        });

        levels[level].pistas.forEach(pista => {
            const div = document.createElement('div');
            div.classList.add('pista');
            div.textContent = `${pista.numero}. ${pista.pista}`;
            pistas.appendChild(div);
        });
    }

    function selectCasilla(casilla) {
        selectedCasilla = casilla;
        document.querySelectorAll('.casilla').forEach(c => c.classList.remove('selected'));
        casilla.classList.add('selected');
    }

    function updateCasilla(letter) {
        if (selectedCasilla) {
            selectedCasilla.textContent = letter;
            selectedCasilla.classList.remove('selected');
            selectedCasilla = null;
        }
    }

    function checkSolution() {
        const filledCasillas = Array.from(crucigrama.querySelectorAll('.casilla')).map(c => c.textContent).join('');
        const expectedSolution = levels[currentLevel - 1].soluciones[0];
        if (filledCasillas === expectedSolution) {
            alert('¡Felicidades! Has resuelto el crucigrama.');
            return true;
        } else {
            alert('La solución no es correcta. Intenta de nuevo.');
            return false;
        }
    }

    function showPista() {
        if (pistaCount < 2) {
            const pista = levels[currentLevel - 1].pistas[pistaCount];
            alert(`Pista ${pista.numero}: ${pista.pista}`);
            pistaCount++;
        } else {
            alert('Has utilizado todas las pistas disponibles.');
        }
    }

    document.addEventListener('keydown', function(event) {
        if (event.key.length === 1 && event.key.match(/[a-zA-Z]/)) {
            updateCasilla(event.key.toUpperCase());
        }
    });

    nextLevelButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (currentLevel < levels.length) {
            if (checkSolution()) {
                currentLevel++;
                loadLevel(currentLevel - 1);
            }
        } else {
            alert('Has completado todos los niveles!');
        }
    });

    pistaButton.addEventListener('click', showPista);

    loadLevel(currentLevel - 1);
});
