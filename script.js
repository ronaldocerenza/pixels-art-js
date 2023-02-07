// a partir do requisito 3 será no JS
// 3 - Adicione a cor preta como a primeira cor da paleta de cores

const paletas = document.querySelectorAll('#color-palette .color');

//coloquei as cores manualmente pra passar no requisito 2
let colors = ['black', 'red', 'blue', 'green'];

for (let index = 0; index < paletas.length; index += 1) {
    paletas[index].style.backgroundColor = colors[index];
}

//Função que gera as cores aleatorias

function generateColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// 4 - Adicione um botão para gerar cores aleatórias para a paleta de cores

const button = document.querySelector('#button-random-color');

//ao clicar no botão as cores serão aleatorias

const clickButton = () => {
  for (let index = 1; index < paletas.length; index += 1) {
    paletas[index].style.backgroundColor = generateColor();
  }
  saveStorage() //salva as informações no localStorage
}

button.addEventListener('click', clickButton);

// 5 - Implemente uma função usando localStorage para que a paleta de cores gerada aleatoriamente seja mantida após recarregar a página

const saveStorage = () => {
  const colorPalette = {
    0: paletas[0].style.backgroundColor,
    1: paletas[1].style.backgroundColor,
    2: paletas[2].style.backgroundColor,
    3: paletas[3].style.backgroundColor,
  };
  localStorage.setItem('colorPalette', JSON.stringify(colorPalette));
};



