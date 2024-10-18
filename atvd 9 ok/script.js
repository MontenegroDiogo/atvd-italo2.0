function verificar() {
    let idade1 = parseFloat(document.querySelector("#idade1").value);
    let idade2 = parseFloat(document.querySelector("#idade2").value);
    let idade3 = parseFloat(document.querySelector("#idade3").value);

    let maiores = 0;
    let menores = 0;

    
    if (idade1 >= 18) {
        maiores++;
    } else {
        menores++;
    }

    if (idade2 >= 18) {
        maiores++;
    } else {
        menores++;
    }

    if (idade3 >= 18) {
        maiores++;
    } else {
        menores++;
    }

    document.querySelector("#resultado").textContent = `Maiores de idade: ${maiores}, Menores de idade: ${menores}`;
}
