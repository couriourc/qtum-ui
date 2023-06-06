const path = require('path');
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
const resolve = (dir) => path.join(__dirname, dir);
const baseUrl = process.env.NODE_ENV === 'production' ? './' : '/';
module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? './' : '/', // 公共路径
  indexPath: 'index.html' , // 相对于打包路径index.html的路径
  outputDir: process.env.outputDir, // 'dist', 生产环境构建文件的目录
  assetsDir: 'static', // 相对于outputDir的静态资源(js、css、img、fonts)目录
	//文件名哈希
	filenameHashing: true,
	//用于多页配置，默认是 undefined
	pages: {
		index: {
			// page 的入口文件
			entry: 'src/main.js',
			// 模板文件
			template: 'public/index.html',
			// 在 dist/index.html 的输出文件
			filename: 'index.html',
			// 当使用页面 title 选项时，
			// template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
			title: '科研AI辅助平台',
			// 在这个页面中包含的块，默认情况下会包含
			// 提取出来的通用 chunk 和 vendor chunk。
			chunks: ['chunk-vendors', 'chunk-common', 'index'],
		}
	},
  lintOnSave: false, // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: !IS_PROD, // 生产环境的 source map
  parallel: require("os").cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  pwa: {}, // 向 PWA 插件传递选项。
  chainWebpack: config => {
    config.resolve.symlinks(true); // 修复热更新失效
    config.resolve.alias // 添加别名
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@views', resolve('src/views'))
      .set('@store', resolve('src/store'))
	  .set('@public', resolve('public'))
  },
  css: {
    extract: IS_PROD,
    loaderOptions: {
    	postcss: {
            plugins: [
              require('postcss-plugin-px2rem')({
                rootValue: 192, // 新版本的是这个值
    			// exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
                mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
                minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
              }),
            ]
        }
    }
  },
  devServer: {
      overlay: { // 让浏览器 overlay 同时显示警告和错误
       warnings: true,
       errors: true
      },
      host: "0.0.0.0",
      port: 8080, // 端口号
      https: false, // https:{type:Boolean}
      open: false, //配置自动启动浏览器
      hotOnly: true // 热更新
    }
}