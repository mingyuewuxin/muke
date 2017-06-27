<template>
	<div class="header">
			<div class="cover"></div>
			<div class="commodity-pictures">
				<img src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg"/>
			</div>
			<div class="commodity-content">
				<div class="name-commodity">
					<div class="commodity-header">
						<img src="../../../static/img/brand@2x.png"/>
						<span class="name">{{aaa.data.name}}</span>
					</div>
					<div class="commodity-center">
						蜂鸟专送/38分钟送达
					</div>
					<div class="commodity-footer">
						<span>在线支付满28减5,满50减10</span>
						<div class="evaluation" @click="Cli">
							5个
						</div>
					</div>
				</div>
			</div>
			<div class="notice" @click="Cli">
				<!--<img src="../../../static/img/bulletin@2x.png"/>-->
				<p>{{aaa.data.bulletin}}</p>
				<span class="triangle">></span>
			</div>
	</div>
</template>

<script>
export default {
  methods: {
    Cli () {
      this.$emit('this-is-cli', '111')
    }
  },
  props: ['aaa']
}
</script>

<style>
</style>
