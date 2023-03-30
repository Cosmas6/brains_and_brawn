import styles from "./css/Modal.module.scss";
import TicketSale from "./ticketSale";

export default function Modal({ closeModal }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={`container ${styles.modal}`}>
        <button className={styles.closeButton} onClick={closeModal}>
          &times;
        </button>
        <div className={`row ${styles.modalContent}`}>
          <div className="col-lg-6">
            <div class={styles.date}>
              <div class={styles.month}>Apr</div>
              <div class={styles.day}>29</div>
            </div>

            <div className={styles.text}>
              <h2>Get Your Tickets</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.ticketSection}>
              <TicketSale />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
