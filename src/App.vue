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
		<router-view :obj="obj" @arr='arrs' :counts='count'></router-view>
		  <v-shopcar v-if='flag1' @carshow='carif' :arr='arr' @remove='removes'></v-shopcar>
      <v-footer @carshow='carif' :arr='arr'></v-footer>
  </div>
</template>

<script>
import axios from 'axios'
import header from './components/header/header.vue'
import presentation from './components/presentation/presentation.vue'
import footer from './components/footer/footer.vue'
import shopcar from './components/shopcar/shopcar.vue'

export default {
  name: 'app',
  components: {
    'v-header': header,
    'v-footer': footer,
    'v-shopcar': shopcar,
    'v-presentation': presentation
  },
  data () {
    return {
      flag: false,
      aaa: {},
      obj: {},
      flag1: false,
      price: 0,
      count: 0
    }
  },
  methods: {
    getThisChlid () {
      this.flag = !this.flag
    },
    arrs (val) {
      console.log(this.obj)
    },
    carif () {
      this.flag1 = !this.flag1
    },
    removes (val) {
      for (let j in this.obj.data) {
        for (let k in this.obj.data[j].foods) {
          if (this.obj.data[j].foods[k].count > 0) {
            this.obj.data[j].foods[k].count = 0
          }
        }
      }
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
  },
  computed: {
    arr () {
      let data = []
      for (let j in this.obj.data) {
        for (let k in this.obj.data[j].foods) {
          if (this.obj.data[j].foods[k].count > 0) {
            data.push(this.obj.data[j].foods[k])
          }
        }
      }
      return data
    }
  }
}
</script>

<style>
</style>
