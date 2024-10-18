function Calcular() {
    let salario = document.querySelector("#salario").value
    let grat = document.querySelector("#grat").value
    let imposto = document.querySelector("#imposto").value

    let grat1 = grat / 100
    let imposto1 = imposto / 100

    let gratSalario = salario + (salario * grat1)
    console.log(gratSalario)
    let impostoSalario = salario - (salario * imposto1)
    console.log(impostoSalario)

    document.querySelector("#resultado").textContent = `O valor é ${impostoSalario}`

}