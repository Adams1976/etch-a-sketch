let block = document.querySelector('.block')
let div = document.createElement('div')
let clear = document.getElementById('btn-clear')
let size = document.getElementById('btn-size')
div.classList.add('blocki')

//Создаем блоки 
for (let i = 0; i < 16 * 16; i++) { 
    let div = document.createElement('div');
    div.classList.add('blocki'); 
    // изменения цвета при наведении
    div.addEventListener('mouseover', function changeColor() { 
        // Генерация случайного цвета
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        div.style.backgroundColor = randomColor; 
    });
    block.appendChild(div); 
}

// изменение размера
size.addEventListener('click', function changeSize() {
    const userSize = parseInt(prompt('Введите размер сетки. Например, 18 для 18x18:'), 10);
    // условия 
    if (isNaN(userSize) || userSize <= 0) {
        alert('Пожалуйста, введите корректное число.');
        return;
    }
    if (userSize > 100) {
        alert('Максимальное число ввода "100".');
        return;
    }

    // Очистка старых блоков
    block.innerHTML = '';

    // Создание новых блоков
    for (let i = 0; i < userSize * userSize; i++) {
        let div = document.createElement('div');

        // стили для блоков
        div.classList.add('blocki');
        div.style.flex = `0 0 calc(100% / ${userSize})`; 
        div.style.height = `calc(100% / ${userSize})`; 

        // изменение цвета при наведении
        div.addEventListener('mouseover', function changeColor() {
            const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            div.style.backgroundColor = randomColor;
        });
        block.appendChild(div);
    }
});

// очистка блоков при клике на кнопку
clear.addEventListener('click', () => {
    const blocks = block.querySelectorAll('.blocki'); 
    blocks.forEach(div => {
        div.style.backgroundColor = ''; 
    });
});

