---
category: Components
title: DescMD
toc: false 
order: 7
group:
  title: 基础组件 
  order: 1 
---

# DescMD 描述

## 介绍

用来渲染文本，当value值为`M|`开头渲染为`markdown`，否则渲染为普通文本。

## 示例

<code src="./__demo.tsx">基础用法</code>

## APi

| 属性   | 类型                     | 默认值   | 必填 | 说明 |
| ------ | ---------------------- | -------- | ---- | ---- |
| value  | `string \| undefined`      |
| className | `string` |
| style | `CSSProperties` |
| onClick | `(e: MouseEvent) => void` |
| onClickCapture | `(e: MouseEvent) => void` |
