import React from "react";
import styles from "./search.module.scss";

export default function Search() {
  return (
    <div className={styles.block_search}>
      <form action="/search/" target="_blank" className={styles.form_search}>
        <input
          className={styles.form_search_input}
          type="hidden"
          name="searchid"
          value="808327"
        />
        <input
          className={styles.form_search_input}
          type="search"
          name="text"
          required
          placeholder="Поиск по сайту"
        />
        <input
          className={styles.form_search_input}
          type="submit"
          value="&#128269;"
        />
      </form>
    </div>
  );
}
