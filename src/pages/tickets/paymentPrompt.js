import styles from "./css/paymentPrompt.module.scss";

export default function PaymentPrompt({ amount, onGoBack }) {
  const handlePayment = () => {
    // Add your payment handling logic here
  };

  return (
    <div className={styles.paymentPrompt}>
      <button className={styles.goBackButton} onClick={onGoBack}>
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
        </svg>
      </button>
      <h2>Payment Instructions</h2>
      <ul className={styles.instructionsList}>
        <li>
          Click on the "Send Request to Phone" button to generate a payment
          request on your phone.
        </li>
        <li>Enter your MPESA PIN on your phone to complete the payment.</li>
        <li>
          You will receive your receipt from MPESA and an email payment
          confirmation from us.
        </li>
      </ul>
      <div className={styles.inputContainer}>
        <input
          className={styles.inputField}
          type="tel"
          placeholder="Phone Number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
        />
        <input
          className={styles.inputField}
          type="email"
          placeholder="Email Address"
          required
        />
      </div>
      <p>Total: {amount}</p>
      <button onClick={handlePayment} className={styles.sendButton}>
        <span>Send Request to Phone</span>
      </button>
    </div>
  );
}
