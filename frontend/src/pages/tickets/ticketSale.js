import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./css/ticketSale.module.scss";

export default function TicketSale({
  ticketName,
  ticketDescription,
  imgSrc,
  date,
  onNextStep,
  earlyBirdQuantity,
  setEarlyBirdQuantity,
  gateQuantity,
  setGateQuantity,
}) {
  const purchaseTickets = () => {
    onNextStep(grandTotal);
  };

  const increment = (setter, quantity) => {
    setter(quantity + 1);
  };

  const decrement = (setter, quantity) => {
    setter(quantity - 1 >= 0 ? quantity - 1 : 0);
  };

  const [formattedDate, setFormattedDate] = useState("");

  const earlyBirdTotal = earlyBirdQuantity * 1000;
  const gateTotal = gateQuantity * 2000;
  const grandTotal = earlyBirdTotal + gateTotal;

  useEffect(() => {
    let newDate = new Date(date);
    let options = { year: "numeric", month: "long", day: "numeric" };
    setFormattedDate(newDate.toLocaleDateString("en-US", options));
  }, [date]);

  return (
    <div className={styles.ticketSaleContainer}>
      <div className={styles.tickets}>
        <div className={`row ${styles.modalContent}`}>
          <div className="col-lg-6">
            <div className={styles.imageContainer}>
              <img src={imgSrc} alt={ticketName} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.date}>
              <h3 className={styles.date}>{formattedDate}</h3>
            </div>

            <div className={styles.text}>
              <h2>{ticketName}</h2>
              <p>{ticketDescription}</p>
            </div>
          </div>
        </div>
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
              <td className={styles.subHeadings}>Early Bird</td>
              <td>1,000 /=</td>
              <td>
                <div className={styles.buttonsContainer}>
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
                </div>
              </td>
              <td className={styles.textRight}>{earlyBirdTotal}</td>
            </tr>
            <tr>
              <td className={styles.subHeadings}>Gate</td>
              <td>2,000 /=</td>
              <td>
                <div className={styles.buttonsContainer}>
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
                </div>
              </td>
              <td className={styles.textRight}>{gateTotal}</td>
            </tr>
            <tr>
              <td className={styles.subHeadings}>Discount</td>
              <td colSpan="2" className={styles.textRight}>
                KES. 0
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td className={styles.subHeadings}>Total</td>
              <td colSpan="2" className={styles.textRight}>
                KES. {grandTotal}{" "}
              </td>
            </tr>
          </tfoot>
        </table>
        <button className={styles.purchaseBtn} onClick={purchaseTickets}>
          <span>Purchase ticket</span>
        </button>
      </div>
    </div>
  );
}
