import React from 'react'
import styles from './Button.module.sass'

export const Button = (props) => {
  return (
    <button {...props} className={"button " + styles.button} />
  )
}
