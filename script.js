let order = [];
let clickedOrder = [];
let score = 0;

//0-vermelho
//1-amarelo
//2-verde
//3-azul

const azul = document.querySelector('.azul');
const vermelho = document.querySelector('.vermelho');
const verde = document.querySelector('.verde');
const amarelo = document.querySelector('.amarelo');


let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        ligthColor(elementColor, Number(i) + 1);
    }
}

let ligthColor = (element, number) => {
    number = number * 500;
    setTimeout (() => {
        element.classList.add('selected');

    }, number -250);

    setTimeout (() => {
        element.classList.remove('selected');
    });

}

let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameover();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score} \n Você acertou !`);
        nextLevel();
        
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');
    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);

    
}

let createColorElement = (color) => {
    if(color == 0) {
        return vermelho;
    } else if (color == 1) {
        return amarelo;
    } else if (color == 2) {
        return verde;
    } else if (color == 3) {
        return (azul);
    }
}

let nextLevel = () => {
    score++;
    shuffleOrder();
}

let gameover = () => {
    alert(`Pontuação: ${score}!\nTu perdeu! .-. `);
    order = [];
    checkOrder = [];

    playGame();
}

let playGame = () => {
    alert('Bem vindo! boa sorte parça !');
    score = 0;

    nextLevel();
}

vermelho.onclick = () => click(0);
amarelo.onclick = () => click(1);
verde.onclick = () => click(2);
azul.onclick = () => click(3);



playGame();
