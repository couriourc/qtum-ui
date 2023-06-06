# Monorepo Qtum-ui 物料仓库

## 项目描述

物料仓库，使用 monorepo 的方式进行平时的项目沉淀

## 功能

[*] 采用 pnpm workspace 的 Monorepo 开发

[] (ing) 兼容 Vue2 和 Vue3

[] (ing) 构建物料仓库

[] (ing) 生成组件开发模板

[] (ing) 文档生成，不再散乱的文档

## 如何使用

### (•_•) 方法一：整个梭哈 (不推荐——ing)

```
    npm install qtum-ui
```

```js
// 全量安装
import QtumUI from 'qtum-ui';

Vue.use(QtumUI);
```

### (❁´◡`❁) 方法二：物料仓库 (推荐)

```shell
    # 安装按钮
    npm install @qtum-ui/button
```

```js
   // 使用你的物料
   import QtumButton from '@qtum-ui/button';
   
   Vue.use(QtumButton)
```

```vue

<template>
  <q-button> 按钮</q-button>
</template>
```

## 使用仓库

### 前言：目录结构

packages
| - 各种组件
| - index 索引所有
scripts
| - 一些开发时使用的脚手架
docs
| - 使用文档

### 组件开发

1. fork 本仓库
2. install 依赖
3. 在 packages 中创建组件
4. 构建物料
5. 发布物料
6. 使用物料

## 命令

```shell
pnpm run docs:dev
```

