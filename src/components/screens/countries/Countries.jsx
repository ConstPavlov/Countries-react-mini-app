import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { cards as countriData } from '../../../countri.data';
import CardService from '../../../services/CardService';
import MyButton from '../../UI/button/MyButton';
import MyInput from '../../UI/input/MyInput';
import MyModal from '../../UI/modal/MyModal';
import CarDetail from './car-detail/CarDetail';
import CardForm from './card-form/CardForm';
import styles from './Countries.module.css';

const Countries = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [modal, setModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await CardService.getAll();
      setCards(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const deleteCard = (card) => {
    const smallerCards = cards.filter((c) => c.id !== card.id);
    setCards(smallerCards);
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <MyButton style={{ marginTop: '10px', marginBottom: '20px' }} onClick={() => setModal(true)}>
        Сreate a card
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <h1>Go to create</h1>
        <CardForm setCards={setCards} setVidible={setModal} />
      </MyModal>
      <div className="">
        <h1 className={styles.title}>Countries</h1>
        <div className={styles.inner}>
          {cards.length ? (
            cards.map((card) => (
              <CarDetail del={() => deleteCard(card)} key={card.id} card={card} />
            ))
          ) : (
            <h1 className={styles.noCards}>There are no cards</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Countries;
