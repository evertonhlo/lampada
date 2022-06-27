const imagem = document.getElementById('#lampada');


const botaoD = document.querySelector('.botao_desliga');
const botaoL = document.querySelector('.botao_liga')



botaoL.addEventListener('click', ligar)
botaoD.addEventListener('click', desligar)

function ligar() {
    imagem.src = './imagens-lampada/ligada.jpg'
}

function desligar() {
    imagem.src = './imagens-lampada/desligada.jpg'
}