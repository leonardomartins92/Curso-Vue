<template>
  <li>
    <h2>{{ name }} {{isFavorite? '(Favorite)': ""}}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ email }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  
  data() {
    return {
      detailsAreVisible: false,
     
    };
  },
  emits:['toggle-favorite'],
  props:{
    id:{
      type: Number,
      required: true
    },
    name:{
      type: String,
      required: true
    },
    email:{
      type: String,
      required: true
    },
    phone:{
      type: String,
      required: true
    },
    isFavorite:{
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite(){
      this.$emit('toggle-favorite', this.id);
    }
  }
};
</script>