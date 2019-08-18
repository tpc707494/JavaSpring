<template>
  <div class="hello">
    index
  </div>
</template>

<script>
import http from '@/util/http'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '1234'
    }
  },
  created () {
    this.fapi({password: '123456'})
  },
  methods: {
    fapi (params) {
      http({
        method: 'get',
        url: `login`,
        params
      })
    }
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
