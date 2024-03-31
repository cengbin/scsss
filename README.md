# scsss

## 简介

scsss 是一个 基于 scss 转 css、wxss、acss 等指定类型文件的工具。

## 安装

`npm install scsss --global`

## 使用

在项目根目录下创建`scsss.config.js`，示例：

```
module.exports = {
	log: true,
	ext: '.wxss',
	include: ['pages/**/*.scss', 'subpackages/**/*.scss']
}
```

然后在项目根目录下执行 `scsss` 。