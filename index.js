let cards=[];
let sum=0;
let isAlive=false;
let hasBlackJack=false;
let message="";
let total=document.getElementById("sum-el");
let cardsEl=document.getElementById("cards-el");
let getMessage=document.getElementById("message-el")

function startGame(){
    isAlive=true;
    let firstCard=getRandom();
    let secondCard=getRandom();
    cards=[firstCard,secondCard];
    sum=firstCard+secondCard;
    renderGame();

}
function getRandom(){
    let random=Math.floor(Math.random()*13)+1
    if(random>10){
        return 10;
    }else if(random===1){
        return 11;
    }else{
        return random;
    }
}
function renderGame(){
    cardsEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" ";
    }
    total.textContent="Sum: "+sum;
    if(sum<=20){
        message="Do you want to choose more cards?";
    }
    else if(sum===21){
        message="Hey Congo You got the BlackJack!!"
    }else{
        message="You are out of the game";
        isAlive=false; 
    }
    getMessage.textContent=message;
}

function newCard(){
    if(isAlive===true && hasBlackJack===false){
        let card=getRandom();
        sum+=card;
        cards.push(card);
        renderGame();
    }
}
