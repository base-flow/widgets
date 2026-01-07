---
category: Components
title: Produce*
toc: false
order: 3
group:
  title: 工具方法
  order: 2
---

# Produce

*本方法由`@baseflow/react`提供

## 介绍

返回不可变数据，集成自`mutative@1.3.0`，详细说明见`mutative`：

```ts
export { create as produce, original as produceOriginal } from 'mutative';
```

## 示例

```ts

import { produce, produceOriginal } from '@baseflow/react';

const newData =  produce(data, (draft) => {
    draft.name = 'jimmy';
});

```

## APi

| 方法名        |  说明   |
| ------------ | ------ |
| produce      | 参见：`mutative -> create`  |
| produceOriginal | 参见：`mutative -> original`  |
