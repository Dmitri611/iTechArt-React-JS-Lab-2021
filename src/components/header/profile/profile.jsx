import React from "react";
import FaceIcon from "@mui/icons-material/Face";
import styles from "./profile.module.scss";

export default function Profile() {
  return (
    <div className={styles.content}>
      <FaceIcon className={styles.content_icon} sx={{ fontSize: 28 }} />
      <p className={styles.content_font}>Кабинет</p>
    </div>
  );
}
