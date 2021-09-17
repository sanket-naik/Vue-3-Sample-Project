<template>
    <div :class="color">hello sanket ---------- {{msg1}} -- {{msg2}} --- {{firstname}}</div>
    <img :src="picture" />
    <button @click="HandleClick(`dwdeded`)">CLick me</button>
</template>

<script>

export default {
    name:"Test",
    props:{
        msg1:String,
        msg2:String
    },
    data(){
        return{
            firstname:"ytegudebudheudhuyeu",
            picture:"https://picsum.photos/200/300",
            color:"blue"
        }
    },
    methods:{
        HandleClick:(msg)=>{
            console.log(`${msg}`)
        }
    }
}

</script>

<style scoped>
    .red{
        color: red;
    }
    .blue{
        color: blue;
    }
</style>