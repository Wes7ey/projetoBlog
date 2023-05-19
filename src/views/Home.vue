<script>
import { RouterLink } from "vue-router";

export default {
  props: {
    posts: Array,
  },
  data() {
    return {
      search: "",
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
  },
};
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
        </h3>
        <h4>{{ post.datetime }}</h4>
        <p>{{ post.content }}</p>
      </div>
    </div>
  </body>
</template>

<style scoped></style>
