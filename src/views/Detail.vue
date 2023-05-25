<script>

    export default {
        props: {
            posts: Array,
        },
        data() {

            const id = this.$route.params.id;

            return{
                id: id,
                post: this.posts[id],
            };
        },
        
            
     };

</script>

<template>
    <body>
<h2>{{ post.title }}</h2>

<textarea  readonly :value="post.content"
cols="50"
rows="10"

></textarea>
<RouterLink :to="`/`"><button> Voltar</button>
</RouterLink>
</body>
</template>

<style scoped>
textarea {
    resize: none;
    outline: none;
    border: none;

    width: 100%;
    padding: 10px;
    background-color: inherit;

    display:flex;
    justify-content: center;
    align-items: center;
    text-align: justify;
    }

    body{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(12px);
    padding-bottom: 10px;

    }

    button{
    }
</style>