import React from "react";
import "./checkbox.css";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  componentSize?: "small" | "medium" | "large";
  colorType?: "primary" | "secondary" | "dark" | "light";
  disabled?: boolean;
  label?: string;
}

const Checkbox = ({
  componentSize = "medium",
  colorType = "primary",
  disabled = false,
  label,
  ...rest
}: CheckboxProps) => {
  const classNames = [
    `pearl-checkbox`,
    `pearl-checkbox-${componentSize}`,
    `pearl-checkbox-${colorType}`,
    disabled ? `pearl-checkbox-disabled` : "",
  ]
    .filter((item) => item)
    .join(" ");

  return (
    <label className={classNames}>
      <input type="checkbox" {...rest} disabled={disabled} />
      <span className="pearl-checkbox-checkmark"></span>
      {label && <span className="pearl-checkbox-label">{label}</span>}
    </label>
  );
};

export default Checkbox;
