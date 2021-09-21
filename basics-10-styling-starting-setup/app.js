const app = Vue.createApp({
    data(){
        return{
        boxASelected:false,
        boxBSelected:false,
        boxCSelected:false,
        }
    },
    computed:{
        boxBClass(){
            return {active: this.boxBSelected};
        }
        
    },
    methods:{
        boxSelected(letra){
           
            if(letra =='A'){
                this.boxASelected = true;
                this.boxBSelected = false;
                this.boxCSelected = false;
            }else if( letra === 'B'){
                this.boxASelected = false;
                this.boxBSelected = true;
                this.boxCSelected = false;
            }else if (letra === 'C'){
                this.boxASelected = false;
                this.boxBSelected = false;
                this.boxCSelected = true;
            }
        }
    }
   

})

app.mount('#styling')