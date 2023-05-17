<script >
import { RouterLink, RouterView } from 'vue-router'
import "@/assets/base.css"


export default{
  data(){
    return {
      posts:[],
    };
  },
  methods: {
    addPost(newPost) {
      this.posts.push(newPost);
    },
  },
 }



</script>

<template>
  <div class="conteudo">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/create">Novo Post</RouterLink>
    <RouterView :posts="posts" @create-post="addPost" />

  


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



/* form{
  display: flex;
  background-color: transparent;
  margin-top: 10%;
  justify-content: center;

}

form > *{
  margin: 1rem;
} */

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
</style>