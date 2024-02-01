import React from 'react'
import { useState } from 'react'
import MyButton from '../../../UI/button/MyButton'
import MyInput from '../../../UI/input/MyInput'
import styles from './CardForm.module.css'

const CardForm = ({setCards, setVidible}) => {
  const cardParams ={
    country: '',
    image: '', 
    capital: '', 
    continent: ''
  }
  const [data, setData] = useState(cardParams)


  const createCard = (e) => {
    e.preventDefault()
    setVidible(false)
    setCards(prev => [...prev,{id: prev.length + 1, ...data}])
    setData(cardParams)
  }


  return (
    <div className={styles.inputs}>
      <MyInput 
        placeholder="Country"
        type="text"
        onChange={(e) => setData({...data, country: e.target.value})}
        value={data.country}
      />
      <MyInput 
        placeholder="Flag"
        type="text"
        onChange={(e) => setData({...data, image: e.target.value})}
        value={data.image}
      />
      <MyInput 
        placeholder="Capital"
        type="text"
        onChange={(e) => setData({...data, capital: e.target.value})}
        value={data.capital}
      />
      <MyInput 
        placeholder="Continent"
        type="text"
        onChange={(e) => setData({...data, continent: e.target.value})}
        value={data.continent}
      />
      <MyButton onClick={createCard}>Create</MyButton>
    </div>
  )
}

export default CardForm