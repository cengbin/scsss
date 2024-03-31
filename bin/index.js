#!/usr/bin/env node
const chokidar = require('chokidar');
const sass = require('node-sass');
const path = require('path');
const fs = require('fs');

const config = {
  log: false,
  ext: "css",
  include: [],
  outputStyle: "expanded",
}
const configFilePath = path.resolve("./scsss.config.js")

fs.access(configFilePath, function (err) {
  if (err && err.code == "ENOENT") {
    start(config)
    return
  }

  let userConfig = require(configFilePath)
  let scsssConfig = Object.assign(config, userConfig)

  start(scsssConfig)
})


function start(config) {
  console.log("[scsss] start ...")

  let {include, ext, log, outputStyle} = config
  include = (Array.isArray(include) ? include : [include])

  // 监听的文件
  const watchFiles = include.map(item => (path.resolve(item)))

  chokidar.watch(watchFiles).on('all', (event, file) => {
    const {dir, name} = path.parse(file);

    // 忽略以_开头的文件
    if (name.startsWith('_')) {
      return;
    }

    // 编译生成的指定文件目录
    sass.render({
      file: file,
      outputStyle
    }, function (err, result) {
      if (!err) {
        const newFile = `${dir}/${name}${ext}`
        fs.writeFile(newFile, result.css, function (err) {
          if (!err) {
            log && console.log(`[scsss] ${new Date().toString().substring(16, 24)} ===> updated ${newFile}`)
          }
        });
      } else {
        console.log(err)
      }
    });
  });
}