// Espera o HTML da página carregar completamente antes de executar o script
document.addEventListener('DOMContentLoaded', function () {

  // Variável que guarda o tamanho atual da fonte
  // Começa em 100% (tamanho padrão do site)
  let tamanhoFonte = 100;

  // Busca no HTML o botão que aumenta o tamanho da fonte
  // getElementById pega o elemento que possui esse id
  const aumentar = document.getElementById('aumentar-fonte');

  // Busca no HTML o botão que diminui o tamanho da fonte
  const diminuir = document.getElementById('diminuir-fonte');

  // Verifica se os botões realmente existem na página
  // Se não existirem, o código mostra um erro no console
  if (!aumentar || !diminuir) {
    console.error('Botões de acessibilidade não encontrados');
    return; // interrompe o script
  }

  // Adiciona um evento de clique no botão "A+"
  aumentar.addEventListener('click', function () {

    // Define um limite máximo de aumento da fonte (130%)
    // Isso evita que o texto fique grande demais
    if (tamanhoFonte < 130) {

      // Aumenta o tamanho da fonte em 10%
      tamanhoFonte += 10;

      // Aplica o novo tamanho da fonte na página
      // document.documentElement representa a tag <html>
      // Isso faz com que todo o site aumente de tamanho
      document.documentElement.style.fontSize = tamanhoFonte + '%';
    }
  });

  // Adiciona um evento de clique no botão "A-"
  diminuir.addEventListener('click', function () {

    // Define um limite mínimo de diminuição da fonte (90%)
    // Evita que o texto fique pequeno demais
    if (tamanhoFonte > 90) {

      // Diminui o tamanho da fonte em 10%
      tamanhoFonte -= 10;

      // Aplica o novo tamanho da fonte na página
      document.documentElement.style.fontSize = tamanhoFonte + '%';
    }
  });

});