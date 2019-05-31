<template>
  <div id="app">
	<router-view/>
  </div>
</template>
<script>
	export default {
		name: 'App',
	}
</script>
<style>
	body,p,h1,h2,h3,h4,h5,h6{
		margin: 0;
	}
	ul,ol{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	a{
		text-decoration: none;
		color: #333;
	}
	img{
		display: block;
		background-size: 100%;
	}
	input{
		margin: 0;
		padding: 0;
		outline: none;
		border: 0;
		background: none;
		font-size: 20px;
		color: #828282;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>