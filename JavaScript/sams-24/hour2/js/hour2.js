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


//---------------------------


function myFunction() {

    var hour = new Date().getHours();

    var greeting;
    if (hour < 18) {
        greeting = "Good day";
        document.getElementById("divbg").style.backgroundColor = "lightyellow";
        
    } else {
        greeting = "Good evening";
        document.getElementById("divbg").style.backgroundColor = "lightblue";
    }

    document.getElementById("demo").innerHTML = greeting;
}

//---------------------------
    
var firstName = "Santhosh";
var lastName = "KH";
var age = "20";

var fullName = firstName + "  " + lastName;

alert(fullName + "  Age: "+age);

//---------------------------

var cTemp = 100; // temperature in Celsius
// Let's be generous with parentheses
var hTemp = ((cTemp * 9) /5 ) + 32;
document.write("Temperature in Celsius: " + cTemp + "degrees<br/>");
document.write("Temperature in Fahrenheit: " + hTemp + "degrees");