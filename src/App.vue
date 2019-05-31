<template>
  <div id="app">
		<div style="display: inline-block;width: 400px;height: 400px;border:1px solid #0000FF">
			<h1>这是默认视图</h1>
			<router-view/>
    </div>
		
		<div style="display: inline-block;width: 300px;height: 400px;border:1px solid red;vertical-align: top;">
			<h1>这是乌鸦视图</h1>
			<router-view name='crow'/>
		</div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
