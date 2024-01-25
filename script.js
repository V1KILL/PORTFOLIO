window.sr = ScrollReveal({ distance: '200px', reset: true, origin: 'left',
duration: 2000})

sr.reveal('tecnologies')
sr.reveal('projects')
sr.reveal('aboutme')

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
              'aboutmetitle': "Sobre Mim",
              
              'aboutmedescription': 'Desenvolvedor Back-End Com Expertise Em Django, Python, JavaScript, MySQL e Conhecimentos Básicos Em Cloud',

              'aboutmedescriptionmiddle': 'Atualmente, Me Dedico A Desenvolver Soluções Para Pequenos Negócios e Realizar Projetos Pessoais Para Me Manter Em Constante Aprendizado',
              
              'aboutmedescriptionend': `Estou Preparado para Aprender e Agregar Valor ao Sucesso dos Próximos Projetos da Equipe ou Empresa.`,
              
              
              'blogminddescription':'Este Projeto Foi Desenvolvido Para o Compartilhamento do Conteúdo de Diversas Categorias, Específicamente em Tecnologia e Idiomas.',
              'blogminddescriptionend':'Contendo Funcionalidades Avançadas e Opções de Personalização Que Geralmente Você Só Encontra Em Blog Famosos!',
              'clearminddescription':'Este Projeto Foi Desenvolvido com Objetivo em Permitir Com Que os Usuários Definem Suas Metas de Longo e Curto Prazo.',
              'clearminddescriptionend':'Também Possui Uma Interface Fácil De Entender e Personalizar de Acordo Com Seu Interesse Pessoal',
              'viewcode': 'Visualizar Código e Documentação',
              'viewproject': 'Visualizar Projeto',
              'tech': 'Tecnologias',
              'projects': 'Projetos',
              'blogmindtitle': 'Projeto - BlogMind',
              'clearmindtitle': 'Projeto - ClearMind',
              'contacts': 'Enviar Um Email',
              'contact': 'Contatos',
              'sendmessage': 'Enviar Email',
        },
        'en-us': {
            'hello': "Hello! I'm Viktor",
            'cv': "Download CV",
            'job': "Back-End Developer",
            'aboutmetitle': "About Me",    
            'aboutmedescriptionmiddle': 'Currently, I Am Dedicated to Developing Solutions for Small Businesses and Undertaking Personal Projects to Keep Me Constantly Learning',
            'aboutmedescription': 'Back-End Developer with Expertise in Django, Python, JavaScript, MySQL, and Basic Knowledge in Cloud Technologies.',
            'aboutmedescriptionend': `I Am Prepared to Learn and Add Value to The Success of The Team or Company's Next Projects.`,

            'blogminddescription':'This Project Was Developed to Share Content From Various Categories, Specifically in Technology and Languages.',      
            'clearminddescription':'This Project Was Developed With the Aim of Allowing Users to Define Their Long and Short Term Goals.',  
            'blogminddescriptionmiddle':'Containing Advanced Features and Customization Options That You Usually Only Find on Famous Blogs!',  
            'aboutmedescriptionend': `I Am Prepared to Learn and Add Value to The Success of The Team or Company's Next Projects.`,
            'clearminddescriptionend': 'It Also Has an Interface That is Easy to Understand and Customize According to Your Personal Interest.',
            'viewcode': 'View Code and Documentation',
            'viewproject': 'View Project',
            'tech': 'Technologies',
            'projects': 'Projects',
            'blogmindtitle': 'Project - BlogMind',
            'clearmindtitle': 'Project - ClearMind',
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
  