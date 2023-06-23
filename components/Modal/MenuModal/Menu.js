import styles from './Menu.module.css';

export default function Menu({ activeModal }) {
  return (
    <section className={`${styles.menuModalContainer} ${activeModal ? styles.menuModalContainerActive : ''}`}>
      <div>
        <div className={styles.menuModal}>
        
        </div>
      </div>
      <div className={styles.menuModalFooter}>

      </div>
    </section>
  );
}