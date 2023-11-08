// Durante a primeira interação
function registrarPreferenciaTelaCheia() {
    localStorage.setItem('preferenciaTelaCheia', 'true');
    criarAtalhoNaTelaInicial();
  }
  
  // Nas visitas subsequentes
  function verificarEAplicarTelaCheia() {
    const preferenciaTelaCheia = localStorage.getItem('preferenciaTelaCheia');
    if (preferenciaTelaCheia === 'true') {
      // Chame o método para colocar o aplicativo em tela cheia
      requestFullScreen();
    }
  }
  
  // Função para criar o atalho na tela inicial
  function criarAtalhoNaTelaInicial() {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  
    if (isIOS) {
      alert('Para adicionar o aplicativo à tela inicial, toque no ícone de compartilhamento e escolha "Adicionar à Tela Inicial".');
    } else {
      alert('Para adicionar o aplicativo à tela inicial, toque no botão do navegador e escolha "Adicionar à Tela Inicial".');
    }
  }
  
  // Função para solicitar tela cheia
  function requestFullScreen() {
    const element = document.documentElement;
  
    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
  }
  
  // Exemplo de chamada na inicialização do aplicativo
  verificarEAplicarTelaCheia();
  