function comprar() {
    // Obtém o tipo de ingresso selecionado pelo usuário
    let tipo = document.getElementById("tipo-ingresso");
    // Obtém a quantidade de ingressos desejada e converte para número inteiro
    let qtd = parseInt(document.getElementById("qtd").value);

    // impede o usuario de enviar valores negativos ou 0
    if (qtd <=0){
        alert("Insira um valor válido para a compra");
        return;
    }
  
    // Verifica o tipo de ingresso selecionado e chama a função correspondente
    if (tipo.value == "pista") {
      comprarPista(qtd);
    } else if (tipo.value == "superior") {
      comprarSuperior(qtd);
    } else if (tipo.value == "inferior") {
      comprarInferior(qtd);
    }
  }
  
  function comprarPista(qtd) {
    // Obtém a quantidade disponível de ingressos de pista e converte para número inteiro
    let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
    // Verifica se a quantidade solicitada é maior que a disponível
    if (qtd > qtdPista) {
      alert("Quantidade indisponível para tipo pista");
    } else {
      // Atualiza a quantidade disponível de ingressos de pista e exibe mensagem de sucesso
      qtdPista = qtdPista - qtd;
      document.getElementById("qtd-pista").textContent = qtdPista;
      alert("Compra realizada com sucesso");
    }
  }
  
  // Funções comprarSuperior e comprarInferior são similares à função comprarPista,
  // com a diferença de atuarem sobre os respectivos tipos de ingressos.

function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    if(qtd > qtdSuperior) {
        alert("Quantidade indisponível para tipo Cadeira Superior")
    } else{
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById("qtd-superior").textContent = qtdSuperior;
        alert("Compra realizada com sucesso");
    }
}

function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById("qtd-inferior").textContent);
    if(qtd > qtdInferior) {
        alert("Quantidade indisponível para tipo Cadeira Inferior")
    } else{
        qtdInferior = qtdInferior - qtd;
        document.getElementById("qtd-inferior").textContent = qtdInferior;
        alert("Compra realizada com sucesso");
    }
}