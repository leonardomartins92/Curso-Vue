<template>
   <form @submit.prevent="saveFriend">
        <div>
        <label>Name</label>
        <input type="text" v-model="name">
        </div>
        <div>
        <label>Email</label>
        <input type="email" v-model="email">
        </div>
        <div>
        <label>Phone</label>
        <input type="tel" v-model="phone">
        </div>
        <button type="submit">Save</button>
    </form>
</template>

<script>
export default {
    data() {
        return{
            name:'',
            email:'',
            phone:''
        }
    },
    methods:{
        saveFriend(){
            this.$emit('save-friend',this.name, this.email, this.phone)
        }
    },
    emits:['save-friend']
}
</script>


