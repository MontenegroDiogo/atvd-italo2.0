function calcular() {
    let vendas = parseFloat(document.querySelector("#vendas").value);

    let lucro = vendas * 0.23;

    document.querySelector("#resultado").textContent = `O lucro anual é: R$ ${lucro}`;
}
