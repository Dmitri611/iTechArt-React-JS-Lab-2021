import React from 'react'
import styles from './categories.module.scss'
import Item from './item/item.jsx'

export default function Categories() {
  return (
    <div className={styles.categories}>
      <ul className={styles.categories_list}>
        <Item />
      </ul>
    </div>
  )
}
