import styles from './Menu.module.css';

export default function Menu({ active }) {
  return (
    <section className={`${styles.menuModalContainer} ${active ? styles.menuModalContainerActive : ''}`}>
      <div>
        <div className={styles.menuModal}>
        
        </div>
      </div>
      <div className={styles.menuModalFooter}>

      </div>
    </section>
  );
}