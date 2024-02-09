import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(({ targetTime, remainingTime, onReset }, ref) => {
  const dialog = useRef();
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog className="result-modal" ref={dialog} onClose={onReset}>
      <h2>You{userLost? 'lost' : 'won'}</h2>
      <p>
        The target time was <strong>{targetTime} secons.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{formattedRemainingTime} seconds left</strong>{" "}
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default ResultModal;
