import React from 'react'
import styles from './MyModal.module.css'

const MyModal = ({children ,visible, setVisible}) => {
  const setClasses = [styles.modal]

  if (visible) {
    setClasses.push(styles.active)
  }
  return (
    <div className={setClasses.join(' ')} onClick={() => setVisible(false)} >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <span className={styles.close} onClick={() => setVisible(false)}>x</span>
        {children}
      </div>
    </div>
  )
}

export default MyModal