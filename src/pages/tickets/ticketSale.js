import { useState } from "react";
import styles from "./css/TicketSale.module.scss";

export default function TicketSale() {
  const [earlyBirdQuantity, setEarlyBirdQuantity] = useState(0);
  const [gateQuantity, setGateQuantity] = useState(0);

  const increment = (setter, quantity) => {
    setter(quantity + 1);
  };

  const decrement = (setter, quantity) => {
    setter(quantity - 1 >= 0 ? quantity - 1 : 0);
  };

  const earlyBirdTotal = earlyBirdQuantity * 1000;
  const gateTotal = gateQuantity * 2000;
  const grandTotal = earlyBirdTotal + gateTotal;

  return (
    <div className={styles.tickets}>
      <div className={styles.ticketsTitle}>Tickets</div>
      <table className={styles.ticketsTable}>
        <thead>
          <tr>
            <th>Ticket</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Early Bird</td>
            <td>1,000</td>
            <td>
              <button
                className={styles.decreaseButton}
                onClick={() =>
                  decrement(setEarlyBirdQuantity, earlyBirdQuantity)
                }
              >
                <span>-</span>
              </button>
              <input
                className={styles.input}
                type="number"
                min="1"
                max="286"
                value={earlyBirdQuantity}
                readOnly
              />
              <button
                className={styles.increaseButton}
                onClick={() =>
                  increment(setEarlyBirdQuantity, earlyBirdQuantity)
                }
              >
                <span>+</span>
              </button>
            </td>
            <td className={styles.textRight}>{earlyBirdTotal}</td>
          </tr>
          <tr>
            <td>Gate</td>
            <td>2,000</td>
            <td>
              <button
                className={styles.decreaseButton}
                onClick={() => decrement(setGateQuantity, gateQuantity)}
              >
                <span>-</span>
              </button>
              <input
                className={styles.input}
                type="number"
                min="1"
                max="500"
                value={gateQuantity}
                readOnly
              />
              <button
                className={styles.increaseButton}
                onClick={() => increment(setGateQuantity, gateQuantity)}
              >
                <span>+</span>
              </button>
            </td>
            <td className={styles.textRight}>{gateTotal}</td>
          </tr>
          <tr>
            <td>Discount</td>
            <td colspan="2" className={styles.textRight}>
              KES. 0
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td colspan="2" className="text-right">
              KES. {grandTotal}{" "}
            </td>
          </tr>
        </tfoot>
      </table>
      <button className={styles.purchaseBtn}>
        <span>Purchase ticket</span>{" "}
      </button>
    </div>
  );
}
