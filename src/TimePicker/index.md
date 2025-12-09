---
category: Components
title: TimePicker
toc: false 
order: 5
group:
  title: 基础组件 
  order: 1 
---

# TimePicker 时间选择

## 介绍

封装`Antd`的`TimePicker`选择框组件，`value`仅支持`string`类型，格式为`HH:mm:ss`。

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
| style | `CSSProperties` |
| prefix | `ReactNode` |
| allowClear | `boolean` |
| size       | `"small" \| "middle"` |
| variant    | `"filled" \| "borderless"` |
| onFocus    | `(e: FocusEvent) => void` |
| onBlur    | `(e: FocusEvent) => void` |
