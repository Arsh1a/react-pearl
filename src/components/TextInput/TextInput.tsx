import React, { ReactNode } from "react";
import "./textinput.css";

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  componentSize?: "small" | "medium" | "large";
  colorType?: "light" | "dark";
  disabled?: boolean;
  width?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children?: ReactNode;
  placeholder: string;
}

const TextInput = ({
  componentSize = "medium",
  colorType = "light",
  disabled = false,
  width = "100%",
  startIcon,
  endIcon,
  children,
  placeholder,
  ...rest
}: TextInputProps) => {
  const classNames = [
    `pearl-textinput`,
    `pearl-textinput-${componentSize}`,
    `pearl-textinput-${colorType}`,
    disabled ? `pearl-textinput-disabled` : "",
  ]
    .filter((item) => item)
    .join(" ");

  return (
    <span className={classNames} style={{ width }}>
      {startIcon && <span className="pearl-textinput-starticon">{startIcon}</span>}
      <input type="text" placeholder={placeholder} disabled={disabled} {...rest} />
      {(children || endIcon) && (
        <span className="pearl-textinput-end-span">
          {endIcon && <span className="pearl-textinput-endicon">{startIcon}</span>}
          {children}
        </span>
      )}
    </span>
  );
};

export default TextInput;
