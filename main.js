function criaCartao (categoria,pergunta,resposta){
let container = document.getElementById('container');
let cartao = document.createElement('article');
cartao.className = 'block';
cartao.innerHTML = ` 
<div class="conteudo-catao">

  <h3>categoria</h3>
  <div class="pergunta-cartao">
    <p>pergunta</p>
  </div>
  
  <div class="respostas-cartao">
    <p>resposta</p>
  </div>
</div>
`
container.appendChild(cartao);

}