var rolledDice = rollDice();
var heading = winner(rolledDice);

var img1pic = "./images/dice"+rolledDice[0]+".png";
var img2pic = "./images/dice"+rolledDice[1]+".png";

document.querySelectorAll("img")[0].src = img1pic;
document.querySelectorAll("img")[1].src = img2pic;
document.querySelector("h1").textContent = heading;


function rollDice(){
    var dice1 = Math.round(Math.random()*5+1);
    var dice2 = Math.round(Math.random()*5+1);
    var rolledDice = [dice1, dice2];
    return rolledDice
}

function winner(rolledDice){
    var rolledDice1 = rolledDice[0];
    var rolledDice2 = rolledDice[1];
    if (rolledDice1 > rolledDice2){
        var heading = "Player 1 Wins!";
    }
    else if (rolledDice1 < rolledDice2){
        var heading = "Player 2 Wins!";
    }
    else{
        var heading = "Draw!"
    }
    
    return heading;
}