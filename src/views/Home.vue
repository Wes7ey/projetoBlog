<script>
import { RouterLink } from "vue-router";

export default {
  props: {
    posts: Array,
  },
  data() {
    return {
      search: "",
      showModal: false,
      selectedPost: null,
    };
  },
  computed: {
    filteredPosts() {
      if (!this.search) return this.posts;

      const listaFiltrada = [];
      for (const post of this.posts) {
        if (post.title.includes(this.search)) {
          listaFiltrada.push(post);
        }
      }
      return listaFiltrada;
    },
  },
  methods: {
    getPostId(title) {
      for (const index in this.posts) {
        const post = this.posts[index];
        if (post.title === title) return index;
      }
    },
    setupModal(id){
    this.showModal = !this.showModal;
    if(id){
      this.selectedPost = this.posts[id];
      return;
    }
    this.selectedPost = null;
    },

    deletePost(){
      const id = this.getPostId(this.selectedPost.title);

      this.$emit("delete-post", id);
      this.setupModal();
    }
  },
  }

</script>

<template>
  <body>
    <input v-model="search" id="Box" placeholder="Procure pelo título do post" />
    <div id="lista-posts">
      <div class="post" v-for="post in filteredPosts" :key="post.key">
       <div class="flex">
        <RouterLink :to="`/detail/${getPostId(post.title)}`">
          <h3>
          {{ post.title }} 
        </h3>
      </RouterLink>
        
        <RouterLink :to="`/edit/${getPostId(post.title)}`"
            ><span class="material-symbols-rounded">Edit</span>
          </RouterLink>
          <span class="material-symbols-rounded" @click="setupModal (getPostId(post.title))">Delete</span>

      </div>

        <h4>{{ post.datetime }}</h4>
        <p>{{ post.content }}</p>
      </div>

    </div>
    <div class="modal" v-show="showModal">
      <div class="modal-content">
        <h3>Deletar Post</h3>
        <p> Tem certeza que quer deletar o post '{{selectedPost?.title}}'?</p>
      <div class="buttons-actions">
        <button class="bg-error" @click="setupModal">Cancelar</button>
        &ensp;&ensp;&ensp;&ensp;&ensp;
        <button class="bg-sucess" @click="deletePost">Confirmar</button>

      </div>
      </div>
      
    </div>
  </body>
</template>

<style scoped>

#lista-posts{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
}

h4{
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: left;
  font-size: small;
  padding-left: 400px;
  padding-bottom: 10px;

}

p{
  display: flex;
align-items: center;
justify-content: center;
text-align: justify;
/* margin-left: 180px;
 */;
width: 50%;
margin-bottom: 10px;
backdrop-filter: blur(12px);
color: aliceblue;
font-weight: bold;

padding: 5%;

}



body{
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 60%;
}

#Box {
text-align: center;
width: 60%;
height: 4vh;
margin: 50px;
background-color:   #ffff00;
border-style: dashed;

}

#Box:hover{
background-color:   #ffffb2
;}

#posts{
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
}

h3{
  font-size:x-large;
  display: flex;
  justify-content:flex-start;
  padding-bottom: 10px;
  text-shadow: #ffffb2 2px 2px 2px;


}
.modal{
    position: absolute;
    width: 100vw;
    height: 100vh;

    background: rgba(0,0,0,0.2);
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  
} 

.modal-content{
  background-color: gold;
  display: flex;
  flex-direction: column;
    justify-content: center;
    align-items: center;

    max-width: 350px;

    border-radius: 4px;
    padding-bottom: 10px;
    padding-top: 10px;
  }

  .bg-error{
    background: red;
  }

  .bg-sucess{
    background: green;
  }

  .flex{
    display: flex;
    align-items: center;
    justify-content: center;
  } 

  .material-symbols-rounded{
    color:orangered
  }

  .post{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  
</style>
