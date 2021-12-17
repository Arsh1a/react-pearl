import React from "react";
import "./radio.css";

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  componentSize?: "small" | "medium" | "large";
  colorType?: "primary" | "secondary" | "dark" | "light";
  disabled?: boolean;
  label?: string;
}

const Radio = ({
  componentSize = "medium",
  colorType = "primary",
  disabled = false,
  label,
  ...rest
}: RadioProps) => {
  const classNames = [
    `pearl-radio`,
    `pearl-radio-${componentSize}`,
    `pearl-radio-${colorType}`,
    disabled ? `pearl-radio-disabled` : "",
  ]
    .filter((item) => item)
    .join(" ");

  return (
    <label className={classNames}>
      <input type="radio" {...rest} disabled={disabled} name="radio" />
      <span className="pearl-radio-checkmark"></span>
      {label && <span className="pearl-radio-label">{label}</span>}
    </label>
  );
};

export default Radio;
