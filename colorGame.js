var colors = generateRandomColors(6);
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var backg = document.querySelector(".backg");
var playAgain = document.querySelector("#pa");
var easyBtn = document.querySelector(".easyBtn");
var hardBtn = document.querySelector(".hardBtn");
var squares =  document.querySelectorAll(".square");
var bodybg = document.querySelector("body");
var n = 0;
colorDisplay.textContent = pickedColor;



for (var i = 0; i < squares.length; i++) {
    
    squares[i].style.background = colors[i];
    
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.background;

        if(clickedColor === pickedColor){
            messageDisplay.textContent = "CORRECT!";
            changeColor(clickedColor);
            backg.style.background = clickedColor;
            playAgain.textContent = "Play again?";
        }
        else{
            this.style.background="#232323";
            messageDisplay.textContent = "Try Again!"; 
        }
    });
}
    function changeColor(color){
        for (let i = 0; i < squares.length; i++) {
            squares[i].style.background = color;
            
        }
    }

    function pickColor(){
        var rand = Math.floor(Math.random() * colors.length);
        return colors[rand]; 
    }

    function generateRandomColors(num){
        var arr = [];
        for (let i = 0; i < num; i++) {
            arr.push(randomColor());
        }


        return arr;
    }

    function randomColor(){
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb("+ r +", " + g + ", " + b +")" ; 
    }

    playAgain.addEventListener("click", function(){
        if(n===0){
            colors = generateRandomColors(6);
            pickedColor = pickColor();
            colorDisplay.textContent = pickedColor;
            for (let i = 0; i < squares.length; i++) {
                squares[i].style.background = colors[i];
            }
            backg.style.background = "steelblue";
            playAgain.textContent = "New Colors";
            messageDisplay.textContent="";
            console.log(easyBtn.background.style);
        }
        
        else if(n===1){
            colors = generateRandomColors(3);
            pickedColor = pickColor();
            colorDisplay.textContent = pickedColor; 
            for (let i = 0; i < squares.length; i++) {
                squares[i].style.background = colors[i];
            }
            for (let i = 3; i < squares.length; i++) {
                squares[i].style.display = "none" ;
            }
            backg.style.background = "steelblue";
            playAgain.textContent = "New Colors";
        }
    });

    easyBtn.addEventListener("click", function(){
        n = 1;
        this.classList.add("blue");
        hardBtn.classList.remove("active");
        hardBtn.classList.remove("blue");
        colors = generateRandomColors(3);
        pickedColor = pickColor();
        
        colorDisplay.textContent = pickedColor; 
        for (let i = 0; i < squares.length; i++) {
            squares[i].style.background = colors[i];
        }
        for (let i = 3; i < squares.length; i++) {
            squares[i].style.display = "none" ;
        }
        backg.style.background = "steelblue";
    });

    hardBtn.addEventListener("click", function(){
        n = 0;
        this.classList.add("blue");
        easyBtn.classList.remove("blue");
        colors = generateRandomColors(6);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor; 
        for (let i = 0; i < squares.length; i++) {
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
        }
        backg.style.background = "steelblue";
    });