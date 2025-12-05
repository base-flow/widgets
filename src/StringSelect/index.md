---
category: Components
title: StringSelect
toc: false 
order: 4
group:
  title: 基础组件 
  order: 1 
---

# StringSelect 下拉选择框

## 介绍

封装`Antd`的`Select`选择框组件，`value`仅支持`string`类型，`options`下拉选项中value值必须为非空string。

## 示例

<code src="./__demo.tsx">基础用法</code>

## APi

| 属性   | 类型                     | 默认值   | 必填 | 说明 |
| ------ | ---------------------- | -------- | ---- | ---- |
| value  | `string \| string[] \| undefined`      |
| onChange | `(value?: string \| string[]) => void` |
| options | `{ value: string; label: string }[]` |       |    必填    |  下拉选项，value为非空字符   |
| multiple | `boolean` |       |        |  是否多选，为true时value为数组  |
| showSearch | `boolean` |       |        |  是否显示搜索按钮   |
| block | `boolean` |       |           |  展示为宽度100%的块级元素   |
| placeholder | `string` |
| className | `string` |
| prefix | `ReactNode` |
| allowClear | `boolean` |
| size       | `"small" \| "middle"` |
| variant    | `"filled" \| "borderless"` |
| onFocus    | `(e: FocusEvent) => void` |
| onBlur    | `(e: FocusEvent) => void` |
