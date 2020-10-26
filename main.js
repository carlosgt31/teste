
const list = document.querySelector("#lista"); //uma div com id lista
let dados = [];

async function getPosts(){ //coloca o async antes de function 
   const response = await fetch("./dados.json"); //e o await antes do que vai aguardar
   const data = await response.json();
   return data.map((post)=>{ //joga a resposta na div
      return post.nome;
   })

 }

console.log(dados);
list.innerHTML = getPosts();