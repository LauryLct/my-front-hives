<template>
  <div class='container'>
    <router-link to='/'>retour</router-link>

    <div class='hiveInfo'>
      <div class='hive-name h4'>
        <h3>Le nom de la ruche:</h3>

        {{hive.name}}
      </div>
      <div class='hive-weight h4'>
        <h3>Le poids de la ruche:</h3>
        <p>{{hive.weight}} Kg</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hive',
  data() {
    return { hive: []}
  },

  created () {
    const hiveId = this.$route.params.id
    this.$http.get(`http://localhost:3000/api/v1/hives/${hiveId}`)
      .then(response => {
        this.hive = response.data
    })
  },
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
</style>
