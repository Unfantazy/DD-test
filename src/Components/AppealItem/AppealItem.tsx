import React from 'react';
import s from './AppealItem.module.scss'

type AppealItemPropsType = {
    text: string,
    type: string
}

export function AppealItem(props: AppealItemPropsType) {
    return (
        <div className={s.itemWrapper}>
            <span className={s.text}>{props.text}</span>
            <span className={s.type}>{props.type}</span>
        </div>
    );
}

