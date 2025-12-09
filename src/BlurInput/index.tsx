import { BaseLang, classnames, useEvent } from "@baseflow/react";
import { Input } from "antd";
import type { CSSProperties, FC, ReactNode } from "react";
import { memo, useMemo, useState } from "react";

export interface BlurInputProps {
  value?: string;
  onChange?: (value?: string) => void;
  placeholder?: string;
  className?: string;
  style?: CSSProperties;
  prefix?: ReactNode;
  addonAfter?: ReactNode;
  allowClear?: boolean;
  block?: boolean;
  size?: "small" | "middle";
  variant?: "filled" | "borderless";
  rows?: number;
  showCount?: boolean;
  maxLength?: number;
}

const Component: FC<BlurInputProps> = ({ value, onChange, className, block, placeholder = BaseLang.requiredPrompt, rows, prefix, ...others }) => {
  const [input, setInput] = useState(value);

  useMemo(() => {
    setInput(value);
  }, [value]);

  const onSubmit = useEvent((e: any) => {
    const newValue = e.target.value.trim();
    if (value !== newValue) {
      setInput(value);
      onChange?.(newValue);
    }
  });

  const _onChange = useEvent((e: any) => {
    setInput(e.target.value.trim());
  });

  if (rows) {
    return (
      <Input.TextArea
        {...others}
        prefix={prefix ? prefix.toString() : undefined}
        className={classnames(className, { "ͼbaseflow-sr-inputBlock": block })}
        value={input}
        onChange={_onChange}
        placeholder={placeholder}
        onBlur={onSubmit}
        rows={rows}
      />
    );
  }

  return <Input {...others} className={classnames(className, { "ͼbaseflow-sr-inputBlock": block })} prefix={prefix} value={input} onChange={_onChange} placeholder={placeholder} onBlur={onSubmit} />;
};

export default memo(Component);
