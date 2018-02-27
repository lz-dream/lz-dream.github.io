<template>
  <footer @click="changeTitle">
    <h3>我们公司</h3>
  </footer>
</template>

<script>
    export default {
        name: "my-footer",
      methods:{
        changeTitle:function () {
          this.$emit("ziTofu","子组件传给了父组件");
        }
      }
    }
</script>

<style scoped>
footer
{
  background: black;
  color: chartreuse;
  padding: 5px;
  text-align: center;
}
</style>
