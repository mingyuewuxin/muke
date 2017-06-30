<template>
	<div class="menu">
	   <v-particulars></v-particulars>
      <div class="left">
	      <div class="details" :class="classs[key]" v-for="(items,key) in obj.data" @click="cli(key)">
	      	{{items.name}}
	      </div>
      </div>
      <div class="right" @click.native="move()" ref='right'>
      	<div class="classify" ref='profile' v-for="(item,key) in obj.data">
      		<div class="classify-header">
      			{{item.name}}
      		</div>
      		<div class="classify-content" v-for="(a,b) in item.foods">
      			<div class="image">
      				<img :src="a.icon"/>
      			</div>
      			<div class="content">
      				<div class="title">{{a.name}}</div>
      				<div class="type">{{a.description}}</div>
      				<div class="evaluation">
      					<div class="left-content">
      						月售{{a.sellCount}}份
      					</div>
      					<div class="right-content">
      						好评率{{a.rating}}%
      					</div>
      					<div class="clean"></div>
      				</div>
      				<div class="selling-price">
      					<div class="price">
      						<div class="ruling-price">
      							￥{{a.price}}
      						</div>
      						<div class="original-price">
      							￥{{b}}
      						</div>
      					</div>
      						<v-box @add='add' :item='a'></v-box>
      					<div class="clean"></div>
      				</div>
      			</div>
      			<div class="clean"></div>
      		</div>
      	</div>
      </div>
      <div class="clean">
      	
      </div>
	</div>
</template>

<script>
import box from './../addremove/addremove.vue'
import particulars from './../particulars/particulars.vue'
export default {
  components: {
    'v-box': box,
    'v-particulars': particulars
  },
  data () {
    return {
      classs: [
        {
          'white': true,
          'jump': false
        },
        {
          'white': false,
          'jump': true
        },
        {
          'white': false,
          'jump': true
        },
        {
          'white': false,
          'jump': true
        },
        {
          'white': false,
          'jump': true
        },
        {
          'white': false,
          'jump': true
        },
        {
          'white': false,
          'jump': true
        },
        {
          'white': false,
          'jump': true
        },
        {
          'white': false,
          'jump': true
        },
        {
          'white': false,
          'jump': true
        }
      ],
      size: [],
      arr: [],
      flag: false,
      count: 0,
      price: 0,
      remoArr: []
    }
  },
  props: ['obj', 'counts'],
  methods: {
    cli (key) {
      this.$refs.profile[key].scrollIntoView(true)
      for (let m in this.classs) {
        this.classs[m].white = false
        this.classs[m].jump = true
      }
      this.classs[key].white = true
      this.classs[key].jump = false
    },
    classify (key) {
      for (let m in this.classs) {
        this.classs[m].white = false
        this.classs[m].jump = true
      }
      this.classs[key].white = true
      this.classs[key].jump = false
    },
    add (val) {
//    this.count++
      this.$emit('arr', val)
//    let data = {}
//    data.name = val.name
//    data.num = 1
//    data.price = val.price
//    for (let j in this.arr) {
//      if (this.arr[j].name === data.name) {
//        this.arr[j].num++
//        return
//      }
//    }
//    this.arr.push(data)
    }
  },
  mounted () {
    for (let i in this.$refs.profile) {
      this.size.push(this.$refs.profile[i].offsetTop)
    }
    var div = this.$refs.right
    if (this.size.length > 0) {
      setInterval(() => {
        for (let j in this.size) {
          if (div.scrollTop > this.size[j]) {
            for (let m in this.classs) {
              this.classs[m].white = false
              this.classs[m].jump = true
            }
            this.classs[j].white = true
            this.classs[j].jump = false
          }
        }
      }, 1000)
    }
  },
  watch: {
    counts (val, oldval) {
      if (val === 0) {
        this.count = val
      }
    },
    count (val, oldval) {
      if (val === 0) {
        this.arr = this.remoArr
      }
    }
  }
}
</script>

<style>
</style>
