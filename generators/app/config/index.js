/**
 * 返回模板copy默认忽略文件
 * @type {{options: (function(*))}}
 */
module.exports = {
    options: function (template) {
        let options = {};
        const common_ignore = [
            this.templatePath(`${template}/**/_*.*`),
            this.templatePath(`${template}/node_modules/**`)
        ];
        let ignore_add;
        switch (template) {
            case 'react':
                ignore_add = [
                    this.templatePath(`${template}/src/redux/**`)
                ];
                break;
            case 'vue':
                ignore_add = [
                    this.templatePath(`${template}/src/vuex/**`)
                ];
                break;
            default:
                ignore_add = [];
                break;
        }

        return options = {
            globOptions: {
                ignore: common_ignore.concat(ignore_add)
            }
        };
    }
};
