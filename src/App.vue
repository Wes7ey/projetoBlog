<script >
import { RouterLink, RouterView } from 'vue-router'


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
    }
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
<RouterView />
  
  <div id="lista-posts">
    <div class="post" v-for="post in posts" :key="post.key">
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

</template>

<style scoped>

 form{
  display: flex;
  flex-direction: column;
}

form > *{
  margin: 1rem;
}


</style>