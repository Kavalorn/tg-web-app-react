import React, { useEffect, useState, useCallback } from 'react'
import styles from './Form.module.sass'
import {useTelegram} from '../../hooks/useTelegram'

export const Form = () => {
    const [country, setCountry] = useState('')
    const [street, setstreet] = useState('')
    const [subject, setSubject] = useState('physical')
    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            country,
            street,
            subject,
        }
        tg.sendData(JSON.stringify(data));
    }, [country, street, subject])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData);
        return () => {
            tg.offEvent('mainButtonClicked', onSendData);
        }
    }, [onSendData])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    })

    useEffect(() => {
        if(!street || !country) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }, [country, street])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangestreet = (e) => {
        setCountry(e.target.value)
    }

    const onChangeSubject = (e) => {
        setCountry(e.target.value)
    }

  return (
    <div>
        <h3>Введите ваши данные</h3>
        <input className={styles.input} type="text" placeholder={"Страна"} value={country} />
        <input className={styles.input} type="text" placeholder={"Улица"} value={street} />
        <select value={subject} onChange={onChangeSubject} className={styles.select}>
            <option value="physical">Юр лицо</option>
            <option value="legal">Физ лицо</option>
        </select>
    </div>
  )
}
