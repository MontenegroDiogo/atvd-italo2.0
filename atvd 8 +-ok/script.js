function encontrarMaior() {
    
    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);
    let num3 = parseFloat(document.querySelector("#num3").value);
    let num4 = parseFloat(document.querySelector("#num4").value);
    let num5 = parseFloat(document.querySelector("#num5").value);

    
    let maior = num1;

    
    if (num2 > maior) {
        maior = num2;
    }
    if (num3 > maior) {
        maior = num3;
    }
    if (num4 > maior) {
        maior = num4;
    }
    if (num5 > maior) {
        maior = num5;
    }

   
    document.querySelector("#resultado").textContent = maior;
}

//Professor, essa eu tive que pedir uma ajudinha para o chatgpt, quebrei a cabeça mas não consegui. perdão