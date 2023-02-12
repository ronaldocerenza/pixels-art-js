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
//funcao que salva no localStorage
const saveStorage = () => {
  const colorPalette = {
    0: paletas[0].style.backgroundColor,
    1: paletas[1].style.backgroundColor,
    2: paletas[2].style.backgroundColor,
    3: paletas[3].style.backgroundColor,
  };
  localStorage.setItem('colorPalette', JSON.stringify(colorPalette));
};

//funcao que restaura apartir do load
const restoreStorage = () => {
  const paletas = document.getElementsByClassName('color');
  const restauraColor = JSON.parse(localStorage.getItem('colorPalette'));
  if (restauraColor) {
    for (let index = 1; index < paletas.length; index += 1) {
      paletas[index].style.backgroundColor = restauraColor[index];
    }
  }
};

//div com id 'pixel-board' criada no html devido a erro no cypress

// 6 - Adicione à página um quadro contendo 25 pixels sendo 5x5
const pixels = (col, linha) => {
  const pixelBoard = document.getElementById('pixel-board');
  for (let index1 = 0; index1 < col; index1 += 1) {
    const pixel1 = document.createElement('div');
    pixel1.className = 'flex';
    pixelBoard.appendChild(pixel1);
  for (let index = 0; index < linha; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel1.appendChild(pixel);
  }
}
};
pixels(5, 5);

// 7 - Faça com que cada pixel do quadro tenha largura e altura de 40 pixels e borda preta de 1 pixel de espessura.

const pixelStyle = document.querySelectorAll('.pixel');
for (let index = 0; index < pixelStyle.length; index += 1) {
  pixelStyle[index].style.backgroundColor = 'white';
  pixelStyle[index].style.border = '1px solid';
  pixelStyle[index].style.width = '40px';
  pixelStyle[index].style.height = '40px';
}

//colocar em linha
const divFlex = document.querySelectorAll('.flex');
for (let index = 0; index < divFlex.length; index += 1) {
  divFlex[index].style.display = 'flex';
}

// 8 - Defina a cor preta como cor inicial da paleta de cores. Ao carregar a página a cor preta já deve estar selecionada para pintar os pixels
const colorSelected = document.querySelectorAll(".color");
colorSelected[0].classList.add('selected');

// 9 - Crie uma função para selecionar uma cor na paleta de cores.
for (let index = 0; index < colorSelected.length; index += 1) {
  colorSelected[index].addEventListener('click', (event) => {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.classList.add('selected');
  });
}


// 10 - Crie uma função que permita preencher um pixel do quadro com a cor selecionada na paleta de cores.
const pintar = document.querySelectorAll('.pixel');
const salvarPintura = [];

for (let index = 0; index < pintar.length; index += 1) {
  pintar[index].addEventListener('click', (event) => {
  const selected = document.querySelector('.selected');
  const clickMouse = event.target;
  
  clickMouse.style.backgroundColor = selected.style.backgroundColor;
    
  const desenhoPixel = {
    position: index,
    color: clickMouse.style.backgroundColor,
  };

  salvarPintura.push(desenhoPixel);
  const pinturaPronta = document.querySelector('#pixel-board')
  localStorage.setItem('pixelBoard', pinturaPronta.innerHTML);
  });
}

// 11 - Crie um botão que retorne a cor do quadro para a cor inicial.
// botão criado no html
const buttonLimpar = document.querySelector('#clear-board');
const clickButtonLimpar = () => {
  for (let index = 0; index < pintar.length; index += 1) {
    pintar[index].style.backgroundColor = 'white';
  }
}

buttonLimpar.addEventListener('click', clickButtonLimpar);

// funcao para recarregar desenho

const restorePixel = () => {
  const savedDesign = localStorage.getItem('pixelBoard');
  const pinturaPronta = document.querySelector('#pixel-board')
  pinturaPronta.innerHTML = savedDesign
  }

window.onload = () => {
  restoreStorage();
  // restorePixel();
}