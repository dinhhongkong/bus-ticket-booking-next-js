import styles from "./notification.module.css"
export default function Notification({ message, type, onClose }) {
  return (
    <div className={`${styles.notification} ${styles[type]}`}>
      <span>{message}</span>
      <button onClick={onClose} className={styles.closeButton}>&times;</button>
    </div>
  );

}