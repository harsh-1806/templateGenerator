const btn = document.getElementById('vscode-button');

const div = document.getElementById('vscode-page');

const subBtn = document.getElementById('sublime-button');

const output = document.getElementById('out');

const vsCodeOut =  '"": {<br>"prefix": "",<br>"body": [<br>""<br> ], <br>"description": ""<br>}';

const copyBtn = document.getElementById('copy-button');


// Todo: add snippet for Sublime Text.

btn.addEventListener('click', () => {
    output.innerHTML = vsCodeOut;
    subBtn.style.backgroundColor = '#00000040';
    div.style.backgroundColor = '#006eb4';
    btn.style.backgroundColor = '#006eb4';
})



subBtn.addEventListener('click', () => {
    // output.innerHTML = sublimeOut;
    btn.style.backgroundColor = '#00000040';
    div.style.backgroundColor = '#2b303b';
    subBtn.style.backgroundColor = '#2b303b';
});