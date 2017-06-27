<template>
  <div id="app">
		<div class="fixed">
		<v-header @this-is-cli='getThisChlid' :aaa='aaa'></v-header>
	  <v-presentation v-show='flag'  @this-is-cli='getThisChlid' :aaa='aaa'></v-presentation>
	  <div class="routers">
	  	<div><a href="#/menu">商品</a></div>
	  	<div><a href="#/evaluation">评价</a></div>
	  	<div><a href="#/merchant">商家</a></div>
	  	<span class="clean"></span>
	  </div>
		</div>
		<router-view :obj="obj"></router-view>
  </div>
</template>

<script>
import axios from 'axios'
import header from './components/header/header.vue'
import presentation from './components/presentation/presentation.vue'

export default {
  name: 'app',
  components: {
    'v-header': header,
    'v-presentation': presentation
  },
  data () {
    return {
      flag: false,
      aaa: {},
      obj: {}
    }
  },
  methods: {
    getThisChlid () {
      this.flag = !this.flag
    }
  },
  created () {
    axios.get('/api/seller')
    .then(response => {
      let { data } = response.data
      this.aaa = { data }
      return 2
    })
    .catch(err => {
      console.log(err)
      return 2
    })
    axios.get('/api/goods')
    .then(response => {
      let { data } = response.data
      this.obj = { data }
      return 2
    })
    .catch(err => {
      console.log(err)
      return 2
    })
  }
}
</script>

<style>
</style>
