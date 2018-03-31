<template>
	<div>
		<p class='statistic'>
			Completed:
			{{todos.filter(todo=>{return todo.done;}).length}}
		</p>
		<p class='statistic'>
			Pending:
			{{todos.filter(todo=>{return !todo.done;}).length}}
		</p>
		<div id='addNew' title='Add a new todo' @click='addNew'>+</div>

    	<transition-group name='swicthEdit' tag='ul'>
           	<span
           		v-for='(todo, index) in todos'
           		:key='index'
           		:todo='todo'
           		:is='!todo.inited?"create":(!todo.editing?"todo":"todoedit")'
           		@change='update'
           		@cancelTodo='cancelTodo'
            	@todoDone='todoDone'

           		@show='showDelete'
           	>
           	</span>
    	</transition-group>
    </div>

</template>

<script>
	import todo from './todo'
	import todoedit from './todoedit'
	import create from './create'


	export default{
		props: ['todos'],
		components: {
			todo,
			todoedit,
			create,
		},
		data(){
			return {
				deleteAlert: false,
			}
		},
		methods: {
			update(buffer){
				this.$emit('update', buffer);
			},
			addNew(){
				this.todos.unshift(new createTodo('', ''));
			},
			showDelete(todo){
				this.$emit('show', todo);
			},
			cancelTodo(todo){
				this.$emit('cancelTodo', todo);
			},
			todoDone(){
				this.$emit('todoDone');
			}
		}
	};
	function createTodo(title, project){
		this.title = title;
		this.project = project;
		this.done = false;
		this.editing = false;
		this.inited = false;
	}

</script>
