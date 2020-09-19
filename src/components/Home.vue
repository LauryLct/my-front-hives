<template>
  <div class='hive container text-center'>
    <h1 class='p-3'>Liste de vos ruches</h1>

    <div class='hiveList'>
      <ul>
        <li v-for='hive in hives' :key='hive.id' :hive='hive'>
          {{hive.name}}
          <router-link :to='`/hives/${hive.id}`'>voir</router-link>
        </li>
      </ul>
    </div>

    <div class='hive-form'>
      <h3 class='pb-4'>Ajoutez votre propre ruche</h3>
      <form @submit='addHive'>
        <div class='form-group'>
          <input type='text'
                class='form-control'
                v-model='newHive.name'
                placeholder='Ajoutez le nom de votre ruche'>
        </div>
        <div class='form-group'>
          <input type='text'
                class='form-control'
                id='exampleInputPassword1'
                v-model='newHive.weight'
                placeholder='Ajoutez le poids de votre ruche'>
        </div>
        <button type='submit' class='btn btn-primary'>Ajoute ta ruche</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {

  name: 'Home',

  data() {
    return{
      hives: [],
      newHive: []
    }
  },
  created () {
    this.$http.get('http://localhost:3000').then(response => {
      this.hives = response.data
    })
  },

  methods: {
    addHive() {
      const value = this.newHive
      if(!value) {
        return
      }
      this.$http.post('http://localhost:3000/api/v1/hives', {
        hive: {
          name: this.newHive.name,
          weight: this.newHive.weight}})
          .then(response => {
            this.hives.push(response.data)
            this.newHive= ''
          })
          .catch(error => this.setError(error,"impossible d'ajouter la ruche"))
    }
  },

  computed: {
    hiveList() {
      return this.getters.home
    }
  }
}
</script>

// <!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {

  margin: 0 10px;
  padding: 10px;
}
a {
  color: #42b983;
}

.form-group {
  padding-left: 10%;
  padding-right: 10%;
}
</style>
