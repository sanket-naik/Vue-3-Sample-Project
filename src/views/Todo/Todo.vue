<template>
    <h1>{{notes.toUpperCase().toLowerCase()}}</h1>
    <input v-model="notes" type="text"/>

    <a v-bind:href="notes">this is hyperlink</a>
    

    <div>
        <button v-if="editing===false" @click="ShowItem(true)">Add Item</button>
        <button v-else @click="ShowItem(false)">Cancel</button>
    </div>
  
    <div v-if="editing">

        <div v-for="(i, index) in reversedItems" :key="index" @click="ItemStatus(i)" :class="`${i.completed && 'completed'}`">
            {{i.title}}
        </div>
        <div class="listblock">
            <input @keyup.enter="Test()" type="text" v-model="form.todo" />
            <button :disabled="form.todo.length===0" @click="AddTodo()">Add</button>
            <p>{{characterCount}}/100</p>
        </div>
        <div v-if="form.todo">
            Typed:{{form.todo}}
        </div>

        <div>
                High<input type="radio" v-model="priority" value="high" name="prio"/>
                Low<input type="radio" v-model="priority" value="low" name="prio"/>
                <div v-if="priority">
                    {{`Selected: ${priority}`}}
                </div>
        </div>

        <div>
            <select  v-model="priority">
                <option value="high">High</option>
                <option value="low">Low</option>
            </select>
        </div>

            <input v-model="fav" type="checkbox" value="strobery"/> Strobary
            <input v-model="fav" type="checkbox" value="mango"/> Mango
            <input v-model="fav" type="checkbox" value="grape"/> Grape
    </div>
    
</template>

<script>
  export default {
      name:"Todo",
      data(){
          return{
              notes:"Notes",
              priority:'low',
              editing:false,
              fav:[],
              items:[
                  {
                      title:"Pay current bills",
                      completed:false
                  },
                  {
                      title:"Go to party at 4pm",
                      completed:false
                  },
                  {
                      title:"wash your cloths",
                      completed:false
                  }
              ],
              form:{
                  todo:""
              }

          }
      },
      //to change presentation of existing data use computed
      computed:{
          characterCount(){
              return this.form.todo.length
          }, 
          reversedItems(){
              return [...this.items].reverse()
          }
      },
      //to chnage the data use this medthods
      methods:{
          AddTodo(){
              if(this.form.todo){
                this.items.push({title:this.form.todo})
                this.form.todo=""
              }else{
                  alert("Please add a note")
              }
          },
          ItemStatus(data){
              let index=this.items.findIndex(e=>e.title==data.title)
              this.items[index].completed=!this.items[index].completed

              console.log(this.items)
          },
          Test(){
              console.log('Clicked')
          },
          ShowItem(bool){
              this.editing=bool
          }
      }
  }
</script>

<style scoped>

.listblock{
    display:flex;
    margin:auto;
    width: fit-content;
}

.completed{
    color: red;
    text-decoration: line-through;
}

</style>
