# generator-mvvm-cli 
[![NPM version][npm-image]][npm-url] 
[![license status][license-image]][npm-url]
[![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

# 简介
使用Yeomon 构造react+webpack cli工具

## 功能日志
* 2019-12-10prompts 使用区分common_prompts,react_prompts,vue_prompts;
* 2019-12-11 增加配置忽略文件 _*.* 默认为忽略文件，如_package.json
* 模板文件tpl 默认使用copyTpl遍历替换;


### mem-fs-editor 配置忽略文件
```js
  this.fs.copy(
      this.templatePath(`${template}/`),
      this.destinationPath('./'),
      { globOptions: { ignore: [this.templatePath(`${template}/_*.*`), this.templatePath(`${template}/node_modules/`)] } }
  );
```


## 参考
### yo 提供mem-fs-editor实例接口，包含一系列fs工具：

* this.fs.read - 读取文件
* this.fs.readJSON - 以JSON方式读取文件
* this.fs.write - 写文件
* this.fs.writeJson - 以JSON 方式写文件
* this.fs.append - 将内容已追加方式写入文件
* this.fs.extendJSON - 扩展JSON文件内容
* this.fs.copyTpl - copy模板文件，默认ejs渲染

[npm-image]: https://badge.fury.io/js/generator-mvvm-cli.svg
[npm-url]: https://www.npmjs.com/package/generator-mvvm-cli
[travis-image]: https://travis-ci.com//generator-mvvm-cli.svg?branch=master
[travis-url]: https://travis-ci.com//generator-mvvm-cli
[daviddm-image]: https://david-dm.org//generator-mvvm-cli.svg?theme=shields.io
[daviddm-url]: https://david-dm.org//generator-mvvm-cli
[license-image]: https://img.shields.io/github/license/wuxingtao/generator-mvvm-cli
