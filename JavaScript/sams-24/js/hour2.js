
var productCount = 2;
var subtotal = 14.98;
var shipping = 2.75;
var total = subtotal + shipping;

subtotal = total - shipping;

var salesTax = total * 0.15;
var productPrice = subtotal / productCount;

var itemsPerBox = 12;
var itemsToBeBoxed = 40;
var itemsInLastBox = itemsToBeBoxed % itemsPerBox;




var num = 10;  

function myFunction(){
var hour = new Date().getHours();
var greeting;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

 document.getElementById("demo").innerHTML = greeting;
}

document.ready(myFunction());
/*
if(5 == num / 2 && (2 + 2 * num).toString() === "22") {  
    document.write(true);  
} */ 
    // Output:  
    // true