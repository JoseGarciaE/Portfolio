function normal(band){
    var value = "";

    if (band == "Black")
        value = "0";
    else if (band == "Brown")
        value = "1";
    else if (band == "Red")
        value = "2";
    else if (band == "Orange")
        value = "3";
    else if (band == "Yellow")
        value = "4";    
    else if (band == "Green")
        value = "5";
    else if (band == "Blue")
        value = "6";
    else if (band == "Violet")
        value = "7";
    else if (band == "Grey")
        value = "8";
    else if (band == "White")
        value = "9";
    
    return value;
}   

function mul(band){
    
    var value = " Ω ";

    if(band == "Black")
        value = " X 1 Ω ";
    else if(band == "Brown")
        value = " X 10 Ω ";
    else if(band == "Red")
        value = " X 100 Ω ";
    else if(band == "Orange")
        value = " X 1K Ω ";
    else if(band == "Yellow")
        value = " X 10K Ω ";
    else if(band == "Green")
        value = " X 100K Ω ";
    else if(band == "Blue")
        value = " X 1M Ω ";
    else if(band == "Violet")
        value = " X 10M Ω ";
    else if(band == "Gold")
        value = " X .1 Ω ";
    else if(band == "Silver")
        value = " X .01 Ω ";
    
    return value;
}

function tolerance(band){

    value = "";

    if(band == "Brown")
        value = " with a +/- 1% tolerance";
    else if(band == "Red")
        value = " with a +/- 2% tolerance";
    else if(band == "Green")
        value = " with a +/- .5% tolerance";
    else if(band == "Blue")
        value = " with a +/- .25% tolerance";
    else if(band == "Violet")
        value = " with a +/- .1% tolerance";
    else if(band == "Grey")
        value = " with a +/- .05% tolerance";
    else if(band == "Gold")
        value = " with a +/- 5% tolerance";
    else if(band == "Silver")
        value = " with a +/- 10% tolerance";
    
    return value;
}

$(document).ready(function(){

    $("#calcBtn").click(function(){

        var band1 = $("#band1").val();
        var band2 = $("#band2").val();
        var band3 = $("#band3").val();
        var band4 = $("#band4").val();
        var band5 = $("#band5").val();

        var solution = "";

        if(band5 == "N/A")
            solution = normal(band1) + normal(band2) + mul(band3) + tolerance(band4);
        else
            solution = normal(band1) + normal(band2) + normal(band3) + mul(band4) + tolerance(band5);

        document.querySelector('.output').textContent = solution; 

    });
});
