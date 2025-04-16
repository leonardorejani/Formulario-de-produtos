function calcularTotal() {
    const quantidade = parseInt(document.getElementById("quantidade").value);
    const preco = parseFloat(document.getElementById("preco").value);
    const resultadoDiv = document.getElementById("resultado");
  
    if (isNaN(quantidade) || isNaN(preco)) {
      resultadoDiv.innerHTML = "<p>Por favor, preencha todos os campos corretamente.</p>";
      return;
    }
  
    let total = quantidade * preco;
    let desconto = 0;
  
    if (quantidade >= 11 || quantidade <=20) {
      desconto = total * 0.05;
    } else if (quantidade <= 20) {
      desconto = total * 0.10;
    }
  
    const totalComDesconto = total - desconto;
  
    resultadoDiv.innerHTML = `
      <p>Total sem desconto: R$ ${total.toFixed(2)}</p>
      <p>Desconto aplicado: R$ ${desconto.toFixed(2)}</p>
      <p>Total com desconto: R$ ${totalComDesconto.toFixed(2)}</p>
      <p>Nota: ? :) </p>
    `;
  }