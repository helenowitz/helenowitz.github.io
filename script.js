// Testing for connection
console.log('script is running');
var firstElem = document.getElementsByClassName('intro');
console.log(firstElem);
console.log(document.documentElement.clientHeight, document.documentElement.clientWidth);

/* Toggle between adding and removing the 'responsive' class to the topnav when the
user clicks on the icon */
function navShrink() {
    var x = document.getElementById("theTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}