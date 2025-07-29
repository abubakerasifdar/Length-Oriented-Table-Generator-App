// 25 line of code
document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        myFunction();
    }
})
function myFunction() {
    let input = Number(document.getElementById('input').value);
    let length = Number(document.getElementById('input2').value);
    let result = "";
    let count = '';
    for (let i = 1; i <= length; i++) {
        count += `${input} x ${i} = ${input * i} <br>`;
    }
     result = count;
    document.getElementById('output').style.display = "flex";
    document.getElementById('output').innerHTML = result;
}