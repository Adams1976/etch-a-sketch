let block = document.querySelector('.block')
let div = document.createElement('div')
let clear = document.getElementById('btn-clear')
div.classList.add('blocki')

for (let i = 0; i < 256; i++) { 
    let div = document.createElement('div');
    div.classList.add('blocki'); 
    div.addEventListener('mouseover', function changeColor() { 
        // Генерация случайного цвета
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        div.style.backgroundColor = randomColor; 
    });
    block.appendChild(div); 
}

clear.addEventListener('click', () => {
    const blocks = block.querySelectorAll('.blocki'); 
    blocks.forEach(div => {
        div.style.backgroundColor = ''; 
    });
});

