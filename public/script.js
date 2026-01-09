let display = document.getElementById("display");
let value = "";
function action(x){
    if(x === "C") value = "";
    else if ( x === "±") value = (eval(value) * -1) || "";
    else if ( x === "%") value = (eval(value) / 100) || "";
    else if ( x === "=") value = eval(value);
    else value += x;
    display.textContent = value || "0";
}

