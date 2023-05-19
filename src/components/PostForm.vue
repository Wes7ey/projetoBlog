<script>
export default {
    props: {
        post: Object,
    },
  data() {
    return {
      formData: {
        title: this.post?.title || "",
        content: this.post?.content || "",
      },
    };
  },
  methods: {
    handleCreatePost(event) {
      if (!this.formData.title) {
        alert("Preencha o titulo");
        return;
      }
      const now = new Date();
      const dataDaPostagem = `${now.getDate()}/${
        now.getMonth() + 1
      }/${now.getFullYear()}`;

      const newPost = {
        title: this.formData.title,
        content: this.formData.content,
        datetime: dataDaPostagem,
      };

      this.$emit("create-post", newPost);

      this.formData = {
        title: "",
        content: "",
      };
      this.$router.push("/");
    }
  },
};
</script>

<template>
    <form action>
      <input v-model="formData.title" placeholder="Título" />
  
      <textarea v-model="formData.content"
        cols="30"
        rows="10"
        placeholder="Escreva seu post aqui..."
      ></textarea>
  
      <button type="button" @click="handleCreatePost">Criar</button>
    </form>
  </template>