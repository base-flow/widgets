---
category: Components
title: StringInput
toc: false 
order: 2
group:
  title: 基础组件 
  order: 1 
---

# StringInput 输入框

## 介绍

封装`Antd`的`Input`输入框组件，`onChange`参数value值改为`String`类型。

## 示例

<code src="./__demo.tsx">基础用法</code>

## APi

| 属性   | 类型                     | 默认值   | 必填 | 说明 |
| ------ | ---------------------- | -------- | ---- | ---- |
| value  | `string \| undefined`      |
| onChange | `(value?: string) => void` |
| block | `boolean` |       |           |  展示为宽度100%的块级元素   |
| placeholder | `string` |
| className | `string` |
| prefix | `ReactNode` |
| addonAfter | `ReactNode` |
| allowClear | `boolean` |
| size       | `"small" \| "middle"` |
| variant    | `"filled" \| "borderless"` |
| onFocus    | `(e: FocusEvent) => void` |
| onBlur    | `(e: FocusEvent) => void` |
