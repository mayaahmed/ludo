var canvas = document.getElementById('canvas');
var context=canvas.getContext('2d');  
var ludo = new Image();
ludo.src="ludo-board.png";


var face0=new Image(); face0.src="d1.png";
var face1=new Image(); face1.src="d2.png";
var face2=new Image(); face2.src="d3.png";
var face3=new Image(); face3.src="d4.png";
var face4=new Image(); face4.src="d5.png";
var face5=new Image(); face5.src="d6.png";

function throw_dice(){
    var random_dice=Math.round(Math.random()*5); // 0..5
    document.images["mydice"].src = eval("face"+random_dice+".src");
    makeDiceSound();
}

function makeDiceSound(){
    var audio = new Audio('dice.mp3');
    audio.play();

}
function makeMoveSound(){
    var audio = new Audio('move.mp3');
    audio.play();

}


