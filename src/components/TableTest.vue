<template>
  <div id="table">
    <Table :columns="column" :data="data1"></Table>
  </div>

</template>

<script>
    export default {
        name: "table-test",
      data:function () {
        return{
          column:[
            {title:'column1',key:'one'},
            {title:'column2',key:'two'}
          ],
          data1:[
            {one:'aaaa',two:22222},{one:'aaaa',two:22222},{one:'aaaa',two:22222},{one:'aaaa',two:22222},{one:'aaaa',two:22222},
            {one:'aaaa',two:22222},{one:'aaaa',two:22222},{one:'aaaa',two:22222},{one:'aaaa',two:22222},{one:'aaaa',two:22222}
          ]
        }
      }
    }
</script>

<style scoped>
#table{
  width: 1200px;
  margin: auto;
}
</style>
