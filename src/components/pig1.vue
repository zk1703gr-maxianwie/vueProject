<template>
	<div>
		<h1>小猪佩奇</h1>
		<el-button @click='fn'>寻找乔治</el-button>
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
			fn(){
				this.$router.push({name:'p2'})
			}
		}
		
	}
</script>

<style>

</style>
