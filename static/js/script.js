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


  
function changeLanguage() {
    var languageicon = document.getElementById('language');
    var lang = 'empty'
    if (languageicon.src === 'https://img.icons8.com/color/48/great-britain-circular.png') {
        languageicon.src = 'https://img.icons8.com/fluency/48/brazil-circular.png';
        lang = 'pt-br'
    }

    else {
        languageicon.src = 'https://img.icons8.com/color/48/great-britain-circular.png';
        lang = 'en-us'
    }

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
              'contacts': 'Contato',
              'sendmessage': 'Enviar Mensagem',
  
        },
        'en-us': {
            
            'hello': "Hello! I'm Viktor",
            'cv': "Download CV",
            'job': "Back-End Developer",
            'h1aboutme': "About Me",
            'h4aboutme': 'Back-End Developer with Expertise in Django, Python, JavaScript, MySQL, and Basic Knowledge in Cloud Technologies.',
            'h4aboutme2': 'Currently, I Am Dedicated to Developing Solutions for Small Businesses and Undertaking Personal Projects to Keep Me Constantly Learning',
        
            'h3project1': "BlogMind Aims to Provide Knowledge in Various Areas, Making It Accessible to Everyone. Additionally, We Offer Interactive Pages for Easy Understanding to Enrich Your Experience Even More!",

            'h3project11': "We Are an Open Community, Welcoming Curious Minds in the Search and Sharing of Knowledge. 😊",

            'h3project111': "With a Focus on Languages and Technologies, We Invite You to Contribute If You Have a Unique Perspective or Experience in Both Areas!",

            'h3project21': "ClearMind, Inspired by the Widely Recognized Notion App, Aims to Simplify the Process of Setting Short and Long-Term Goals.",

            'h3project22': "With an Intuitive Visual Interface, We Seek to Provide a Clear and Objective Experience to Help You Achieve Your Daily Goals with Ease, Especially Recommended for Creating a Daily Routine in Your Life.",

        
            'viewcode': 'View Code',
            'viewproject': 'View Project',
            'tech': 'Technologies',
            'projects': 'Projects',
            'project1': 'Project - BlogMind',
            'project2': 'Project - ClearMind',
            'contacts': 'Contact',
            'sendmessage': 'Send Message',
            
        },
    };

      const elements = document.querySelectorAll('[data-translate]');
      
      elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            element.textContent = data[lang][key];
          
      });
  }
  