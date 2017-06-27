<template>
	<div class="menu">
      <div class="left">
	      <div class="details" v-for="(items,key) in obj.data">
	      	{{items.name}}
	      </div>
      </div>
      <div class="right">
      </div>
	</div>
</template>

<script>
export default {
  props: ['obj']
}
</script>

<style>
</style>
