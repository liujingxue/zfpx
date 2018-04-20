
## webpack4.0.1安装问题，提示：

The CLI moved into a separate package: webpack-cli.
Please install 'webpack-cli' in addition to webpack itself to use the CLI.
-> When using npm: npm install webpack-cli -D

-> When using yarn: yarn add webpack-cli -D

解决方案：

## 一、webpack -v 版本号出不来

提示：

The CLI moved into a separate package: webpack-cli.
Please install 'webpack-cli' in addition to webpack itself to use the CLI.
-> When using npm: npm install webpack-cli -D
-> When using yarn: yarn add webpack-cli -D


意思是CLI被移动到了一个专门的包 webpack-cli里了。
请安装webpack-cli 的除了webpack本身使用cli
当用npm时，使用npm install webpack-cli -D安装。
当用yarn时，使用yarn add webpack-cli -D安装。

```
解决办法：全局安装webpack-cli
npm install webpack-cli -g
```

就能提示出版本号了。

## 二、在项目目录下要本地安装webpack-cli -D

```
npm install webpack-cli -D
```

## 三、在项目目录下要本地安装webpack

```
npm install webpack -D
```

## 四、必须使用配置文件：webpack.config.js

```
不要使用webpack命令，如：webpack  demo01.js  bundle01.js，不能再执行了。
···

## 五、webpack.config.js文件的变化

webpack.config.js里的配置，不再支持 module下的loaders，需要把loaders改成rules。


即如下：
```

module: {
    rules: [
        //针对css文件，进行对应的loader处理
        { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
}

```