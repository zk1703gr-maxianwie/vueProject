<template>
	<div>
		<h1>我是小狗丹尼</h1>
		<h2>今天吃了{{n}}块骨头</h2>
		<el-button @click='fn'>寻找主人</el-button>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				n:''
			};
		},
		methods:{
			fn(){
				this.$router.push("/owner");
			}
		},
		mounted(){
			// 接收路由传递的参数
			this.n=this.$route.params.num;
		}
		
	}
</script>

<style>

</style>
