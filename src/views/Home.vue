<script >
export default{
  props: {
    posts: Array,
  },
  data() {
    return{
      search: "",
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

};


 </script>

<template >
 

<body>
  <input v-model="search" placeholder="Procure pelo título do post">
  <div id="lista-posts">
    <div class="post" v-for="post in filteredPosts" :key="post.key">
    <h3>{{ post.title }}</h3>
    <h4>{{post.datetime}}</h4>
    <p>{{post.content}}</p>

    </div>
  </div>
</body>


</template>

<style scoped>


</style>
