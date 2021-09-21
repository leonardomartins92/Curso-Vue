const app = Vue.createApp({
  data() {
    return {
       goals: [],
      
      };
  },
  methods:{
    addGoal(){
      this.goals.push(this.$refs.entrada.value) 
    },
    removeGoal(index){
      this.goals.splice(index,1);
    }
  },

  
  beforeCreated(){
    console.log("Antes")
  },

  created(){
    console.log("Qdo cria")
  },

  beforeMount(){
    console.log("Antes de montar");
  },

 mounted(){
    console.log("montado");
  },

  beforeUpdate(){
    console.log("Antes de update")
  },

  update(){
    console.log("update")
  },

  beforeUnmount(){
    console.log("Antes de destruir")
  },

  unmounted(){
    console.log("destruido")
  }
});

app.mount('#user-goals');
