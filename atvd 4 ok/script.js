function calcular() {
    let n1 = parseFloat(document.querySelector("#n1").value);
    let n2 = parseFloat(document.querySelector("#n2").value);

    let soma = n1 + n2;
    let multiplicacao = n1 * n2;
    let divisao = n1 / n2;
    let subtracao = n1 - n2;

    document.querySelector("#soma").textContent = "A soma é: " + soma;
    document.querySelector("#multiplicacao").textContent = "A multiplicação é: " + multiplicacao;
    document.querySelector("#divisao").textContent = "A divisão é: " + divisao;
    document.querySelector("#subtracao").textContent = "A subtração é: " + subtracao;
}
