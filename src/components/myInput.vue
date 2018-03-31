<template>
	<div>
		<label :for='labelName'><slot name='labelName'></slot></label>
		<input type='text' :id='labelName' :value='todo[labelName]'  @input='change($event.target.value)'></input>
	</div>
</template>

<script>
	export default{
		props: ['todo', 'labelName'],
		data: function(){
			return{
				timeout: 0,
			};
		},
		methods: {
			change: function(val){
				clearTimeout(this.timeout);
				this.timeout = setTimeout(
					(that)=>{
						that.todo[that.labelName] = val;
					}
				, 300, this);
			}
		}

	}
</script>