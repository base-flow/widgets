---
category: Components
title: DatePicker
toc: false 
order: 6
group:
  title: 基础组件 
  order: 1 
---

# DatePicker 日期选择

## 介绍

封装`Antd`的`DatePicker`选择框组件，`value`仅支持`string`类型。

## 示例

<code src="./__demo.tsx">基础用法</code>

## APi

| 属性   | 类型                     | 默认值   | 必填 | 说明 |
| ------ | ---------------------- | -------- | ---- | ---- |
| value  | `string \| undefined`      |
| onChange | `(value?: string) => void` |
| block | `boolean` |       |           |  展示为宽度100%的块级元素   |
| placeholder | `string` |
| showTime | `boolean` |       |        |  是否显示时间   |
| className | `string` |
| style | `CSSProperties` |
| prefix | `ReactNode` |
| allowClear | `boolean` |
| size       | `"small" \| "middle"` |
| variant    | `"filled" \| "borderless"` |
| onFocus    | `(e: FocusEvent) => void` |
| onBlur    | `(e: FocusEvent) => void` |
