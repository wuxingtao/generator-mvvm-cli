"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
/* Prompts select lists */
const { common_prompts, react_prompts, vue_prompts } = require("./prompts.js");
const template_config = require("./config");

/* Path
 * use to change process dir
 * */
const path = require("path");

module.exports = class extends Generator {
    async prompting() {
        // Have Yeoman greet the user.
        this.log(
            yosay(
                `Welcome to the awesome ${chalk.red(
                    "generator-mvvm-cli"
                )} generator!`
            )
        );
        /* 使用common prompts */
        const prompts = common_prompts.bind(this)();
        const results = await this.prompt(prompts);
        /* 使用vue or react prompts条件 */
        const mvvm_prompts =
            results && results.mvvmFrame && results.mvvmFrame.key === "react"
                ? react_prompts
                : vue_prompts;
        return this.prompt(mvvm_prompts).then(props => {
            // To access props later use this.props.someAnswer;
            this.props = Object.assign({}, results, props);
        });
    }

    /**
     * 写入模板文件 vue/react
     * @param template > template name
     * @returns {boolean}
     * @param root > project name
     */
    writing_flow(root, template) {
        console.log("writing now !!!");
        if (!template) {
            return false;
        }

        this.fs.copy(
            this.templatePath(`${template}/`),
            this.destinationPath(`./${root}`),
            template_config.options.bind(this)(template)
        );
        this.writing_plugin(root, template);
        this.fs.copy(
            this.templatePath(`${template}/.babelrc`),
            this.destinationPath(`${root}/.babelrc`)
        );
        this.fs.copy(
            this.templatePath(`${template}/_.gitignore`),
            this.destinationPath(`${root}/.gitignore`)
        );
        this.fs.copyTpl(
            this.templatePath(`${template}/_package.json`), // 第一个参数：from
            this.destinationPath(`${root}/package.json`), // 第二个参数：to
            {
                props: this.props
            }
        );
    }

    /**
     * 写入template 插件
     * @param template > template name
     * @param root > project name
     * @return {boolean}
     */
    writing_plugin(root, template) {
        if (!template) {
            return false;
        }

        if (this.props.mvvmFrame.key === "react") {
            if (this.props.pluginSelect.includes("redux")) {
                this.fs.copy(
                    this.templatePath(`${template}/src/redux`),
                    this.destinationPath(`${root}/src/redux`)
                );
            }
        } else if (this.props.mvvmFrame.key === "vue") {
            if (this.props.pluginSelect.includes("vuex")) {
                this.fs.copy(
                    this.templatePath(`${template}/src/vuex/`),
                    this.destinationPath(`${root}/src/vuex/`)
                );
            }
        }
    }

    writing_tpl() {}

    writing() {
        if (this.props.mvvmFrame) {
            this.writing_flow(this.props.appName, this.props.mvvmFrame.key);
        }
        /* // 动态写入dep
        const pkgJson = {
          dependencies: {
            vue: '^2.0.0'
          }
        };
        this.fs.extendJSON(this.destinationPath('projects/vue/package.json'), pkgJson); */
    }

    // 安装依赖
    install() {
        if (this.props.isInstallDev) {
            // Process update dir use this.props.appName
            process.chdir(path.join(process.cwd(), this.props.appName));
            // Install Dep with Generator api
            this.installDependencies({ bower: false, cwd: this.props.appName });
        }
    }

    // 最后执行，可清楚临时文件等
    end() {
        if (this.props.isInstallDev) {
            this.log(
                chalk.green(
                    "项目构建成功, 请 `npm install` 安装依赖, 然后执行 `npm start` 运行"
                )
            );
        }
    }
};
