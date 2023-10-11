// Autor Ronaldo Cerenza

// criando as variaveis
const container = document.querySelector('.container');
const sizeEl = document.querySelector('.size');
const size = sizeEl.value;
const color = document.querySelector('.color');
const clearBtn = document.querySelector('.btn');
const eraserBtn = document.querySelector('.btn-eraser');

// draw é uma variavel que irá receber um valor booleano, para saber se o mouse está pressionado ou não
let draw = false;

// criando a função populate que irá criar as divs
function populate(size) {
    container.style.setProperty('--size', size);
    // nesta linha acima estamos dizendo que o grid terá o tamanho de acordo com o parametro size
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');

        div.addEventListener('mouseover', () => {
          if (!draw) return
          div.style.backgroundColor = color.value;
        });
        
        div.addEventListener('mousedown', () => {
          div.style.backgroundColor = color.value;
        });

        container.appendChild(div);
    }
}

// Evento que verifica se o mouse está pressionado ou não
window.addEventListener('mousedown', () => {
    draw = true;
});
window.addEventListener('mouseup', () => {
    draw = false;
});

// Evento que limpa o grid
clearBtn.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = '#3d3d3d';
    });
});

// Evento que altera o tamanho do grid
sizeEl.addEventListener('change', () => {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach(pixel => {
      pixel.remove();
  });
  populate(sizeEl.value);
});

// evendo eraser que apaga o pixel
eraserBtn.addEventListener('click', () => {
  color.value = '#3d3d3d';
});

// chamando a função populate
populate(size);