var pontuacoes, roudpontuacao, activePlayer, gamePlaying;

init();  

/***************Variaveis só para mostrar como funciona alguns comandos **************************/
// 

// var x = document.querySelector('#pontuacao--0').textContent; //Para ler e armazenar o valor pego da web na variavel.
/************************************************************************************************/

document.querySelector('.btn--roll').addEventListener('click', function(){
    if(gamePlaying){
        //Random Number
        var dice = Math.floor(Math.random() * 6) + 1; //Math.floor arrendonda o número dado pelo math.random já que o math.random da um número quebrado // o multiplicado mostra até que número ele pode mostrar
    
        //2.Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png'; //utilizou os números para dra nome a imagem já que o dice vai ter o valor desses números, portanto, mudará automaticamente sem precisar de um IF
    
        //3.Update the roud pontuacao IF the rolled number eas NOT a 1
        if (dice !== 1){
            //Add a pontuacao
            roudpontuacao += dice;
            document.querySelector('#final--' + activePlayer).textContent = roudpontuacao; // Colocando o .textContent o texto do id é alterado // com o activePlayer o número vai mudar de acordo com o valor da variavel
        } else{
            //Next player
            nextPlayer();
            
        }

    }
    
    
});


document.querySelector('.btn--hold').addEventListener('click', function(){
    if(gamePlaying){
        pontuacoes[activePlayer] += roudpontuacao; //A posição do numero do activeplayer vai ser o numero do roudpontuacao
    
    //Update the UI
        document.querySelector('#pontuacao--' + activePlayer).textContent = pontuacoes[activePlayer];


    //Check if player won the game
        if (pontuacoes[activePlayer] >= 50){
            document.querySelector('#name--' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player--' + activePlayer).classList.add('winner');
            document.querySelector('.player--' + activePlayer).classList.remove('player--active');
            gamePlaying = false;

        } else {
            //Next Player
            nextPlayer();
    }

    }
    // Add final pontuacao to GLOBAL pontuacao
    
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //if -> ? // : -> else
    roudpontuacao = 0;

    document.getElementById('final--0').textContent = '0';
    document.getElementById('final--1').textContent = '0';

    document.querySelector('.player--0').classList.toggle('player--active'); //toggle -> alternar // remove se a classe ja estiver lá e coloca se não estiver
    document.querySelector('.player--1').classList.toggle('player--active'); //vai alternando sempre quando o loop se realiza

    // document.querySelector('.player--0').classList.remove('player--active'); //remover algum nome da classe
    // document.querySelector('.player--1').classList.add('player--active'); //adicionar algum nome na classe
    document.querySelector('.dice').style.display = 'none'; //Para o dado sumir
    
};

document.querySelector('.btn--new').addEventListener('click', init); //Passando a função para o EventListener


function init(){
    pontuacoes = [0,0];
    roudpontuacao = 0; 
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none'; //Deixar sem nenhum dado amostra

    document.getElementById('pontuacao--0').textContent = '0'; //Zerando todos os valores
    document.getElementById('pontuacao--1').textContent = '0';
    document.getElementById('final--0').textContent = '0';
    document.getElementById('final--1').textContent = '0';

    document.getElementById('name--0').textContent = 'Jogador 1';
    document.getElementById('name--1').textContent = 'Jogador 2';
    document.querySelector('.player--0').classList.remove('winner');
    document.querySelector('.player--0').classList.remove('winner');
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');


}

    