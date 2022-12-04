
// This is an event listener, which listens for the browser's DOMContentLoaded event,
// which signifies that the HTML body is completely loaded and parsed.
// This prevents the issue where a script is run before the body is loaded.
document.addEventListener('DOMContentLoaded', () => {
    function createParagraph() {
        const para = document.createElement('p');
        para.textContent = 'You clicked the button!';
        document.body.appendChild(para);
    }

    const buttons = document.querySelectorAll('button');

    for (const button of buttons) {
        button.addEventListener('click', createParagraph);
    }
});