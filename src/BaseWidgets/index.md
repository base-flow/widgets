---
category: Components
title: BaseWidgets
toc: false
order: 1
group:
  title: 工具函数
  order: 2
---

# BaseWidgets

## 介绍

平台封装的一些全局简化基础方法，可以直接使用

## 示例

<code src="./__demo.tsx">基础用法</code>

## APi

| 方法名       | 类型                     | 说明      |
| ----------- | ----------------------- | -------- |
| message.success  | `(text: string) => void`      |
| message.error | `(text: string) => void` |
| confirm |`(message: string, callback: (ok: boolean) => void) => void`|
| clipboard.read | `() => Promise<string>` |       |
| clipboard.write | `(text: string) => Promise<void>` |
| clipboard.write | `(text: string) => Promise<void>` |
| popup | `(payload: {content: ReactNode; target: HTMLElement; offset?: {left?: string; top?: string}} \| null) => void` |
| modal | `(payload: {content: ReactNode; mask?: 'show' \| 'closeAble'} \| null) => void` |
