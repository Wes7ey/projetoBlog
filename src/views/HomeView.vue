<script >



 </script>

<template>
<body>
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
<a href="https://www.blogger.com/about/?bpli=1#create" style="text-decoration:none">Crie um blog </a>&ensp;
<a href="https://www.blogger.com/about/?bpli=1" style="text-decoration:none">Login </a>
  </div>
  </nav>

</body>
</template>

<style scoped>
.Nav{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  padding-inline-end: 30vh;
  width:100%;
  color: #012E40;
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
