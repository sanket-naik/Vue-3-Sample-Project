<template>
    <div class="name">hello sanket ---------- {{msg1}} -- {{msg2}}</div>
</template>

<script>

export default {
    name:"Test",
    props:['msg1', 'msg2']
}

</script>

<style scoped>
    .name{
        color: red;
    }
</style>