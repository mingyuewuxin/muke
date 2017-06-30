<template>
	<div class="addremove">
		<div class="remove" @click="remove">
			<i class="icon iconfont">&#xe642;</i>
		</div>
        <span class="nums">
        	{{this.item.count}}
        </span>
		<div class="add" @click="add">
			<i class="icon iconfont">&#xe636;</i>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
export default {
  methods: {
    add () {
      if (!this.item.count) {
        Vue.set(this.item, 'count', 1)
      } else {
        this.item.count++
      }
    },
    remove () {
      if (this.item.count > 0) {
        this.item.count--
      }
    }
  },
  props: ['item'],
  data () {
    return {
      flag: false
    }
  }
}
</script>

<style>
</style>
