var header = document.getElementById("header");

window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.transition = '0.3s padding ease'
        header.style.backdropFilter = "blur(10px)";
        header.style.padding = '35px'
  } else {
        header.style.padding = '10px'
        header.style.backgroundColor = "transparent";
  }
};

const data = {
      'pt-br': {
            'hello': 'Olá!, Eu Me Chamo Viktor',
            'cv': "Baixar Currículo",
            'job': "Desenvolvedor Back-End",
            'h1aboutme': "Sobre Mim",
            'h4aboutme': 'Desenvolvedor Back-End Com Expertise Em Django, Python, JavaScript, MySQL e Conhecimentos Básicos Em Cloud',
            'h4aboutme2': 'Atualmente, me dedico a desenvolver soluções para pequenos negócios e realizar projetos pessoais para me manter em constante aprendizado',

            'h3project1': 'O BlogMind tem como objetivo disponibilizar conhecimento em diversas áreas, tornando-o acessível a todos. Além disso, oferecemos páginas interativas de fácil compreensão para enriquecer ainda mais sua experiência!',

            'h3project11': 'Somos uma comunidade aberta, acolhendo mentes curiosas na busca e compartilhamento de conhecimento.😊',

            'h3project111': 'Com uma interface focada em linguagens e tecnologias, convidamos você a contribuir caso tenha uma perspectiva ou experiência única em ambas as áreas!',

            'h3project21': 'ClearMind, inspirado no amplamente reconhecido aplicativo Notion, visa simplificar o processo de definição de metas de curto e longo prazo.',

            'h3project22': "Com uma interface visual intuitiva, buscamos proporcionar uma experiência clara e objetiva para ajudá-lo a atingir seus objetivos diários com facilidade, sendo especialmente recomendado para criar uma rotina diária em sua vida.",

            'viewcode': 'Visualizar Código',
            'viewproject': 'Visualizar Projeto',
            'tech': 'Tecnologias',
            'projects': 'Projetos',
            'project1': 'Projeto - BlogMind',
            'project2': 'Projeto - ClearMind',
            'contact': 'Contato',
            'sendmessage': 'Enviar Mensagem',


      },
  };
  
  function changeLanguage(lang) {
      const elements = document.querySelectorAll('[data-translate]');
      
      elements.forEach(element => {
          const key = element.getAttribute('data-translate');
          element.textContent = data[lang][key];
      });
  }
  