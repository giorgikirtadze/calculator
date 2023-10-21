let Bowl = document.querySelector('.Bowl');
let button = document.querySelectorAll('button');
let allOperator = ["%", "*", "/", "-", "+", "="];
let output = '';

let calculate = (btnValue) => {
    if(btnValue === "=" && btnValue !== ""){
        output = eval(output.replace("%", "/100"));
    } else if(btnValue === "c"){
        output="";
    } else {
        if(output === "" && allOperator.includes(btnValue)) return;
        output += btnValue;
    }
    Bowl.value = output;
    console.log(btnValue);
}


button.forEach(button => {
    button.addEventListener('click', (e) => {
        calculate(e.target.dataset.value)
    })
})
