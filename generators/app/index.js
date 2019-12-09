'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const { common_prompts, react_prompts, vue_prompts } = require('./prompts.js');

module.exports = class extends Generator {
  async prompting () {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the awesome ${chalk.red('generator-rt-webpack')} generator!`)
    );
    /* 使用common prompts */
    const prompts = common_prompts.bind(this)();
    const results = await this.prompt(prompts);
    /* 使用vue or react prompts条件 */
    const mvvm_prompts = results.mvvmFrame.key === 'react' ? react_prompts : vue_prompts;
    return this.prompt(mvvm_prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = Object.assign({}, results, props);
    });
  }

  writing_template (template) {
    console.log('writing now !!!');
    if (!template) {
      return false;
    }
    this.fs.copy(
      this.templatePath(`${template}/`),
      this.destinationPath('./')
    );
    this.fs.copy(
      this.templatePath(`${template}/.babelrc`),
      this.destinationPath('.babelrc')
    );
    this.fs.copy(
      this.templatePath(`${template}/.gitignore`),
      this.destinationPath('.gitignore')
    );
    this.fs.copyTpl(
      this.templatePath(`common/${template}_package.json`), //第一个参数：from
      this.destinationPath('package.json'), //第二个参数：to
      {
        props: this.props
      }
    );
  }

  writing () {
    this.writing_template(this.props.mvvmFrame.key);

    /*// 动态写入dep
    const pkgJson = {

      dependencies: {

        vue: '^2.0.0'

      }

    };
    this.fs.extendJSON(this.destinationPath('projects/vue/package.json'), pkgJson);*/

  }

//安装依赖
  install () {
    if (this.props.isInstallDev) {
      this.installDependencies();
    }
  }

  // 最后执行，可清楚临时文件等
  end () {
    if (this.props.isInstallDev) {
      this.log(
        chalk.green('项目构建成功, 请 `npm install` 安装依赖, 然后执行 `npm start` 运行')
      );
    }
  }
};
