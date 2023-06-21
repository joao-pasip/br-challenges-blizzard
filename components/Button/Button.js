import styles from './Button.module.css';

export default function ButtonComponent({ nameButton, hasFill=false, icon }) {
  return (
    <button className={hasFill ? styles.buttonWithFill : styles.buttonWithoutFill}>
      { icon }
      { nameButton }
    </button>
  )
}