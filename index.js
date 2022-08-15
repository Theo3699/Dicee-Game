function randomImageSource(){
    return "images/" + "dice" + Math.ceil(Math.random()*6) + ".png";
}

var randomImage1 = randomImageSource();
var randomImage2 = randomImageSource();

document.querySelectorAll("img")[0].setAttribute("src", randomImage1);

document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if (randomImage1.charAt(11) > randomImage2.charAt(11)){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if (randomImage1.charAt(11) < randomImage2.charAt(11)){
    document.querySelector("h1").innerHTML = "Player 2 wins!";

}
else{
    document.querySelector("h1").innerHTML = "Draw";
}