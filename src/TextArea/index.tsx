import { BaseLang, classnames } from "@baseflow/react";
import { Input } from "antd";
import type { CSSProperties, FC, FocusEventHandler } from "react";
import { memo } from "react";

export interface TextAreaProps {
  value?: string;
  onChange?: (value?: string) => void;
  onFocus?: FocusEventHandler<HTMLElement>;
  onBlur?: FocusEventHandler<HTMLElement>;
  placeholder?: string;
  className?: string;
  style?: CSSProperties;
  prefix?: string;
  allowClear?: boolean;
  block?: boolean;
  size?: "small" | "middle";
  variant?: "filled" | "borderless";
  rows?: number;
  showCount?: boolean;
  maxLength?: number;
}

const Component: FC<TextAreaProps> = ({ onChange, className, block, placeholder = BaseLang.requiredPrompt, ...others }) => {
  return (
    <Input.TextArea
      {...others}
      className={classnames(className, { "ͼbaseflow-sr-inputBlock": block })}
      placeholder={placeholder}
      onChange={(e) => onChange?.(e.target.value.trim())}
    />
  );
};

export default memo(Component);
