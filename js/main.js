//Master script

// Custom Function
function calculateTip(){
    // Store Data of input to var
    var billAmount= document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;

    // Basic validation of values
    if(billAmount === ""|| serviceQuality == 0){
        window.alert("Please enter and select proper value.");
        return;
    }

    // Secondry validation for people range checking
    if(numPeople === "" || numPeople <= 1){
        numPeople = 1;
        document.getElementById("each").style.display= "none";
    }
    else{
        document.getElementById("each").style.display= "block";
    }

    // Do some logic and brainy work.
    // Also note that if value in paranthesis are multiplied to 0, or non numerical value then JS returns a NaN
    var total= (billAmount * serviceQuality)/numPeople;
    // Rounding-off value, and this formula will round it off to 2 decimal places
    total=Math.round(total*100)/100;
    // Now for limiting to two deciaml places
    total=total.toFixed(2);
    // DEBUG
    // window.alert(total);

    // Displaying the tip
    document.getElementById("totalTip").style.display="block";
    document.getElementById("tip").innerHTML=total;
}

// Hide tip amount on initial load
document.getElementById("totalTip").style.display="none";
document.getElementById("each").style.display="none";

// Click Function
document.getElementById("calculate").onclick= function(){
    // console.log("Function call works")
    calculateTip();
};