import React, {ChangeEvent} from 'react';
import s from './Checkbox.module.scss'

type checkboxPropsType = {
    label: string,
    checked: boolean,
    onCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export function Checkbox(props: checkboxPropsType) {
    return (
        <label className={s.checkboxWrapper}>
            <input className={s.checkbox} type={'checkbox'}
                   checked={props.checked}
                   onChange={props.onCheckboxChange}
            />
            <span className={s.inputPlaceholder}>{props.label}</span>
        </label>
    );
}

