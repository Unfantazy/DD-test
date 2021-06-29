import React from 'react';
import s from './Modal.module.scss'

type modalPropsType = {
    isShown: boolean
    onChange: () => void
}

export function Modal(props: modalPropsType) {
    return (
        <div className={s.modalWrapper}>
            <div className={s.modalTop}>
                <span>Вы действительно хотите удалить обращение №99?</span>
                <button onClick={()=> props.onChange}>X</button>
            </div>
            <div  className={s.modalBottom}>
                <button style={{background: '#2F80ED', color: '#fff', marginRight: '25px'}}>Да</button>
                <button style={{background: 'rgba(44, 152, 240, 0.12)', color: '#2196F3'}}>Нет</button>
            </div>
        </div>
    );
}

