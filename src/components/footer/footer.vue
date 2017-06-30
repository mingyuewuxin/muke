<template>
	<div>
		<div class="circle" @click="cli">
			<div class="native">
				<i class="icon iconfont">&#xe613;</i>
			</div>
			<div class="counts" v-if="flag">
				{{count}}
			</div>
		</div>
		<div class="footer">
			<span class="buy">
				￥{{price}}
			</span>
			<div class="freight">
				另需配送费￥4元
			</div>
			<div class="end" :class="blue">
				<span v-if="flag3">￥ 20 起送</span>
				<span v-if="flag1">还差￥{{20-price}}元起送</span>
				<span v-if="flag2">去结算</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  methods: {
    cli () {
      this.$emit('carshow', 'this is car')
    }
  },
  props: ['arr'],
  data () {
    return {
      flag: false,
      flag3: true,
      flag1: false,
      flag2: false,
      blue: {
        'blue': false,
        'black': true
      }
    }
  },
  watch: {
    count (val, oldVal) {
      if (val > 0) {
        this.flag = true
      } else {
        this.flag = false
      }
    },
    price (val, oldval) {
      if (val === 0) {
        this.blue.blue = false
        this.blue.black = true
      }
      if (val > 0) {
        this.flag3 = false
        this.flag1 = true
        this.flag2 = false
        this.blue.blue = false
        this.blue.black = true
      }
      if (val >= 20) {
        this.flag3 = false
        this.flag1 = false
        this.flag2 = true
        this.blue.blue = true
        this.blue.black = false
      }
    }
  },
  computed: {
    count () {
      let count = 0
      for (let j in this.arr) {
        count += this.arr[j].count
      }
      return count
    },
    price () {
      let price = 0
      for (let j in this.arr) {
        price += this.arr[j].price * this.arr[j].count
      }
      return price
    }
  }
}
</script>

<style>
</style>
