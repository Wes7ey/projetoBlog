<script >
import { RouterLink, RouterView } from 'vue-router'
import "@/assets/base.css"


export default{
  data(){
    return {
      posts:[
        {
        title:'Meu Primeiro Post',
        datetime: Date.now(),
        content: 'Postar aqui é muito legal'

         },
         {
        title:'Meu Segundo Post',
        datetime: Date.now(),
        content: 'Postar aqui é muito legal'
        },
      ],
      formData:{
        title: "",
        content: "",
      },
      search:"",
    };
  },
  computed:{
    filteredPosts() {

      if(!this.search) return this.posts;

      const listaFiltrada = [];
        for (const post of this.posts){
          if (post.title.includes(this.search)){
            listaFiltrada.push(post);
          }
        }
      return listaFiltrada;
    },
  },
  methods:{
    handleCLick(event){
  const now = new Date()
  const dataDaPostagem=`${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`;

      this.posts.push ({
      title: this.formData.title,
      content: this.formData.content,
      datetime: dataDaPostagem,
        
    })
  },

    handleInputChange(event) {
    const {name, value} = event.target;
    this.formData[name] = value;

      }
    }
  }



</script>

<template>
  <div class="conteudo">
<RouterView />

<input v-model="search" placeholder="Procure pelo titulo do post..." />

  <div id="lista-posts">
    <div class="post" v-for="post in filteredPosts" :key="post.key">
    <h3>{{ post.title }}</h3>
    <h4>{{post.datetime}}</h4>
    <p>{{post.content}}</p>

    </div>
  </div>

  <form action>
    <input v-model="formData.title" placeholder="Título">
 
    <textarea name= "content" :value="formData.content" @keyup="handleInputChange" id="" cols="30" rows="10" placeholder="Escreva seu post aqui..."></textarea>

    <button type="button" @click="handleCLick">Criar</button>

  </form>

  <footer class="rodape">
      <div class="social-icons">
        <a href="https://www.orkut.com/index_pt.html"><img src="https://cdn-icons-png.flaticon.com/512/4946/4946345.png" width="50px" alt=""></a>
        <a href="https://msn-messenger.softonic.com.br/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Oxygen-actions-im-msn.svg/220px-Oxygen-actions-im-msn.svg.png" width="50px" alt=""></a>
      </div>
      
  <p class="linkRodape" >Tecnologia do <a href="https://www.blogger.com/about/?bpli=1" style="text-decoration:none" >Blogger</a>.</p>
</footer>
</div>
</template>

<style scoped>

footer {
  display: flex;
  background-color: transparent;
  margin-top: 10%;
  justify-content: center;

}

.social-icons {
  font-size: 24px;
  margin-bottom: 15px;
  justify-content:space-between;

}

.social-icons a {
  display: inline-block;
  margin-right: 20px;
  color: greenyellow;
  transition: color 0.2s;
}

.conteudo{
  backdrop-filter: blur(10px);
}
.linkRodape{
  font-size: small;
}
 .rodape{
  display: flex;
  justify-content: center;
 }


  form{
  display: flex;
  flex-direction: column;
}

form > *{
  margin: 1rem;
}


</style>