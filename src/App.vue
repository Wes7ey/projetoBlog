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

   <header>
        <nav class="Nav">
  <div class="logo">
  <img src="@/assets/Blogger_icon.svg.png" class ="blogIcon"/>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <form class="example">
  <input type="text" placeholder="Search.." name="search" max-width="10%">
  <button type="submit" width="10px"><i class="fa fa-search"></i></button>
  </form>
</div>

  <div class="links">
<a href="https://www.blogger.com/about/?bpli=1#create" style="text-decoration:none" class="link">Crie um blog </a>&ensp;
<a href="https://www.blogger.com/about/?bpli=1" style="text-decoration:none" class="link">Login </a>
  </div>
  </nav>

  </header>
  <div class="conteudo">
    <body>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/create">Novo Post</RouterLink>
    <RouterView :posts="posts" @create-post="addPost" />
  </body>
  


  <footer class="rodape">
      <div>
        <a href="https://www.orkut.com/index_pt.html"><img src="https://cdn-icons-png.flaticon.com/512/4946/4946345.png" width="50px" alt=""></a>
        <a href="https://msn-messenger.softonic.com.br/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Oxygen-actions-im-msn.svg/220px-Oxygen-actions-im-msn.svg.png" width="50px" alt="" ></a>&ensp;
      </div>
  <p class="linkRodape" >Tecnologia do <a href="https://www.blogger.com/about/?bpli=1" style="text-decoration:none">Blogger</a>.</p>
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



.conteudo{
  backdrop-filter: blur(10px);
}
.linkRodape{
  font-size: small;
}
 .rodape{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 }



.link{
  color: black;
  background-color:brown;
  padding: 5px;
  margin: 5px;
  border-radius: 30%;
}
.Nav{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-inline-end: 30vh;
  background-color: crimson;  
  padding: 5px;
}

.links{
  display: flex;
  justify-content: flex-end;
width: 50%;
 margin: 1px;
 text-decoration:none;
 
}

.logo{
  width: 50%;
  display: flex;
  justify-content:flex-start;
}

.blogIcon{
  width: 20px;
}
</style>