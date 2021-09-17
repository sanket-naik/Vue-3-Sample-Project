<template>

  <div>
    <router-link to="/test">Nav 1</router-link> &nbsp; &nbsp;
    <router-link to="/abcd">Nav 2</router-link>

  </div>

  <button @click="GoBack">Go Back</button>
  <button @click="Redirect">Redirect</button>
  <button @click="GoForword">Go Forword</button>

  <router-view/>
</template>

<script>
export default {
  name:"App",
    methods:{
        GoBack(){
          // go backword 1 step
            this.$router.go(-1)
        },
        GoForword(){
          // to forword 1 step
            this.$router.go(1)
        },
        Redirect(){
          // redirects to home
          this.$router.push('/')
        }
    }
}
</script>
  
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
