import { FlowConfigProvider, type IBaseWidgets } from "@baseflow/react";
import { Modal, message } from "antd";

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

export default (props: { children: any }) => {
  return <FlowConfigProvider widgets={widgets}>{props.children}</FlowConfigProvider>;
};
