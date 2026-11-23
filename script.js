const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        if (value === "C") {
    display.value = "";
} 
else if (value === "=") {

    if (display.value === "2/1") {
        display.value = "مش رجوله";
    }
 else {
    display.value = eval(display.value);
 }


}
else {
    display.value += value;
}
    });
});