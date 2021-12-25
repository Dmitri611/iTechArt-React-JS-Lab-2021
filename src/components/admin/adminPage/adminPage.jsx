import React from "react";
import Button from "../../header/button/button";
import styles from "./adminPage.module.scss";
import Pillar from "./pillar/pillar";
import { Link } from "react-router-dom";

export default function AdminPage() {
  return (
    <div className={styles.content}>
      <h2 className={styles.content_font}>Admin settings</h2>
      <div className={styles.content_wrapper}>
        <Pillar name="Pizza">
          <Link to="/adminPage/addPizza">
            <Button name="Add pizza" />
          </Link>
          <Link to="/adminPage/removePizza">
            <Button name="Remove pizza" />
          </Link>
          <Link to="/adminPage/editPizza">
            <Button name="Edit pizza" />
          </Link>
        </Pillar>
        <Pillar name="User">
          <Button name="Create user" />
          <Button name="View user" />
          <Button name="Edit user" />
          <Button name="Remove user" />
        </Pillar>
        <Pillar name="Promo code">
          <Button name="Create promo code" />
          <Button name="View promo code" />
          <Button name="Edit promo code" />
          <Button name="Remove promo code" />
        </Pillar>
        <Pillar name="Booking">
          <Button name="View all booking" />
          <Button name="set booking status" />
        </Pillar>
      </div>
      <Link to="/">
        <Button name="На главную" />
      </Link>
    </div>
  );
}
