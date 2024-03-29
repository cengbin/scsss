#!/usr/bin/env node

const chokidar = require('chokidar');
const sass = require('node-sass');
const path = require('path');
const fs = require('fs');

function resolvePath(dir) {
	return path.resolve(__dirname, './', dir)
}

console.log('scsss')

//监听的文件
// const watchFile = path.join(__dirname, "./**/*.scss")

// const watchFile = [
// 	resolvePath('./scss/style.scss'),
// 	resolvePath('./scss/a/a.scss'),
// ]

/*
const watchFile = []

chokidar.watch(watchFile).on('all', (event, file) => {
	const {dir, name} = path.parse(file);

	//忽略以_开头的文件
	if (name.startsWith('_')) {
		return;
	}

	//编译生成的wxss文件目录
	sass.render({
		file: file,
		outputStyle: "expanded"
	}, function (err, result) {
		if (!err) {
			const newFile = `${dir}/${name}.wxss`
			fs.writeFile(newFile, result.css, function (err) {
				if (!err) {
					console.log(`[${new Date().toString().substring(16, 24)}] updated ${newFile}`)
				}
			});
		} else {
			console.log(err)
		}
	});
});*/
