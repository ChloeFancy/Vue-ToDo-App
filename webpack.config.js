const path = require('path')
module.exports ={
    entry:'./src/main.js',
    output:{
        path:path.resolve('D:/Program Files/apache-tomcat-7.0.85/webapps/Vue-ToDoList','dist'),
        filename:"js/[name].js"
    },
    module: {
    	rules: [
			{
			    test:/\.less$/,
			    use:[
                    'vue-style-loader',
                    'css-loader',
                    'less-loader'
                ]
			},
    		{
    			test: /\.js$/,
    			loader: "babel-loader",
    			exclude: /node_modules///排除node_modules目录，我们不加载node模块中的js哦~
    		},
    		{
    			test: /\.css$/,
    			use: [
    				'style-loader',
    				'css-loader',
    			]
    		},
    		{
    			test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    			loader: 'url-loader',
    			options: {
    				limit: 10000,
    				name: 'src/images/[name].[ext]'
    			}
    		},
    		{
    			test: /\.vue$/,
    			loader: 'vue-loader',
    			options:{
				    loaders:{
				        'less':[//lang属性对应的名称
				            'vue-style-loader', //首先给vue的样式loader过滤一遍
				            'css-loader',//css-loader,把css转js
				            'less-loader'//用less编译
				        ]
				    }
				}
    		}
    	]
    },
    resolve: {
    	extensions: ['.js', '.vue', '.json'],
    	alias: {
    		'vue$': 'vue/dist/vue.esm.js',
    		'@': path.resolve(__dirname, './src'),
    	}
    },
    mode: 'development',
    mode: 'production'
    //以上两行不加的话，提示The 'mode' option has not been set. Set 'mode' option to 'development' or 'production' to enable defaults for this environment.
}
