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
<h2>{{ post.title }}</h2>

<textarea readonly :value="post.content"></textarea>

</template>

<style scoped>
textarea {
    resize: none;
    outline: none;
    border: none;

    width: 80%
    }
</style>