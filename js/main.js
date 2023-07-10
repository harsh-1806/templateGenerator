const btn = document.getElementById('vscode-button');

const div = document.getElementById('vscode-page');

btn.addEventListener('click', () => {
    div.style.backgroundColor = '#006eb4';
    btn.style.backgroundColor = '#006eb4';
})


const text = document.getElementById('snippetInput');

const output = document.getElementById('out');

// text.addEventListener('input', () => {
//     output.innerText = (text.value) => {

//     };
// });