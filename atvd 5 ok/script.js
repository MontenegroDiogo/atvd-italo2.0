function Cadastrar() {

    let nome = document.querySelector("#nome").value;
    let endereco = document.querySelector("#endereco").value;
    let telefone = document.querySelector("#telefone").value;
    let atuacao = document.querySelector("#atuacao").value;

 
    let dadosCadastrados = `
        Nome: ${nome}\n
        Endereço: ${endereco}\n
        Telefone: ${telefone}\n
        Área de atuação: ${atuacao}`;

  
    document.querySelector("#dados").textContent = dadosCadastrados;
}
