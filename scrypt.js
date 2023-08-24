document.getElementById('reset').onclick = function(e){
    document.getElementById('number1').value = "";
    document.getElementById('number2').value = "";
    document.getElementById('showResult').innerHTML = "";
}
//criar função para somar
document.getElementById('sumButton').onclick = function sum (e) {
    e.preventDefault();
    //define variaveis para os inputs do html
    let valor1 = parseFloat(document.getElementById('number1').value);
    let valor2 = parseFloat(document.getElementById('number2').value); 

    let resultSoma = valor1 + valor2;

    //mostrar o resultado no input result
    document.getElementById('showResult').innerHTML = resultSoma;
}

document.getElementById('subtractButton').onclick = function subtract (e) {
    e.preventDefault();
    //define variaveis para os inputs do html
    let valor1 = parseFloat(document.getElementById('number1').value);
    let valor2 = parseFloat(document.getElementById('number2').value); 

    let resultSoma = valor1 - valor2;

    //mostrar o resultado no input result
    document.getElementById('showResult').innerHTML = resultSoma;
}

document.getElementById('divisionButton').onclick = function subtract (e) {
    e.preventDefault();
    //define variaveis para os inputs do html
    let valor1 = parseFloat(document.getElementById('number1').value);
    let valor2 = parseFloat(document.getElementById('number2').value); 

    let resultSoma = valor1 / valor2;

    //mostrar o resultado no input result
    document.getElementById('showResult').innerHTML = resultSoma;
}