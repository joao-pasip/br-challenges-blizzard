import styles from './Button.module.css';

export default function ButtonComponent({ nameButton, hasFill=false, icon, banner }) {
  return (
    <button className={`${hasFill ? styles.buttonWithFill : styles.buttonWithoutFill} ${banner && styles.buttonBanner}`}>
      { icon }
      { nameButton }
    </button>
  )
}