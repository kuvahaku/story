import { Component, splitProps } from "solid-js";
import "./button.css";

export interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;

  /**
   * Class name to style the button :)
   */
  className: string;
}

export const Button: Component<ButtonProps> = (props) => {
  const [local, rest] = splitProps(props, ["label"]);

  return (
    <button
      {...rest}
      type="button"
      class={local.className}
    >
      {local.label}
    </button>
  );
};
