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
                { x: 3, y: 0, letra: ''
