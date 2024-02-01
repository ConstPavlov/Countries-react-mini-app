import React from 'react'
import MyButton from '../../../UI/button/MyButton';
import styles from '../Countries.module.css'

const CarDetail = ({card, del}) => {
  return (
    <div key={card.id} className={styles.item}>
      <div className={styles.image} style={{backgroundImage: `url(${card.image})`}}></div>
      <h1 className={styles.countryName}>{card.country}</h1>
      <div className={styles.info}>
        <h2 className={styles.capital}>capital: {card.capital}</h2>
        <h2 className={styles.continent}>continent: {card.continent}</h2>
      </div>
      <MyButton onClick={del} style={{margin: '8px', alignSelf: 'flex-end', width: '20%', padding: '6px', fontSize: '18px'}}>Trash</MyButton>
  </div>
  )
}

export default CarDetail;