function changeTurn(result){
    if(result==="x")
        return "o";
    else    
        return "x";
}




function checkForWinner(){
    var index00 = document.querySelector("#index00").innerHTML; 
    var index01 = document.querySelector("#index01").innerHTML; 
    var index02 = document.querySelector("#index02").innerHTML; 
    var index10 = document.querySelector("#index10").innerHTML; 
    var index11 = document.querySelector("#index11").innerHTML; 
    var index12 = document.querySelector("#index12").innerHTML; 
    var index20 = document.querySelector("#index20").innerHTML; 
    var index21 = document.querySelector("#index21").innerHTML; 
    var index22 = document.querySelector("#index22").innerHTML; 


    if(index00 == index01 && index00 == index02) 
        if(index00 !== "")
            return index00;
    if(index10 == index11 && index10 == index12)
        if(index10 !== "")
            return index10;
    if(index20 == index21 && index20 == index22)
        if(index20 !== "")
            return index20;



    if(index00 == index10 && index00 == index20)
        if(index00 !== "")
            return index00;
    if(index01 == index11 && index01 == index21)
        if(index01 !== "")
            return index01;
    if(index02 == index12 && index02 == index22)
        if(index02 !== "")
            return index02;



    if(index00 == index11 && index00 == index22)
        if(index00 !== "")
            return index00;
    if(index20 == index11 && index20 == index02)
        if(index20 !== "")
            return index20;

  
}

$(document).ready(function(){

    var turn = "x";

    $("#index00").click(function(){
        result = document.querySelector("#index00").innerHTML; 
        if(result ===""){
            turn = changeTurn(turn);
            document.querySelector("#index00").innerHTML = turn;
            if(checkForWinner() == "x" || checkForWinner() == "o")
            document.querySelector("#winner").innerHTML = checkForWinner().toUpperCase() + " won";
        }
    });
    $("#index01").click(function(){
        result = document.querySelector("#index01").innerHTML; 
        if(result ===""){
            turn = changeTurn(turn);
            document.querySelector("#index01").innerHTML = turn;
            if(checkForWinner() == "x" || checkForWinner() == "o")
            document.querySelector("#winner").innerHTML = checkForWinner().toUpperCase() + " won";
        }
    });
    $("#index02").click(function(){
        result = document.querySelector("#index02").innerHTML; 
        if(result ===""){
            turn = changeTurn(turn);
            document.querySelector("#index02").innerHTML = turn;
            if(checkForWinner() == "x" || checkForWinner() == "o")
            document.querySelector("#winner").innerHTML = checkForWinner().toUpperCase() + " won";
        }
    });
    $("#index10").click(function(){
        result = document.querySelector("#index10").innerHTML; 
        if(result ===""){
            turn = changeTurn(turn);
            document.querySelector("#index10").innerHTML = turn;
            if(checkForWinner() == "x" || checkForWinner() == "o")
            document.querySelector("#winner").innerHTML = checkForWinner().toUpperCase() + " won";
        }
    });
    $("#index11").click(function(){
        result = document.querySelector("#index11").innerHTML; 
        if(result ===""){
            turn = changeTurn(turn);
            document.querySelector("#index11").innerHTML = turn;
            if(checkForWinner() == "x" || checkForWinner() == "o")
            document.querySelector("#winner").innerHTML = checkForWinner().toUpperCase() + " won";
         }
    });
    $("#index12").click(function(){
        result = document.querySelector("#index12").innerHTML; 
        if(result ===""){
            turn = changeTurn(turn);
            document.querySelector("#index12").innerHTML = turn;
            if(checkForWinner() == "x" || checkForWinner() == "o")
            document.querySelector("#winner").innerHTML = checkForWinner().toUpperCase() + " won";
        }
    });
    $("#index20").click(function(){
        result = document.querySelector("#index20").innerHTML; 
        if(result ===""){
            turn = changeTurn(turn);
            document.querySelector("#index20").innerHTML = turn;
            if(checkForWinner() == "x" || checkForWinner() == "o")
            document.querySelector("#winner").innerHTML = checkForWinner().toUpperCase() + " won";
        }
    });
    $("#index21").click(function(){
        result = document.querySelector("#index21").innerHTML; 
        if(result ===""){
            turn = changeTurn(turn);
            document.querySelector("#index21").innerHTML = turn;
            if(checkForWinner() == "x" || checkForWinner() == "o")
            document.querySelector("#winner").innerHTML = checkForWinner().toUpperCase() + " won";
        }
    });
    $("#index22").click(function(){
        result = document.querySelector("#index22").innerHTML; 
        if(result ===""){
            turn = changeTurn(turn);
            document.querySelector("#index22").innerHTML = turn;
            if(checkForWinner() == "x" || checkForWinner() == "o")
            document.querySelector("#winner").innerHTML = checkForWinner().toUpperCase() + " won";
        }
    });

    $("#reset").click(function(){
        document.querySelector("#index00").innerHTML = ""; 
        document.querySelector("#index01").innerHTML = ""; 
        document.querySelector("#index02").innerHTML = ""; 
        document.querySelector("#index10").innerHTML = ""; 
        document.querySelector("#index11").innerHTML = ""; 
        document.querySelector("#index12").innerHTML = ""; 
        document.querySelector("#index20").innerHTML = ""; 
        document.querySelector("#index21").innerHTML = ""; 
        document.querySelector("#index22").innerHTML = ""; 
    });
    
   
});