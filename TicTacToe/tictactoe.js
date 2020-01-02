function changeTurn(result){
    if(result==="x")
        return "o";
    else    
        return "x";
}




function checkForWinner(){
    var indexTic00 = document.querySelector("#indexTic00").innerHTML; 
    var indexTic01 = document.querySelector("#indexTic01").innerHTML; 
    var indexTic02 = document.querySelector("#indexTic02").innerHTML; 
    var indexTic10 = document.querySelector("#indexTic10").innerHTML; 
    var indexTic11 = document.querySelector("#indexTic11").innerHTML; 
    var indexTic12 = document.querySelector("#indexTic12").innerHTML; 
    var indexTic20 = document.querySelector("#indexTic20").innerHTML; 
    var indexTic21 = document.querySelector("#indexTic21").innerHTML; 
    var indexTic22 = document.querySelector("#indexTic22").innerHTML; 


    if(indexTic00 == indexTic01 && indexTic00 == indexTic02) 
        if(indexTic00 !== "")
            return indexTic00;
    if(indexTic10 == indexTic11 && indexTic10 == indexTic12)
        if(indexTic10 !== "")
            return indexTic10;
    if(indexTic20 == indexTic21 && indexTic20 == indexTic22)
        if(indexTic20 !== "")
            return indexTic20;



    if(indexTic00 == indexTic10 && indexTic00 == indexTic20)
        if(indexTic00 !== "")
            return indexTic00;
    if(indexTic01 == indexTic11 && indexTic01 == indexTic21)
        if(indexTic01 !== "")
            return indexTic01;
    if(indexTic02 == indexTic12 && indexTic02 == indexTic22)
        if(indexTic02 !== "")
            return indexTic02;



    if(indexTic00 == indexTic11 && indexTic00 == indexTic22)
        if(indexTic00 !== "")
            return indexTic00;
    if(indexTic20 == indexTic11 && indexTic20 == indexTic02)
        if(indexTic20 !== "")
            return indexTic20;

  
}

$(document).ready(function(){

    var turn = "x";

    $("#indexTic00").click(function(){
        result = document.querySelector("#indexTic00").innerHTML; 
        if(result ===""){
            turn = changeTurn(turn);
            document.querySelector("#indexTic00").innerHTML = turn;
            if(checkForWinner() == "x" || checkForWinner() == "o")
            document.querySelector("#winner").innerHTML = checkForWinner().toUpperCase() + " won";
        }
    });
    $("#indexTic01").click(function(){
        result = document.querySelector("#indexTic01").innerHTML; 
        if(result ===""){
            turn = changeTurn(turn);
            document.querySelector("#indexTic01").innerHTML = turn;
            if(checkForWinner() == "x" || checkForWinner() == "o")
            document.querySelector("#winner").innerHTML = checkForWinner().toUpperCase() + " won";
        }
    });
    $("#indexTic02").click(function(){
        result = document.querySelector("#indexTic02").innerHTML; 
        if(result ===""){
            turn = changeTurn(turn);
            document.querySelector("#indexTic02").innerHTML = turn;
            if(checkForWinner() == "x" || checkForWinner() == "o")
            document.querySelector("#winner").innerHTML = checkForWinner().toUpperCase() + " won";
        }
    });
    $("#indexTic10").click(function(){
        result = document.querySelector("#indexTic10").innerHTML; 
        if(result ===""){
            turn = changeTurn(turn);
            document.querySelector("#indexTic10").innerHTML = turn;
            if(checkForWinner() == "x" || checkForWinner() == "o")
            document.querySelector("#winner").innerHTML = checkForWinner().toUpperCase() + " won";
        }
    });
    $("#indexTic11").click(function(){
        result = document.querySelector("#indexTic11").innerHTML; 
        if(result ===""){
            turn = changeTurn(turn);
            document.querySelector("#indexTic11").innerHTML = turn;
            if(checkForWinner() == "x" || checkForWinner() == "o")
            document.querySelector("#winner").innerHTML = checkForWinner().toUpperCase() + " won";
         }
    });
    $("#indexTic12").click(function(){
        result = document.querySelector("#indexTic12").innerHTML; 
        if(result ===""){
            turn = changeTurn(turn);
            document.querySelector("#indexTic12").innerHTML = turn;
            if(checkForWinner() == "x" || checkForWinner() == "o")
            document.querySelector("#winner").innerHTML = checkForWinner().toUpperCase() + " won";
        }
    });
    $("#indexTic20").click(function(){
        result = document.querySelector("#indexTic20").innerHTML; 
        if(result ===""){
            turn = changeTurn(turn);
            document.querySelector("#indexTic20").innerHTML = turn;
            if(checkForWinner() == "x" || checkForWinner() == "o")
            document.querySelector("#winner").innerHTML = checkForWinner().toUpperCase() + " won";
        }
    });
    $("#indexTic21").click(function(){
        result = document.querySelector("#indexTic21").innerHTML; 
        if(result ===""){
            turn = changeTurn(turn);
            document.querySelector("#indexTic21").innerHTML = turn;
            if(checkForWinner() == "x" || checkForWinner() == "o")
            document.querySelector("#winner").innerHTML = checkForWinner().toUpperCase() + " won";
        }
    });
    $("#indexTic22").click(function(){
        result = document.querySelector("#indexTic22").innerHTML; 
        if(result ===""){
            turn = changeTurn(turn);
            document.querySelector("#indexTic22").innerHTML = turn;
            if(checkForWinner() == "x" || checkForWinner() == "o")
            document.querySelector("#winner").innerHTML = checkForWinner().toUpperCase() + " won";
        }
    });

    $("#reset").click(function(){
        document.querySelector("#indexTic00").innerHTML = ""; 
        document.querySelector("#indexTic01").innerHTML = ""; 
        document.querySelector("#indexTic02").innerHTML = ""; 
        document.querySelector("#indexTic10").innerHTML = ""; 
        document.querySelector("#indexTic11").innerHTML = ""; 
        document.querySelector("#indexTic12").innerHTML = ""; 
        document.querySelector("#indexTic20").innerHTML = ""; 
        document.querySelector("#indexTic21").innerHTML = ""; 
        document.querySelector("#indexTic22").innerHTML = "";

        document.querySelector("#winner").innerHTML = "TicTacToe"; 

    });
    
   
});