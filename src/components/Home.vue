<template>
  <div id="home">
    <my-header/>
    <users :users="users"></users>
    <table-test></table-test>
    {{title}}
    <Button type="primary">Primary</Button>
    <my-footer @ziTofu="updateTitle($event)"></my-footer>
  </div>
</template>

<script>
  import axios from 'axios'
  import Users from "./Users"
  import Header from "./Header"
  import Footer from "./Footer"
  import TableTest from "./TableTest"

  export default {
    name: 'home',
    components: {
      TableTest,
      Users,
      "my-header": Header,
      "my-footer": Footer,
      "table-test":TableTest
    },
    data: function () {
      return {
        title:"nihao!!",
        users: []
      }
    },
    methods:{
      updateTitle(title){
        this.title=title;
        var set = new Set([1,2,3,4,5]);
        set.add('100');
      }

    },
    created(){
      axios.get("http://jsonplaceholder.typicode.com/users")
        .then((res) => {
          console.log(res);
          this.users=res.data;
        })
    }
  }
</script>

<style scoped>

  h1 {
    text-align: center;
    color: brown;
  }

</style>
