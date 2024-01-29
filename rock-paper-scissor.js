let score={
    win:0,
    loss:0,
    tie:0,
}
JSON.parse(localStorage.getItem(score));
scoreElement();
function scoreElement(){
    document.querySelector('.js-score')
    .innerHTML=`win: ${score.win}  lose: ${score.loss}  Tie: ${score.tie} `;
}
function pickRandom() {
    randomNumber = Math.random();
    if (randomNumber > 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    } else if(randomNumber>2/3 && randomNumber<1){
        computerMove = 'Scissor';
    }
    return computerMove;
}

function playGame( yourMove) {
if(yourMove==='Rock'){          
    if (computerMove === 'Rock') {
        result = 'tie';
    } else if (computerMove === 'Paper') {
        result = 'you lose';
    } else if (computerMove==='Scissor'){
        result = 'you win';
    }
}else if(yourMove==='Paper'){
    if (computerMove === 'Rock') {
        result = 'you win';
    } else if (computerMove === 'Paper') {
        result = 'tie';
    } else if (computerMove==='Scissor'){
        result = 'you lose';
    }
}else if(yourMove==='Scissor'){
    if (computerMove === 'Rock') {
        result = 'you lose';
    } else if (computerMove === 'Paper') {
        result = 'you win';
    } else if (computerMove==='Scissor'){
        result = 'tie';
    }
}
if(result==='you win'){
    score.win+=1;
}else if(result==='you lose'){
    score.loss+=1;
}else if(result==='tie'){
    score.tie+=1;
}
localStorage.setItem('score', JSON.stringify(score));
scoreElement();
document.querySelector('.js-result').innerHTML=result;
document.querySelector('.js-move').innerHTML=`you: <img src=images/${yourMove}.png>  <img src=images/${computerMove}.png> : computer`;
}