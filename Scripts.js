function AddToDisplay(value){
    document.getElementById("display").value += value;
    display.scrollLeft = display.scrollWidth;
}
function ClearDisplay(){
    document.getElementById("display").value = '';
}
function Delete(){
    document.getElementById("display").value = document.getElementById("display").value.slice(0, -1);
}
function Equals(){
    document.getElementById("display").value = eval(document.getElementById("display").value);
}