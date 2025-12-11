import type { IBaseWidgets } from "@baseflow/react";
import { FlowConfigProvider } from "@baseflow/react";
import { Modal, message } from "antd";
import { useMemo, useRef } from "react";

export { BaseLang, BaseWidgets, classnames } from "@baseflow/react";

export function useEvent<F extends Function>(fn: F): F {
  const fnRef = useRef<F>(fn);
  // why not write `fnRef.current = fn`?
  // https://github.com/alibaba/hooks/issues/728
  fnRef.current = useMemo<F>(() => fn, [fn]);

  const memoizedFn = useRef<F>(undefined);
  if (!memoizedFn.current) {
    memoizedFn.current = function (this: any, ...args: any) {
      return fnRef.current.apply(this, args);
    } as any;
  }

  return memoizedFn.current!;
}

function confirm(message: string, callback: (ok: boolean) => void, props?: { title?: string; okText?: string; cancelText?: string }): void {
  Modal.confirm({
    title: "提示",
    content: message,
    ...props,
    onOk() {
      callback(true);
    },
    onCancel() {
      callback(false);
    },
  });
}

const widgets: Partial<IBaseWidgets> = {
  message,
  confirm,
};

export function FlowProvider(props: { children: any }) {
  return <FlowConfigProvider widgets={widgets}>{props.children}</FlowConfigProvider>;
}
