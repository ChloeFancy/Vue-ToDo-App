<template>
    <div>
    <div id='cover' v-show='deleteAlert||done'></div>
    <transition name='pop'>
        <pop-window
            v-if='deleteAlert'
            class='deleteWindow'
        >
            <div slot='innerImg'>
                <div class='gang'></div>
                <div class='dot'></div>
            </div>
            <div slot='title'>Are you sure?</div>
            <div slot='content'>This To-Do will be permanently deleted!</div>
            <div slot='buttons'>
                <button @click='deleteAlert=false;'>Cancel</button>
                <button @click='deleteTodo'>Yes, delete it!</button>
            </div>
        </pop-window>
    </transition>

    <transition name='pop'>
        <pop-window
            v-if='done'
            class='SuccessWindow'
        >
            <div slot='innerImg' class='check'></div>
            <div slot='title'>Success!</div>
            <div slot='content'>To-Do completed!</div>
            <div slot='buttons'>
                <button @click='done=false;'>OK</button>
            </div>
        </pop-window>
    </transition>

        <todo-list
            :todos='todos'
            @update='update'
            @show='showDelete'
            @cancelTodo='cancelTodo'
            @todoDone='todoDone'
        >
        </todo-list>
    </div>
</template>

<script>
import todoList from './components/todoList';
import popWindow from './components/popWindow';


    export default{
        name: 'app',
        components: {
            todoList,popWindow,
        },
        data(){
            return{
                todos: [
                    {
                        title: 'todo A', project: '编译原理作业',
                        done: false, editing: false, inited: true,
                    },
                    {
                        title: 'todo B', project: '系统结构实验',
                        done: false, editing: false, inited: true,
                    },
                    {
                        title: 'todo C', project: 'project C',
                        done: false, editing: false, inited: true,
                    },
                    {
                        title: 'todo D', project: 'project D',
                        done: false, editing: false, inited: true,
                    }
                ],
                deleteAlert: false,
                currentTodo: null,
                done: false,
            };
        },
        methods: {
            update: function(newBuffer){
                let index = this.todos.indexOf(newBuffer);
                this.todos[index].title = newBuffer.title;
                this.todos[index].project = newBuffer.project;
            },
            deleteTodo(){
                this.deleteAlert=false;

                console.log(this.todos.length, this.todos.indexOf(this.currentTodo));
                this.todos.splice(this.todos.indexOf(this.currentTodo), 1);
            },
            showDelete(todo){
                this.deleteAlert = true;
                this.currentTodo = todo;
            },
            cancelTodo(todo){
                this.currentTodo = todo;
                this.deleteTodo();
            },
            todoDone(){
                this.done = true;
            },

        },
        mounted(){
            var cssEl = document.createElement('style');
            document.documentElement.firstElementChild.appendChild(cssEl);

            function setPxPerRem(){
                var dpr = 1;
                //把viewport分成10份的rem，html标签的font-size设置为1rem的大小;
                var pxPerRem = document.documentElement.clientWidth * dpr / 10;
                cssEl.innerHTML = '@media screen and max-width: 768px{html{font-size:' + pxPerRem + 'px!important;}}';
            }
            setPxPerRem();
        }
    }



    window.onload = function(){var cover = document.getElementById('cover');
    cover.style.height = (document.documentElement.offsetHeight||document.body.offsetHeight)+'px';}
</script>

