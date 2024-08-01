// Testing for connection
console.log('script is running');
var firstElem = document.getElementsByClassName('intro');
console.log(firstElem);
console.log(document.documentElement.clientHeight, document.documentElement.clientWidth);

const fs = require('./');

// Data which will be appended to the file.
let newData = "\nThis is some additional text."

// Append data to 'Hello.txt' .
fs.appendFile('Hello.txt', newData, (err) => {

    // In case of a error throw err.
    if (err) throw err;
})

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