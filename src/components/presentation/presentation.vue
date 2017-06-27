<template>
	<div class="presentation">
		<div class="presentation-native"></div>
		<div class="presentation-header">
			{{aaa.data.name}}
		</div>
		<div class="star">
			<div>
				<img src="../../../static/img/star36_on@2x.png"/>
				<img src="../../../static/img/star36_on@2x.png"/>
				<img src="../../../static/img/star36_on@2x.png"/>
				<img src="../../../static/img/star36_on@2x.png"/>
				<img src="../../../static/img/star36_on@2x.png"/>
			</div>
		</div>
		<div class="privilege">
			<div class="rail">
				<hr />
				<span>优惠信息</span>
				<hr />
			</div>
			<div class="privilege-content">
				<ul>
					<li v-for="item in aaa.data.supports"><span>{{item.description}}</span></li>
				</ul>
			</div>
		</div>
		<div class="merchants">
			<div class="rail">
				<hr />
				<span>商家公告</span>
				<hr />
			</div>
			<div class="merchants-content">
				{{aaa.data.bulletin}}
			</div>
		</div>
		<div class="shut-down" @click="Cli">
			关闭
		</div>
	</div>
</template>

<script>
export default {
  methods: {
    Cli () {
      console.log(this.aaa)
      this.$emit('this-is-cli', '111')
    }
  },
  props: ['aaa']
}
</script>

<style>
</style>
