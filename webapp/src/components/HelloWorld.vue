<template>
  <div class="hello">
    {{msg}}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '1234'
    }
  },
  created () {
    console.log('asda')
    // // 创建axios实例
    const service = axios.create({
      baseURL: process.env.BASE_API, // api的base_url
      timeout: 600000, // 请求超时时间
      paramsSerializer: params => {
        // return qs.stringify(params, { indices: false })
      }
    })
    // service.interceptors.request.use(config => {
    //   console.log(config)
    // })
    service.interceptors.response.use(response => {
      console.log(response)
    })
    service({
      method: 'get',
      url: `login`
    })
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
