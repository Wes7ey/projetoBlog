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
    <input v-model="search" placeholder="Procure pelo título do post" />
    <div id="lista-posts">
      <div class="post" v-for="(post, index) in filteredPosts" :key="post.key">
        <h3>
          {{ post.title }}
          <RouterLink :to="`/edit/${getPostId(post.title)}`"
            ><span class="material-symbols-rounded">Edit</span>
          </RouterLink>
          <span class="material-symbols-rounded" @click="setupModal (getPostId(post.title))">Delete</span>

        </h3>
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
        <button class="bg-sucess" @click="deletePost">Confirmar</button>

      </div>
      </div>
      
    </div>
  </body>
</template>

<style scoped>
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
  background-color: green;
  display: flex;
  flex-direction: column;
    justify-content: center;
    align-items: center;

    width:80%;
    max-width: 800px;

    border-radius: 4px;
  }

  .bg-error{
    background: red;
  }

  .bg-sucess{
    background: gray;
  }
</style>
