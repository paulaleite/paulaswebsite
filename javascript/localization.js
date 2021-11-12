var lang = navigator.language.split('-')[0];

$(document).ready(() => {
    var langIndex = 0;
    if(lang == "pt") {
        langIndex = 1;
    }

    document.getElementById("navAboutMe").innerText = strings["_aboutMe"][langIndex];
    document.getElementById("navProjects").innerText = strings["_projects"][langIndex];
    document.getElementById("introTitle").innerText = strings["_introTitle"][langIndex];
    document.getElementById("intro-p1").innerText = strings["_introP1"][langIndex];
    document.getElementById("intro-p2").innerText = strings["_introP2"][langIndex];
    document.getElementById("intro-p3").innerText = strings["_introP3"][langIndex];
    document.getElementById("highlightTitle").innerHTML = strings["_highlights"][langIndex];
    document.getElementById("projectsTitle").innerHTML = strings["_projects"][langIndex];
})

const strings = {
    _aboutMe: [
        "About me",
        "Sobre mim"
    ],
    _projects: [
        "Portolio",
        "Portfolio"
    ],
    _introTitle: [
        "I'm Paula Torales Leite and I’m an iOS Developer.",
        "Sou Paula Torales Leite e Desenvolvedora iOS."
    ],
    _introP1: [
        "I strive to build efficient, clean and accessible apps through user-centric design and am currently an iOS Mentor at Apple Developer Academy | Mackenzie.",
        " Eu me esforço para criar apps eficientes, limpos e acessíveis por meio de um design centrado no usuário e sou Mentora de iOS na Apple Developer Academy | Mackenzie"
    ],
    _introP2: [ 
        "In addition to my development work, I’m also an avid reader, sharing my love through GoodReads. I’m also a part of a collective called Zero e Umas, which strives to capacite women in the tech world, in Brazil.",
        "Além de desenvolvedora, também sou um leitora ávida, compartilhando meu amor por meio do GoodReads. Também faço parte de um coletivo chamado Zero e Umas, que busca capacitar mulheres no mundo da tecnologia, no Brasil."
    ],
    _introP3: [
        "Come meet some of my work and don’t forget to get in contact with me if you have any questions.",
        "Venha conhecer alguns dos meus trabalhos e não se esqueça de entrar em contato comigo se tiver alguma dúvida."
    ]
}
