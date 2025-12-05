import { BaseLang, classnames, useEvent } from "@baseflow/react";
import { Input } from "antd";
import type { FC, ReactNode } from "react";
import { memo, useMemo, useState } from "react";

export interface BlurInputProps {
  value?: string;
  onChange?: (value?: string) => void;
  placeholder?: string;
  className?: string;
  prefix?: ReactNode;
  addonAfter?: ReactNode;
  allowClear?: boolean;
  block?: boolean;
  size?: "small" | "middle";
  variant?: "filled" | "borderless";
}

const Component: FC<BlurInputProps> = ({ value, onChange, className, block, placeholder = BaseLang.requiredPrompt, ...others }) => {
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

  return <Input {...others} className={classnames(className, { "ͼbaseflow-sr-inputBlock": block })} value={input} onChange={_onChange} placeholder={placeholder} onBlur={onSubmit} />;
};

export default memo(Component);
