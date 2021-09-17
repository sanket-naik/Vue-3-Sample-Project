<template>
  <div>
    {{ user.username }} - {{fullName}}

    <strong>Followers: </strong> {{followers}}

    <button @click="followUser">Follow</button>

    <div v-if="user.isAdmin">
        Admin
    </div>
    <div v-else>
        Not Admin
    </div>

    <div v-for="(item, index) in user.tweets" :key="index">
        {{item.content}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      followers:0,
      user:{
        id:1,
        username:"@_sanket112",
        firstname:"Sanket",
        lastname:"Naik",
        email:"1100sanket@gmail.com",
        isAdmin:true,
        tweets:[
            {
                id:1,
                content:"hello sanket"
            },
            {
                id:2,
                content:"hi How are you"
            }
        ]
      }
    }
  },

  watch:{
    followers(newFollowerCount, oldFollowerCount){
      if(oldFollowerCount < newFollowerCount){
        console.log(`${this.user.username} has gained a follower`)
      }
    }
  },
  computed:{
    fullName(){
      return `${this.user.firstname} ${this.user.lastname}`
    }
  },
  methods:{
    followUser(){
      this.followers++
    }
  },
  mounted(){
    this.followUser()
  }
}
</script>

<style>

</style>
