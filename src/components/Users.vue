<template>
  <div>
    <ul class="users">
      <li v-for="user in users">
        <h2>{{user.name}}</h2>
        <h3>{{user.email}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "users",
    props:{
      users:{
        type:Array,
        required:true
      }
    },
    data: function () {
      return {};
    }
  }
</script>

<style scoped>
  div {
    text-align: center;
  }

  .users {
    margin: 40px auto;
    padding: 0 20px;
    max-width: 1000px;
    box-sizing: border-box;
  }

  ul {
    display: flex;
    flex-flow: wrap;
    list-style-type: none;
    padding: 0;
  }

  li {
    flex-grow: 1;
    flex-basis: 200px;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
  }
</style>
