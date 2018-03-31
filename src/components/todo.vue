<template>
	<li>
		<div class='viewing'>
			<div class='title'>{{todo.title}}</div>
	    	<div class='project'>{{todo.project}}</div>

	    	<div>
		    	<img src="../images/edit.png" @click='edit' alt='no img'>
	    		<img alt='no img' src="../images/delete.png" @click='deleteTodo'>
	    	</div>

	    	<button @click='complete' :class="[todo.done?'completed': 'pending']">
    			{{todo.done?'completed': 'pending'}}
    		</button>
		</div>
	</li>

</template>
<script>
	export default{
		props: ['todo'],

		methods: {
			edit: function(){
				this.todo.editing = true;
			},
			complete: function(){
				this.todo.done = !this.todo.done;
				if(this.todo.done){
					this.$emit('todoDone');
				}
			},
			deleteTodo: function(){
				this.$emit('show', this.todo);
			}
		}
	}
</script>
