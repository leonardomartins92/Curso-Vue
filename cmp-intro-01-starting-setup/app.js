const app = Vue.createApp({
    data(){
        return{
            friends: [
                {
                id: '1',
                nome: 'Leo',
                email: 'email@hot' 
                },
                {
                    id: '2',
                    nome: 'Ju',
                    email: 'email@hot' 
                }
            ]
        }
    }
})


app.component('friend-contact', {
    template: `<h2>MODELO DO COMPONENTE</h2>`,
    data(){
          return{ 
              detailsAreVisible: false,
              
          }
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    },
    computed:{},
    watch:{},

});

app.mount('#app')