import { Select } from "antd";
import type { CSSProperties, FocusEventHandler, ReactNode } from "react";
import { memo } from "react";
import { BaseLang, classnames } from "../utils";

export interface StringSelectProps<V extends string | string[]> {
  value?: V;
  onChange?: (value?: V) => void;
  multiple?: boolean;
  options: Array<{ value: string; label: string }>;
  onFocus?: FocusEventHandler<HTMLElement>;
  onBlur?: FocusEventHandler<HTMLElement>;
  placeholder?: string;
  className?: string;
  style?: CSSProperties;
  showSearch?: boolean;
  prefix?: ReactNode;
  allowClear?: boolean;
  block?: boolean;
  size?: "small" | "middle";
  variant?: "filled" | "borderless";
}

const Component = <V extends string | string[]>(props: StringSelectProps<V>): ReactNode => {
  const { value, className, block, multiple, placeholder = BaseLang.requiredPrompt, ...others } = props;

  return (
    <Select
      {...others}
      value={value || undefined}
      mode={multiple ? "multiple" : undefined}
      placeholder={placeholder}
      className={classnames(className, { "ͼbaseflow-sr-inputBlock": block })}
    />
  );
};

export default memo(Component) as typeof Component;
