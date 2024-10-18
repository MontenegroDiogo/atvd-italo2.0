function Calcular() {
    let peso = parseFloat(document.querySelector("#peso").value);
    let altura = parseFloat(document.querySelector("#altura").value);

    let imc = peso / (altura * altura);
    
    document.querySelector("#resultado").textContent = `Seu IMC é: ${imc}`;
}
