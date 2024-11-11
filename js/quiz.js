// Generate random integers
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
}

// Get the numbers
var M = randomInt(300, 600);
var N = randomInt(100, 300);
var K = randomInt(0, 100);

// Update the questions -- total, give out, takeback
document.querySelector('#total').textContent = M.toString();
document.querySelector('#giveout').textContent = N.toString();
document.querySelector('#takeback').textContent = K.toString();

// Update the answers
var T =  N + K;
var S =  N - K;
// M- N + K, M - N - K, M - T, M - S
document.querySelector('[value="1"]').nextSibling.nodeValue = M.toString() + " - " + N.toString() + " + " + K.toString();
document.querySelector('[value="2"]').nextSibling.nodeValue = M.toString() + " - " + N.toString() + " - " + K.toString();
document.querySelector('[value="3"]').nextSibling.nodeValue = M.toString() + " - " + T.toString();
document.querySelector('[value="4"]').nextSibling.nodeValue = M.toString() + " - " + S.toString();

// Pick the answer
function changeStyle(e) {
    e.preventDefault(); // prevent the checkbox from being clicked --- otherwise two clicks
    var classname = this.getAttribute("class");
    //alert("clicked class " + classname);
    if (classname == "answer") {
        this.setAttribute("class", "answer selected");
    } else {
        // the style goes back to answer
        this.setAttribute("class", "answer");
    }
    // testing on animation
    //this.animate([{transform: 'rotate(0deg)'}, {transform: 'rotate(180deg'}], {duration: 3000, fill: 'forwards'});

}

// Add event listener on the answer!!
var answerlist = document.getElementsByClassName('answer');
for (var i = 0; i < 4; i++) {
    answerlist[i].addEventListener('click', changeStyle, false);
}