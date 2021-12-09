import React, { ReactNode } from "react";
import "./button.css";

export type ButtonProps = Partial<
  React.ButtonHTMLAttributes<HTMLButtonElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement> & {
      variant?: "contained" | "outlined" | "text";
      componentSize?: "small" | "medium" | "large";
      colorType?: "primary" | "secondary" | "dark" | "light";
      href?: string;
      disableRipple?: boolean;
      fullWidth?: boolean;
      disabled?: boolean;
      startIcon?: ReactNode;
      endIcon?: ReactNode;
      children: ReactNode;
    }
>;

const Button = ({
  variant = "contained",
  componentSize = "medium",
  colorType = "primary",
  disableRipple = false,
  fullWidth = false,
  disabled = false,
  href = "",
  startIcon,
  endIcon,
  children,
  ...rest
}: ButtonProps) => {
  //Ripple effect
  const createRipple = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (disableRipple) return;
    if (disabled) return;
    const button = e.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };

  const classNames = [
    `pearl-button`,
    `pearl-button-${variant}`,
    `pearl-button-${componentSize}`,
    `pearl-button-${colorType}`,
    fullWidth ? `pearl-button-full-width` : "",
    disabled ? `pearl-button-disabled` : "",
  ]
    .filter((item) => item)
    .join(" ");

  const content = (
    <>
      {startIcon}
      {children}
      {endIcon}
    </>
  );

  if (href)
    return (
      <a className={classNames} onClick={(e) => createRipple(e)} href={href} {...rest}>
        {content}
      </a>
    );

  return (
    <button className={classNames} onClick={(e) => createRipple(e)} {...rest}>
      {content}
    </button>
  );
};

export default Button;
