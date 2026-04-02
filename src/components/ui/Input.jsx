import { useId } from "react";
import styles from "./Input.module.css";

export default function Input({
  label,
  placeholder,
  disabled = false,
  value,
  onChange,
  type = "text",
  error = false,
  helperText,
  ...rest
}) {
  const id = useId();

  return (
    <div className={styles.inputWrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
        className={`${styles.input} ${error ? styles.error : ""} ${
          disabled ? styles.disabled : ""
        }`}
        {...rest}
      />
      {helperText && (
        <span
          className={`${styles.helperText} ${error ? styles.errorText : ""}`}
        >
          {helperText}
        </span>
      )}
    </div>
  );
}
