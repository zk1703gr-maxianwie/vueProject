<template>
	<div>
		<h1>萌萌小鸡</h1>
		<h2>你能猜出下面描述的是谁吗?</h2>
		<el-button @click='fn1'>森林里最棒的音乐家</el-button>
		<el-button @click='fn2'>森林里最萌的小鸡</el-button>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				
			};
		},
		methods:{
			fn1(){
				this.$router.push("/parent");
			},
			fn2(){
				this.$router.push("/parent/child2");
			}
		}
		
	}
</script>

<style>

</style>
