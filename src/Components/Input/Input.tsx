import React, {ChangeEvent, useState} from 'react';
import s from './Input.module.scss'

type inputPropsType = {
    type: 'text' | 'tel' | 'email',
    name: string,
    disabled?: boolean,
}

export function Input(props: inputPropsType) {

    const [value, setValue] = useState('')
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <label className={s.inputWrapper}>
            <input type={props.type}
                   className={props.disabled ? `${s.input} ${s.disabled}` : s.input}
                   value={props.disabled ? '' : value}
                   onChange={onInputChange}
                   required={!props.disabled}
                   disabled={props.disabled}
            />
            <span className={s.inputPlaceholder}>{props.name}</span>
        </label>
    );
}

