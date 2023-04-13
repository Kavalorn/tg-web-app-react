import React from 'react'
import styles from './ProductItem.module.sass'
import cn from 'classnames'
import {Button} from '../Button/Button'

export const ProductItem = ({product, className = '', onAdd}) => {
    const onAddHandler = () => {
        onAdd(product);
    }

  return (
    <div className={cn(styles.product, className)}>
        <div className={styles.img} />
        <div className={styles.title}>{product.title}</div>
        <div className={styles.description}>{product.description}</div>
        <div className={styles.price}>
            <span>Стоимость: <b>{product.price}</b></span>
        </div>
        <Button onClick={onAddHandler}>Добавить в корзину</Button>
    </div>
  )
}
