import React from "react";
import "./switch.css";

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  componentSize?: "small" | "medium" | "large";
  colorType?: "primary" | "secondary" | "dark";
  disabled?: boolean;
}

const Switch = ({
  componentSize = "medium",
  colorType = "primary",
  disabled = false,
  ...rest
}: SwitchProps) => {
  const classNames = [
    `pearl-switch`,
    `pearl-switch-${componentSize}`,
    `pearl-switch-${colorType}`,
    disabled ? `pearl-switch-disabled` : "",
  ]
    .filter((item) => item)
    .join(" ");

  return (
    <label className={classNames}>
      <input type="checkbox" {...rest} disabled={disabled} />
      <span className="pearl-switch-slider"></span>
    </label>
  );
};

export default Switch;
