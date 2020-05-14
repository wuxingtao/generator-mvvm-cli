"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");
/* Template file path */
const template_path = path.join(__dirname, "../generators/app/templates");
const template_select = "react";

function path_join(filePath) {
    return path.join(template_path, filePath);
}

describe("generator-mvvm-cli:app", () => {
    beforeAll(() => {
        return helpers
            .run(path.join(__dirname, "../generators/app"))
            .withPrompts({
                someAnswer: true,
                mvvmFrame: { key: "react", extension: "react" },
                cssPreprocessor: { key: "node-sass", extension: "scss" },
                pluginSelect: ["react-router", "redux"],
                isInstallDev: false
            })
            .withLocalConfig({ lang: "en" })
            .then(function() {});
    });

    it("creates files", () => {
        assert.file([
            path_join(`${template_select}/src`),
            path_join(`${template_select}/webpack`),
            path_join(`${template_select}/src/redux`)
        ]);
    });
});
