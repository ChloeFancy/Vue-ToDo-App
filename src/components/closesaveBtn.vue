<template>
	<button @click='closeSave'>
		<slot name='close'>Close and Save</slot>
	</button>
</template>
<script>
	export default{
		props: ['todo'],
		methods: {
			closeSave: function(){
				if(this.todo.title&&this.todo.project){
					this.todo.editing = false;
					this.todo.inited = true;
				}
			},
		}
	}
</script>