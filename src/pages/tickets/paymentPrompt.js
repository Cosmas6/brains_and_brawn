import styles from "./css/paymentPrompt.module.scss";

export default function PaymentPrompt({ amount, onGoBack }) {

  const handlePayment = () => {
    // Add your payment handling logic here
  };

  return (
    <div className={styles.paymentPrompt}>
      <h2>Payment Instructions</h2>
      <p>
        Please transfer KES. {amount} to Mpesa service following these
        instructions:
      </p>
      {/* Add your payment instructions here */}
      <button onClick={handlePayment}>Confirm Payment</button>
      <button onClick={onGoBack}>Go Back</button>
    </div>
  );
}
