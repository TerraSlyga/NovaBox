import styles from "./Button.module.css";

export default function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  children,
  ...rest
}) {
  const buttonClass = `${styles.button} ${styles[`variant-${variant}`]} ${styles[`size-${size}`]} ${
    disabled ? styles.disabled : ""
  }`;

  return (
    <button
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
