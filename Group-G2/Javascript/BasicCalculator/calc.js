// Event Binding - first we bind an event with a function
// when event will be triggered then function will be called

window.addEventListener("load", initEvents);
// we are adding an event "load" on windows
// it means window will allow browser to load HTML first then it calls initEvent function

function initEvents() {
    // alert("JS Loaded...");
    document.querySelector("#add").addEventListener("click", add);
     document.querySelector("#sub").addEventListener("click", sub);
     document.querySelector("#mul").addEventListener("click", multi);
     document.querySelector("#div").addEventListener("click", div);
}


function add() {
    var fnum = document.querySelector("#box-1").value;
    var snum = document.querySelector("#box-2").value;
    // parseInt - type cast into integer
    var result = parseInt(fnum) + parseInt(snum);
    document.querySelector("#box-3").value = result;
}
function sub() {
    var fnum = document.querySelector("#box-1").value;
    var snum = document.querySelector("#box-2").value;
    // parseInt - type cast into integer
    var result = parseInt(fnum) - parseInt(snum);
    document.querySelector("#box-3").value = result;
}
function multi() {
    var fnum = document.querySelector("#box-1").value;
    var snum = document.querySelector("#box-2").value;
    // parseInt - type cast into integer
    var result = parseInt(fnum) * parseInt(snum);
    document.querySelector("#box-3").value = result;
}
function div() {
    var fnum = document.querySelector("#box-1").value;
    var snum = document.querySelector("#box-2").value;
    // parseInt - type cast into integer
    var result = parseInt(fnum) / parseInt(snum);
    document.querySelector("#box-3").value = result;
}
