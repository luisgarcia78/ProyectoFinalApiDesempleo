document.addEventListener('DOMContentLoaded', function () {
    twemoji.parse(document.body, {
        folder: 'svg',
        ext: '.svg',
    });

    // Definir emojis para cada opción
    document.getElementById('emojiB').innerHTML = twemoji.parse('😊');
    document.getElementById('emojiR').innerHTML = twemoji.parse('😐');
    document.getElementById('emojiM').innerHTML = twemoji.parse('☹');
});