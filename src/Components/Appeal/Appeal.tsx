import React from 'react';
import s from './Appeal.module.scss'
import remove from '../../assets/images/remove.svg'
import { Link } from 'react-router-dom';

export type appealPropsType = {
    firstName: string,
    lastName: string,
    withoutMiddleName: boolean,
    middleName: string,
    userPhone: string,
    text: string,
}

export function Appeal(props: appealPropsType) {
    return (
        <tr>
            <td>
                <button style={{width: '24px', height: '31px', background: 'transparent', padding: '0'}}>
                    <img
                        style={{width: '100%', height: '100%'}}
                        src={remove}
                        alt=''
                    />
                </button>
            </td>
            <td className={s.item}><Link to={'/detailed'}>{props.firstName}</Link></td>
            <td className={s.item}>{props.lastName}</td>
            <td className={s.item}>{ !props.withoutMiddleName && props.middleName}</td>
            <td className={s.item}>{props.userPhone}</td>
            <td className={s.item}>{props.text}</td>
        </tr>
    );
}

