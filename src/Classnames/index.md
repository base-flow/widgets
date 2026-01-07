---
category: Components
title: Classnames*
toc: false
order: 5
group:
  title: 工具方法
  order: 2
---

# Produce

*本方法由`@baseflow/react`提供

## 介绍

动态生成className，集成自`classnames@2.5.1`，详细说明见`classnames`：

```ts
export { default as classnames } from 'classnames';
```

## 示例

```ts

import { classnames } from '@baseflow/react';

<div className={classnames('hd', {on: isActive})}>...</div>

```

## APi

| 方法名        |  说明   |
| ------------ | ------ |
| classnames      | 参见：`classnames -> default`  |
