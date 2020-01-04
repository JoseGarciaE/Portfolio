function changeTurn(result){
    if(result==="x")
        return "o";
    else    
        return "x";
}

function checkForWinner(){

    var index00 = document.querySelector("#index00").textContent; 
    var index01 = document.querySelector("#index01").textContent; 
    var index02 = document.querySelector("#index02").textContent; 
    var index10 = document.querySelector("#index10").textContent; 
    var index11 = document.querySelector("#index11").textContent; 
    var index12 = document.querySelector("#index12").textContent; 
    var index20 = document.querySelector("#index20").textContent; 
    var index21 = document.querySelector("#index21").textContent; 
    var index22 = document.querySelector("#index22").textContent; 

    var indexWin = "";

    if(index00 == index01 && index00 == index02 && index00!="") 
        indexWin =  index00;
    if(index10 == index11 && index10 == index12 && index10!="")
        indexWin =  index10;
    if(index20 == index21 && index20 == index22 && index20!="")
        indexWin =  index20;

    if(index00 == index10 && index00 == index20 && index00!="")
        indexWin =  index00;
    if(index01 == index11 && index01 == index21 && index01!="")
        indexWin =  index01;
    if(index02 == index12 && index02 == index22 && index02!="")
        indexWin =  index02;

    if(index00 == index11 && index00 == index22 && index00!="")
        indexWin =  index00;
    if(index20 == index11 && index20 == index02 && index20!="")
        indexWin =  index20;

    if(indexWin == "x" || indexWin == "o")
        document.querySelector("#winner").textContent = indexWin.toUpperCase() + " won";
  
}

function callAI(turn){
    var completed = false;
    
    while(completed == false){
        var index1 = Math.floor(Math.random() * 3).toString(); 
        var index2 = Math.floor(Math.random() * 3).toString(); 

        if(document.querySelector("#index"+index1+index2).textContent == ""){
            turn = changeTurn(turn);
            document.querySelector("#index"+index1+index2).textContent = turn;
            completed = true;
        }
    }
    return turn;
}

$(document).ready(function(){

    var turn = "x";
    var turnCount = 0;

    var aiMode = false;

    $("#ai").click(function(){
        aiMode = true;
        document.querySelector("#ai").disabled= true;
    });

    if(document.querySelector("#winner").textContent === "TicTacToe"){
        var index = document.querySelectorAll(".index");
        for(const elem of index){
            elem.addEventListener("click",function(){
                result = elem.textContent; 
                if(result ===""){
                    turn = changeTurn(turn);
                    elem.textContent = turn;
                    checkForWinner();
                    turnCount++;
                }
                if(aiMode && turnCount<=8){
                    turn = callAI(turn);
                    checkForWinner();
                    turnCount++
                }
            });
        }
    }
    

    $("#reset").click(function(){
        aiMode = false;
        document.querySelector("#ai").disabled= false;

        var reset = document.querySelectorAll(".index"); 

        for(const elem of reset)
            elem.textContent = "";
        
        document.querySelector("#winner").textContent = "TicTacToe"; 
    });
    

});