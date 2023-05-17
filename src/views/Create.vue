<script>

export default{
    data(){
    return{
      formData:{
        title: "",
        content: "",
      },
    }
 },
 methods:{
    handleCLick(event){

        if(!this.formData.title){
            alert("Preencha o titulo");
            return;
        }
  const now = new Date()
  const dataDaPostagem=`${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`;

        const newPost = {
            title: this.formData.title,
            content: this.formData.content,
            datetime: dataDaPostagem,
        }

        this.$emit("create-post", newPost);

    this.formData = {
        title: "",
        content: "",
    };
    this.$router.push("/")
  },

    handleInputChange(event) {
    const {name, value} = event.target;
    this.formData[name] = value;

      }
    }
}
</script>
<template>

  <form action>
    <input v-model="formData.title" placeholder="Título">
 
    <textarea name= "content" :value="formData.content" @keyup="handleInputChange" id="" cols="30" rows="10" placeholder="Escreva seu post aqui..."></textarea>
    
    <button type="button" @click="handleCLick">Criar</button>

  </form>
</template>

<style scoped>

</style>