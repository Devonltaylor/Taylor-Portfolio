var color; //input color
function getInputColor() {
    return document.getElementById("color").value;
}

function display()  {
    color = getInputColor();
    window.alert( color + " IS AWESOME!!!");
    document.getElementById("form").submit();
}
