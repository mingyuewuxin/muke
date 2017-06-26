<template>
	<div class="menu">
      <div class="left">
        <div class="details" v-for="item in arr">
        	{{item.name}}
        </div>
      </div>
      <div class="right">
      	<div class="menu-list" v-for="item in arr">
      		<div class="list-header">
      			{{item.name}}
      		</div>
      		<div class="list-content">
      			{{item.arr.title}}
      		</div>
      	</div>
      </div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      arr: [
        {
          name: '热销榜',
          arr: [
            {
              title: '皮蛋廋肉粥陪包子套餐',
              title-abbreviation: '咸粥'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>
</style>
