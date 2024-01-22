window.sr = ScrollReveal({ distance: '200px', reset: true})
sr.reveal('tecnologies', {
    origin: 'left',
    duration: 1500
})

sr.reveal('projects', {
    origin: 'left',
    duration: 1500
})

sr.reveal('aboutme', {
    origin: 'left',
    duration: 1500
})




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
              'h4aboutme2': 'Atualmente, Me Dedico A Desenvolver Soluções Para Pequenos Negócios e Realizar Projetos Pessoais Para Me Manter Em Constante Aprendizado',

              
              'h3project1':'Este Projeto Foi Desenvolvido Para o Compartilhamento do Conteúdo de Diversas Categorias, Específicamente em Tecnologia e Idiomas.',
              
              'h3project11':'Contendo Funcionalidades Avançadas e Opções de Personalização Que Geralmente Você Só Encontra Em Blog Famosos!',
              
              
              
              'h3project21':'Este Projeto Foi Desenvolvido com Objetivo em Permitir Com Que os Usuários Definem Suas Metas de Longo e Curto Prazo.',
              
              'h3project22':'Também Possui Uma Interface Fácil De Entender e Personalizar de Acordo Com Seu Interesse Pessoal',

              
  
              'viewcode': 'Visualizar Código e Documentação',
              'viewproject': 'Visualizar Projeto',
              'tech': 'Tecnologias',
              'projects': 'Projetos',
              'project1': 'Projeto - BlogMind',
              'project2': 'Projeto - ClearMind',
              'contacts': 'Mandar Um Email',
              'contact': 'Contatos',
              'sendmessage': 'Enviar Email',
  
        },
        'en-us': {
            
            'hello': "Hello! I'm Viktor",
            'cv': "Download CV",
            'job': "Back-End Developer",
            'h1aboutme': "About Me",
            'h4aboutme': 'Back-End Developer with Expertise in Django, Python, JavaScript, MySQL, and Basic Knowledge in Cloud Technologies.',
            'h4aboutme2': 'Currently, I Am Dedicated to Developing Solutions for Small Businesses and Undertaking Personal Projects to Keep Me Constantly Learning',
        
           
            'h3project1':'This Project Was Developed to Share Content from Various Categories, Specifically in Technology and Languages.',
              
            'h3project11':'Containing Advanced Features and Customization Options That You Usually Only Find on Famous Blogs!',
            
            
            
            'h3project21':'This Project was developed with the aim of allowing users to define their long and short term goals.',
            
            'h3project22': 'It also has an interface that is easy to understand and customize according to your personal interest.',

        
            'viewcode': 'View Code and Documentation',
            'viewproject': 'View Project',
            'tech': 'Technologies',
            'projects': 'Projects',
            'project1': 'Project - BlogMind',
            'project2': 'Project - ClearMind',
            'contacts': 'Send an Email',
            'contact': 'Contacts',
            'sendmessage': 'Send Email',
            
        },
    };

      const elements = document.querySelectorAll('[data-translate]');
      
      elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            element.textContent = data[lang][key];
          
      });
  }
  