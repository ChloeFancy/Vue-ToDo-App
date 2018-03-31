<template>
	<li>
		<div class='create'>
			<my-input labelName='title' :todo='todo'>
				<span slot='labelName'>Title</span>
			</my-input>
			<my-input labelName='project' :todo='todo'>
				<span slot='labelName'>Project</span>
			</my-input>
			<div>
				<closesaveBtn :todo='todo'><span slot='close'>Save</span></closesaveBtn>
			    <button @click='cancel'>Cancel</button>
			</div>
		</div>
	</li>
</template>

<script>
	import closesaveBtn from './closesaveBtn'
	import myInput from './myInput'
	export default{
		props: ['todo'],
		components: {
			closesaveBtn,myInput
		},
		data: function(){
			return {

			}
		},
		methods: {
			cancel(){
				this.$emit('cancelTodo', this.todo);
			}
		}
	}
</script>