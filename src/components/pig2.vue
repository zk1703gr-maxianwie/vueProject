<template>
	<div>
		<h1>小猪乔治</h1>
		<el-button @click='fn'>寻找佩奇</el-button>
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
				this.$router.push('/pig1')
			}
		}
		
	}
</script>

<style>

</style>
