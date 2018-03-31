<template>
	<li>
		<div class='editing'>
			<my-input labelName='title' :todo='todo'>
				<span slot='labelName'>Title</span>
			</my-input>
			<my-input labelName='project' :todo='todo'>
				<span slot='labelName'>Project</span>
			</my-input>

    		<closesaveBtn :todo='todo'></closesaveBtn>
		</div>
	</li>

</template>
<script>
	import myInput from './myInput'
	import closesaveBtn from './closesaveBtn'
	export default{
		props: ['todo', 'index'],
		components: {
			closesaveBtn,myInput
		},
	}
</script>