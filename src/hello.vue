<template>
	<div id="hell">
		<h2>{{msg}}</h2>
		<span v-on:click="alertMsg">{{name}}</span>
	</div>
</template>
<script>
export default {
	data(){
	  return {
			msg:'hello vue.js single component',
			name:'Elli'
	  	}
	},
	methods:{
		alertMsg:function(){
			console.log("名称："+this.name);
			return this.name;
		}
	}
}
</script>
<style lang="scss" scoped>
h2{
  color:red;
}
</style>
