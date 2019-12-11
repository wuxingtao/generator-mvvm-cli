"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-mvvm-cli:app", () => {
    beforeAll(() => {
        return helpers
            .run(path.join(__dirname, "../generators/app"))
            .withPrompts({ someAnswer: true });
    });

    it("creates files", () => {
        // Assert.file(["dummyfile.txt"]);
        assert.file([
            path.join(__dirname, "../generators/app/templates/dummyfile.txt")
        ]);
    });
});
