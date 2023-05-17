<script >



 </script>

<template >
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
<body>


</body>


</template>

<style scoped>


.link{
  color: black;
  background-color:brown;
  padding: 5px;
  border-radius: 30%;
}
.Nav{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding-inline-end: 30vh;
  width:100%;
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
