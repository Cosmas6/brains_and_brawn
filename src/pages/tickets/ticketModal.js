import React, { useState } from "react";
import styles from "./css/Modal.module.scss";
import TicketSale from "./ticketSale";
import PaymentPrompt from "./paymentPrompt";

export default function Modal({ closeModal, ticketInfo }) {
  const [step, setStep] = useState(1);
  const { title, description, imgSrc } = ticketInfo;
  const [earlyBirdQuantity, setEarlyBirdQuantity] = useState(0);
  const [gateQuantity, setGateQuantity] = useState(0);

  const handleNextStep = (amount) => {
    setStep(2);
  };

  const handlePreviousStep = () => {
    setStep(1);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={`container ${styles.modal}`}>
        <button className={styles.closeButton} onClick={closeModal}>
          &times;
        </button>
        {step === 1 && (
          <TicketSale
            ticketName={title}
            ticketDescription={description}
            imgSrc={imgSrc}
            onNextStep={handleNextStep}
            earlyBirdQuantity={earlyBirdQuantity}
            setEarlyBirdQuantity={setEarlyBirdQuantity}
            gateQuantity={gateQuantity}
            setGateQuantity={setGateQuantity}
          />
        )}
        {step === 2 && <PaymentPrompt onGoBack={handlePreviousStep} />}
      </div>
    </div>
  );
}
