let jogada = document.querySelector('.jogada')
let selected;
let player = "X"

let position = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

function init () {
    selected= []
    jogada.innerHTML = `É a vez do Jogador: ${player}`

    document.querySelectorAll('.tabela td').forEach((item) => {
        item.innerHTML = ""
        item.addEventListener('click', move)
    });
}

init()

function move (evento) {
    const index = evento.target.getAttribute('position')
    evento.target.innerHTML = player;
    evento.target.removeEventListener('click', move)
    selected[index] = player
    
    setTimeout(() => {
        check();
      }, [100]);

      // ALTERNA JOGADOR
      player = player === 'X' ? 'O' : 'X'
      jogada.innerHTML = `É a vez do jogador: ${player} entrar em jogo`
}

let check = () => {
  let playerAtual = player === "X" ? "O" : "X";

  const items = selected
    .map((item, i) => [item, i])
    .filter((item) => item[0] === playerAtual)
    .map((item) => item[1]);

  for (pos of position) {
    if (pos.every((item) => items.includes(item))) {
      alert("O JOGADOR '" + playerAtual + "' GANHOU!");
      init();
      return;
    }
  }

  if (selected.filter((item) => item).length === 9) {
    alert("EMPATE! VAMOS NOVAMENTE");
    init();
    return;
  }
}

let reset = () => 
  location.reload()