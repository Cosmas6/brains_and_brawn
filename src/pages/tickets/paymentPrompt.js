import styles from "./css/paymentPrompt.module.scss";

export default function PaymentPrompt({ amount, onGoBack }) {
  const handlePayment = () => {
    // Add your payment handling logic here
  };

  return (
    <div className={styles.paymentPrompt}>
      <h2>Payment Instructions</h2>
      <p>
        Click on "Senc Request to Phone" button to generate a payment request on
        your phone. Enter your MPESA PIN on yout phone to complete the payment.
        You will get your receipt from MPESA and an email payment confirmation
        from us
      </p>
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
      <button onClick={handlePayment}>
        <span>Send Request to Phone</span>
      </button>
      <button onClick={onGoBack}>Go Back</button>
    </div>
  );
}
