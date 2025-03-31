// Função para alternar a visibilidade dos detalhes
function toggleDetalhes(buttonId, quadroId) {
  // Obtém o botão e o quadro de detalhes
  var button = document.getElementById(buttonId);
  var quadro = document.getElementById(quadroId);

  // Alterna a visibilidade do quadro de detalhes
  if (quadro.style.display === "none" || quadro.style.display === "") {
    quadro.style.display = "block"; // Torna o quadro visível
    button.textContent = "Ocultar Detalhes"; // Altera o texto do botão
  } else {
    quadro.style.display = "none"; // Torna o quadro invisível
    button.textContent = "Detalhes"; // Restaura o texto do botão
  }
}

// Adiciona os eventos de clique para cada botão
document.getElementById('btnDetalhes-1').addEventListener('click', function() {
  toggleDetalhes('btnDetalhes-1', 'quadroDetalhes-1');
});
document.getElementById('btnDetalhes-2').addEventListener('click', function() {
  toggleDetalhes('btnDetalhes-2', 'quadroDetalhes-2');
});
document.getElementById('btnDetalhes-3').addEventListener('click', function() {
  toggleDetalhes('btnDetalhes-3', 'quadroDetalhes-3');
});
document.getElementById('btnDetalhes-4').addEventListener('click', function() {
  toggleDetalhes('btnDetalhes-4', 'quadroDetalhes-4');
});
document.getElementById('btnDetalhes-5').addEventListener('click', function() {
  toggleDetalhes('btnDetalhes-5', 'quadroDetalhes-5');
});
document.getElementById('btnDetalhes-6').addEventListener('click', function() {
  toggleDetalhes('btnDetalhes-6', 'quadroDetalhes-6');
});
