function criaCartao(categoria, pergunta, resposta){
 let container = document.getElementById('container')
 let cartao = document. createElement('article')
 cartao.className = 'cartao'
 cartao.innerHTML = 
 <div class="cartao__conteudo"> 
      <h3>programação</h3>
      </div> class="cartao__conteudo__pergunta">
      <p>0 o que é CSS? </p>
      </div>
      <div class='cartao__conteudo__resposta">
      <p> ${resposta}<p>
      </div>
     </div>iv>
     
     

let respostaEstavisivel = false

     container.appendChild (cartao)
}