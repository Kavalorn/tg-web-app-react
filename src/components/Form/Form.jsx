import React from 'react'
import styles from './Form.module.sass'
import {useTelegram} from '../../hooks/useTelegram'
import { useEffect } from 'react'

export const Form = () => {
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [subject, setSubject] = useState('physical')
    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            country,
            city,
            subject,
        }
        tg.sendData(JSON.stringify(data));
    }, [country, city, subject])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData);
        return () => {
            tg.offEvent('mainButtonClicked', onSendData);
        }
    }, [onSendData])

    useEffect(() => {
        th.MainButton.setParams({
            text: 'Отправить данные'
        })
    })

    useEffect(() => {
        if(!street || !country) {
            th.MainButton.hide()
        } else {
            th.MainButton.show()
        }
    }, [country, street])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeCity = (e) => {
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
