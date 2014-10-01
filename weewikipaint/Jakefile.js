/*global desc, task, jake, fail, complete */
(function () {
    "use strict";

    task("default", ["lint"]);

    desc("Lint everything");
    task("lint", [], function () {
        var lint = require("./build/lint/lint_runner.js"),
            fileList = new jake.FileList();
        fileList.include("**/*.js");
        fileList.exclude(["node_modules"]);

        var passed = lint.validateFileList(fileList, nodeListOptions(), {});
        if(!passed) {
            fail("Lint failed");
        }

    });

    desc("Integration");
    task("integrate",["default"], function () {
       console.log("Integration stuff goes here");
    });

    function nodeListOptions() {
        return {
            bitwise: true,
            curly: false,
            eqeqeq: true,
            forin: true,
            immed: true,
            latedef: true,
            newcap: true,
            noarg: true,
            noempty: true,
            nonew: true,
            regexp: true,
            undef: true,
            strict: true,
            trailing: true,
            node: true
        };
    }
})();