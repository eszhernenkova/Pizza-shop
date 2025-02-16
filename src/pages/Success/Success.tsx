import { useNavigate } from "react-router-dom";

import Button from "../../components/Button/Button"

import styles from './Success.module.scss'


function Success() {
    const navigate = useNavigate();


  return (
    <div className={styles.success}>
        <img src="/pizza.png" alt="Изображение пиццы" />
        <div className={styles.text} >Ваш заказ успешно оформлен!</div>
        <Button onClick={()=> navigate('/')} appearence="big">Сделать новый</Button>
    </div>
  )
}

export default Success