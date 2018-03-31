<template>
	<div class='popWindow'>

		<div class='circle'>
			<slot name='innerImg'>
			</slot>
		</div>

		<header>
			<slot name='title'>default</slot>
		</header>

		<main>
			<slot name='content'>default content</slot>
		</main>

		<footer>
			<slot name='buttons'></slot>
		</footer>
	</div>
</template>

<script>
	export default{
		props: {

		},
		methods: {

		},
		mounted(){
			document.body.style.overflow='hidden';

		},
		destroyed(){
			document.body.style={};
		}

	}

</script>