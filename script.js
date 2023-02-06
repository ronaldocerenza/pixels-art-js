// a partir do requisito 3 será no JS
// 3 - Adicione a cor preta como a primeira cor da paleta de cores

const paletas = document.querySelectorAll('#color-palette .color');

//coloquei as cores manualmente pra passar no requisito 2

paletas[0].style.backgroundColor = 'black';
paletas[1].style.backgroundColor = 'red';
paletas[2].style.backgroundColor = 'blue';
paletas[3].style.backgroundColor = 'green';

//Função que gera as cores

function generateColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// 4 - Adicione um botão para gerar cores aleatórias para a paleta de cores

button = document.querySelector('#button-random-color');

button.addEventListener('click', () => {
  for (let index = 1; index < paletas.length; index += 1) {
    paletas[0].style.backgroundColor = 'black'
    paletas[index].style.backgroundColor = generateColor();
  }
});

// 5 - Implemente uma função usando localStorage para que a paleta de cores gerada aleatoriamente seja mantida após recarregar a página


