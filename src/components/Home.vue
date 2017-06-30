<template>
  <div class="home">
    <h1>Homepage</h1>
    <el-row>
      <el-col>
        <image-compare before="http://lorempixel.com/640/480/food/1/" after="http://lorempixel.com/640/480/food/2/"></image-compare>
      </el-col>
    </el-row>
  </div>
</template>

<script>

  export default {
    name: 'hello',
    data () {
      return {
        before: 'http://lorempixel.com/640/480/food/1/',
        after: 'http://lorempixel.com/640/480/food/2/'
      }
    },
    components: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
