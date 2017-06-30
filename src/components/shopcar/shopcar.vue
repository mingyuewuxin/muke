<template>
	<div class="shopcar">
		<div class="nctive" @click="cli"></div>
		<div class="car">
			<div class="car-header">
				<div class="name">
					购物车
				</div>
				<div class="remove" @click="removes">
					清空
				</div>
			</div>
			<div class="car-content">
				<div class="goods" v-for="item in arr">
					<div class="gooods-name">
						{{item.name}}
					</div>
					<v-box :item='item'></v-box>
					<div class="clean"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import box from './../addremove/addremove.vue'
export default {
  components: {
    'v-box': box
  },
  methods: {
    cli () {
      this.$emit('carshow', 'this is car')
    },
    removes () {
      this.arr = this.move
      this.$emit('remove', this.arr)
    }
  },
  props: ['arr'],
  data () {
    return {
      move: []
    }
  }
}
</script>

<style>
@import 'shopcar.scss';
</style>
