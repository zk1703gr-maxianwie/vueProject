<template>
	<div>
		<h1>我是主人</h1>
		<el-input style='width:120px' v-model='num'></el-input>
		<el-button @click='fn'>寻找小狗丹尼</el-button>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				num:''
			};
		},
		methods:{
			fn(){
				this.$router.push({name:'dog',params:{num:this.num}})
			}
		}
		
	}
</script>

<style>

</style>
