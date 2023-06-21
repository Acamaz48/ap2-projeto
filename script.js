window.onload = () => {
    carregarJogadores()
}

//puxando os elementos
let elencoFeminino = document.getElementById('elenco-feminino')

let elencoMasculino = document.getElementById('elenco-masculino')




//functions
const carregarJogadores = () => {  
   jogadores.forEach((jogador, indice)=>{
        if(jogador["elenco"] == "feminino"){
            elencoFeminino.innerHTML += `

            <div class="jogador" id="jogador${indice}" onclick="salvarInformacoes(${indice})">
                <img src="${jogador["imagem"]}">
                <span>${jogador["nome"]}</span>
            </div>
    
            `;

        } else {
            elencoMasculino.innerHTML += `

            <div class="jogador" id="jogador${indice}" onclick="salvarInformacoes(${indice})">
              
                <img src="${jogador["imagem"]}">
                <span>${jogador["nome"]}</span>
            </div>
    
            `;
        }
        
   })
}





function salvarInformacoes(indiceJogador) {
    const jogador = jogadores[indiceJogador];
    console.log('falhou')
    localStorage.setItem('@Nome', jogador.nome)
    localStorage.setItem('@Imagem', jogador.imagem)
    localStorage.setItem('@Posicao', jogador.posicao)
    localStorage.setItem('@Descricao', jogador.descricao)
    localStorage.setItem('@NomeCompleto', jogador.nome_completo)
    localStorage.setItem('@Nascimento', jogador.nascimento)
    localStorage.setItem('@Altura', jogador.altura);



    window.location.href = './aprofundando.html'
}

