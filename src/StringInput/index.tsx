import { BaseLang, classnames, useEvent } from "@baseflow/react";
import { Input } from "antd";
import type { FC, FocusEventHandler, ReactNode } from "react";
import { memo } from "react";

export interface StringInputProps {
  value?: string;
  onChange?: (value?: string) => void;
  onFocus?: FocusEventHandler<HTMLElement>;
  onBlur?: FocusEventHandler<HTMLElement>;
  placeholder?: string;
  className?: string;
  prefix?: ReactNode;
  addonAfter?: ReactNode;
  allowClear?: boolean;
  block?: boolean;
  size?: "small" | "middle";
  variant?: "filled" | "borderless";
}

const Component: FC<StringInputProps> = ({ value, onChange, onBlur, className, block, placeholder = BaseLang.requiredPrompt, ...others }) => {
  const _onChange = useEvent((e: any) => {
    const newValue = e.target.value.trim();
    if (value !== newValue) {
      onChange?.(newValue);
    }
  });
  return <Input {...others} className={classnames(className, { "ͼbaseflow-sr-inputBlock": block })} placeholder={placeholder} onChange={_onChange} />;
};

export default memo(Component);
