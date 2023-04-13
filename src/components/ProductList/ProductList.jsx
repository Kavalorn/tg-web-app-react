import React from 'react'
import styles from './ProductList.module.sass'
import {ProductItem} from '../ProductItem/ProductItem'

const products = [
  {id: '1', title: 'Куртка 1', price: 12000, description: 'Зеленого цвета'},
  {id: '2', title: 'Куртка 2', price: 12000, description: 'Зеленого цвета'},
  {id: '3', title: 'Куртка 3', price: 12000, description: 'Черного цвета'},
  {id: '4', title: 'Куртка 4', price: 12000, description: 'Зеленого цвета'},
  {id: '5', title: 'Куртка 5', price: 12000, description: 'Зеленого цвета'},
  {id: '6', title: 'Куртка 6', price: 12000, description: 'Зеленого цвета'},
  {id: '7', title: 'Куртка 7', price: 12000, description: 'Зеленого цвета'},
  {id: '8', title: 'Куртка 8', price: 12000, description: 'Зеленого цвета'},
  {id: '9', title: 'Куртка 9', price: 12000, description: 'Зеленого цвета'},
  {id: '10', title: 'Куртка 10', price: 12000, description: 'Зеленого цвета'},
]

export const ProductList = () => {
  const [addedItems, setAddedItems] = useState(products);
  const {tg} = useTelegram();

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find(item => item.id === product.id);
    let newItems = [];

    if (alreadyAdded) {
      newItems = addedItems.filter(item => item.id !== product.id);
    } else {
      newItems = [...addedItems, product];
    }

    setAddedItems(newItems)

    if(newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Купить ${items.reduce((acc, item) => acc += item.price, 0)}`
      })
    }
  }

  return (
    <div className={styles.list}>
      {products.map(item => (
        <ProductItem
          product={item}
          onAdd={onAdd}
          className={styles.item}
        />
      ))}</div>
  )
}
