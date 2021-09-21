const app = Vue.createApp({
    data(){
        return{
            entrada: '',
            items: [],
            linkEndereco: 'https://www.google.com.br/',
            html: '<h2>EU SOU UM HTML</h2>',
            counter: 0,
            nome:'',
            sobrenome:'',
        }
    },
    //executa onchange, podem ser usado variaveis do data() ou do computed para serem monitoradas
    watch:{
        nome(){
            console.log("mudou");
        }
    },
    computed:{
        fullName(){
            if(this.nome === ''){
                return '';
            }else{
                return this.nome + ' ' + this.sobrenome;
            }
        }
    },
    methods:{
          salvaEntrada(){
              return Math.random();
          },
          add(){
              this.counter++
          },
          remove(){
            this.counter--
        },
        setNome(event){
            this.nome = event.target.value
        },
        reset(){
            this.sobrenome = ''
        }
        

    }

});

app.mount('#user-goal');