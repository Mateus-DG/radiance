//menu hamburguer
let menuOpener = document.querySelector('.menu-opener');//nav
let nav = document.querySelector('header nav');
//ouvinte para o eventoclick do menuOpener
menuOpener.addEventListener('click', ()=>{
    if(nav.classList.contains('opened')){
        nav.classList.remove('opened');
        menuOpener.querySelector('.close-icon')
        .style .display='none';
        menuOpener.querySelector('.hamburger-icon')
        .style .display='flex';

    }else{
        nav.classList.add('opened');
        menuOpener.querySelector('.close-icon')
        .style .display='flex';
        menuOpener.querySelector('.hamburger-icon')
        .style .display='none';
    }
});
//TESTEMONIALS
//vetor de objetos contendo as frases e os icones
let testemonials = [
    {quote:'"Mais do que nunca, os carros '+
     'são tratados como membros da familia"', origin:'cbs.svg' },
    {quote:'"Esteticar é um serviço de entrega direto ao '+
        'consumidor, lavados na hora com produtos '+
        'reais. melhores produtos do mundo"',
        origin:'forbes.svg' },
    {quote:'"Esteticar usa produto simples e limpos em '+
        'suas lavagem."', origin:'fox.svg' },
    {quote:'"Vejo você Esteticar como um verdadeiro herói"',
        origin:'sharktank.svg' }
];

//captura os elementos do html usando queryselector
let testemonialQuote = 
document.querySelector('.testemonials .quote');
let testemonialIcons =
document.querySelector('.testemonials .icons');

//repetição para criar as imagens
for(let tindex in testemonials){
    let img = document.createElement('img');
    img.setAttribute('src', './assets/img/'+
        testemonials[parseInt(tindex)].origin);
    img.style.cursor='pointer';
    img.addEventListener('click', 
        ()=>fillTestemonial(parseInt(tindex)));
    testemonialIcons.appendChild(img);
}
//variavel para controlar o testemunho atual
let currentTestemonial = 0;
//variavel para controlar o tempo de cada testemunho
let testemonialTimer;

//função para preencher o testemunho
const fillTestemonial = (index) =>{
    clearTimeout(testemonialTimer);
    currentTestemonial = index;
    //acessa o item quote dentro do vetor de testemunhos
    testemonialQuote.innerHTML =
        testemonials[currentTestemonial].quote;
    let imgs = testemonialIcons.querySelectorAll('img');
    for(let img of imgs) img.style.opacity=0.2;
    imgs[currentTestemonial].style.opacity=1;
    testemonialTimer = setTimeout(nextTestemonial, 3000);
}

//função que passa para o proximo testemunho
const nextTestemonial = () =>{
    if(testemonials[currentTestemonial+1]){
        fillTestemonial(currentTestemonial+1);
    }else{
        fillTestemonial(0);
    }
}
//inicia a exibição dos testemunhos
nextTestemonial();