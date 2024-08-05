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
    if (languageicon.src === 'https://img.icons8.com/color/48/usa-circular.png') {
        languageicon.src = 'https://img.icons8.com/fluency/48/brazil-circular.png';
        lang = 'pt-br'
    }
    else {
        languageicon.src = 'https://img.icons8.com/color/48/usa-circular.png';
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
              'listmindtitle':'Projeto - ListMind',
              'listminddescription':'Este Projeto Foi Desenvolvido para Gerenciar os Serviços de Sua Empresa de Forma Rápida e Prática, Acompanhado de Um Dashboard Contendo Informações Como: Faturamento Mensal, Quantidade de Serviços Registrados, Concluidos e em Garantia.',


              'coursefytitle': 'Projeto - Coursefy',
              'coursefydescription':'Este Projeto Foi Desenvolvido Para Você Criar Seu Próprio Curso Contendo Várias Funcionalidades Como Outras Plataformas de Curso Profissionais',
              'coursefydescriptionend':'Com Um Belíssimo Design Inspirado Pelo Curso do Abraham Nomeado Como "Editor Zen", Você Terá Uma Experiência Maravilhosa!',

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
            'blogminddescriptionend':'Containing Advanced Features and Customization Options That You Usually Only Find on Famous Blogs!',  
            'aboutmedescriptionend': `I Am Prepared to Learn and Add Value to The Success of The Team or Company's Next Projects.`,
            'clearminddescriptionend': 'It Also Has an Interface That is Easy to Understand and Customize According to Your Personal Interest.',
            'listmindtitle':'Project - ListMind',
            'listminddescription': "This Project Was Developed to Manage Your Company's Services Quickly and Conveniently, Accompanied By a Dashboard Containing Information Such as Monthly Revenue, Number of Services Registered, Completed, and Under Warranty",
            'viewcode': 'View Code and Documentation',
            'viewproject': 'View Project',
            'tech': 'Technologies',
            'projects': 'Projects',
            'blogmindtitle': 'Project - BlogMind',
            'clearmindtitle': 'Project - ClearMind',


            'coursefytitle':'Project - Coursefy',
            'coursefydescription':'This Project Was Developed for You Create Your Own Course With Many Functions Like Other Professional Course Platforms.',
            'coursefydescriptionend':"With a Beautiful Design Inspired by Abraham's Course Named 'Editor Zen', You'll Have a Wonderful Experience!",

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
  