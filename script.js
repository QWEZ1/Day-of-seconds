let button = document.getElementById("convert");
let input = document.getElementById("day");
let output = document.getElementById("sec");
function print() {
    let day = Number(input.value); // Получаем актуальное значение из поля ввода     
    let sec = day * 86400;
    output.value = sec;
}
if(button) {
    button.addEventListener("click", print);
}