<script>
import { RouterLink, RouterView } from "vue-router";
import "@/assets/base.css";

export default {
  data() {
    return {
      posts: [
        {
          title: "Vira-lata caramelo encontrada no lixão não para de sorrir após ser salva",
          datetime: "18/05/2023",
          content: "Uma cachorra vira-lata caramelo que nasceu em um depósito de lixo em Tijuana, no México, pode ter tido um início de vida difícil, mas isso não tirou a alegria do seu olhar e nem a sua doçura. Residente do abrigo de animais No Dog Left Behind (NDLB) localizado em Minessota (EUA), a pet foi batizada Smile — sorriso em inglês",
        },
        {
          title: "Cão Golden fica famoso por se aconchegar em pessoas desconhecidas durante viagem de trem",
          datetime: "18/05/2023",
          content: "Os irmãos caninos Hugo e Huxley, ambos da raça golden retriever, que vivem em Londres, na Inglaterra, fazem o maior sucesso nas redes sociais. Mas a fama maior se dá no trem da cidade em que vivem, pois eles adoram oferecer 'lambeijo' aos passageiros. Por sua vez, as pessoas adoram!"

        },
      ],
    };
  },
  methods: {
    addPost(newPost) {
      this.posts.push(newPost);
    },
    updatePost(updatePost, id){
      this.posts[id] = updatePost;
    },
    removePost(id) {
      const minhaNovaLista = [];

      for (const index in this.posts){
        if (index ==id) {
          continue;
        }

        const post = this.posts[index];
        minhaNovaLista.push(post);
      }
      this.posts = minhaNovaLista;
    }
  },
};
</script>

<template>

  <header>
    <button>
    <RouterLink to="/">Home</RouterLink>
  </button>
    &ensp;&ensp;&ensp;&ensp;&ensp; 
  <button>
    <RouterLink to="/create">Novo</RouterLink>
  </button>
  </header>
 
  <main>
      <RouterView :posts="posts" @create-post="addPost" @edit-post="updatePost" @delete-post="removePost"/>
  </main>

    
</template>

<style scoped>
button{
  background-color:khaki; 
  border: none;
  color: white;
  padding: 15px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border: 1px solid white;
  border-radius: 30%;
}

button:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

header{
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: gold;
 padding: 15px;
}

main{
 background-image: url(https://helios-i.mashable.com/imagery/articles/00apgKgIAO4EnFfjOgCApRe/hero-image.fill.size_1248x702.v1619086604.jpg);
background-size: cover;
 background-repeat: no-repeat;




  height: 87vh;
 padding-top: 2%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding-left: 80px;
  padding-right: 80px;
  margin: 1;
}




/* form{
  display: flex;
  background-color: transparent;
  margin-top: 10%;
  justify-content: center;

}

form > *{
  margin: 1rem;
} */
/* 
.area{
  position: absolute;
  flex-direction: column;
  width: 199%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  background-color: black;

}
.routerLinks {
  padding-left: 600px;


}

.conteudo {
  backdrop-filter: blur(10px);
}

.linkRodape {
  font-size: small;
}
.rodape {
  width: 100%;
  height: 7vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFD700;

}

.link {
  color: black;
  background-color: #FAFAD2;
  padding: 5px;
  margin: 5px;
  border-radius: 30%;
}

header{
  position: absolute;
}
.Nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-inline-end: 30vh;
  background-color: #FFD700;
}

.links {
  display: flex;
  justify-content: flex-end;
  width: 50%;
  margin: 1px;
  text-decoration: none;
}

.logo {
  width: 50%;
  display: flex;
  justify-content: flex-start;
}



main{
 
  
  position: fixed;
    width: 100vw;
    height: 80vh;
    top: 0;
    left: 0;
/*     background-image: url(https://files.tecnoblog.net/wp-content/uploads/2021/06/DOGE-e1623964504179.png);
 */   /*  background-repeat: no-repeat; */
    /* padding-right: 200px;
    padding-left: 200px;
    background-color: azure;
}

.corpoPagina{

  backdrop-filter: blur(20px);

} */
</style>
