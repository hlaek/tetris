import React from "react";
import styles from "./messagePopUp.module.scss";

interface MessagePopUpInterface {
  hidden: boolean;
}

// Displays a message
const MessagePopup: React.FC<MessagePopUpInterface> = ({ hidden }) => {
  return (
    <div className={`${styles.messagePopup} ${hidden && styles.hidden}`}>
      <h1>Message Title</h1>
      <p>Message info...</p>
    </div>
  );
};

export default MessagePopup;
