window.onload = () => {
    lerInfos();
}

let divDetalhes = document.getElementById('detalhes');
let btVoltar = document.getElementById('voltar');

btVoltar.addEventListener('click',()=>{
    windown.location.href = '../';
});

function lerInfos(){
    divDetalhes.innerHTML = `
    <img src="${localStorage.getItem('@Imagem')}">



    <h1>${localStorage.getItem('@Nome')}</h1>
    <h2>${localStorage.getItem('@Posicao')}</h2>
    <p>${localStorage.getItem('@Descricao')}</p>
    <div id="div-informacoes">
        <span class="informacoes">
            <strong>Nome completo: </strong> 
            <span> ${localStorage.getItem('@Nome')} </span>
        </span>
    
        <span class="informacoes">
            <strong>Altura: </strong> 
            <span> ${localStorage.getItem('@Altura')} </span>
        </span>

        <span class="informacoes">
            <strong>Nascimento: </strong> 
            <span> ${localStorage.getItem('@Nascimento')} 
            </span>
        </span>
    </div>
    `;
}
    


