/*global desc, task, jake, fail, complete */
"use strict";

task("default",["lint"]);

desc("Lint everything");
task("lint",[],function() {
    var lint = require("./build/lint/lint_runner.js"),
        fileList = new jake.FileList(),
        options;

    options = {
        node : true
    };

    fileList.include("**/*.js");
    fileList.exclude(["node_modules"]);

    lint.validateFileList(fileList,options,{});
});