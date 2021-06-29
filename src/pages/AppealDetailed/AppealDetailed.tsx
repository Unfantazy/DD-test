import React from 'react';
import s from './AppealDetailed.module.scss'
import {AppealItem} from "../../Components/AppealItem/AppealItem";
import {appealPropsType} from "../../Components/Appeal/Appeal";

export function AppealDetailed(props: appealPropsType) {
    return (
        <div className={s.AppealDetailedWrapper}>
            <AppealItem text={props.firstName} type={'Имя'}/>
            <AppealItem text={props.lastName} type={'Фамилия'}/>
            <AppealItem text={props.middleName} type={'Отчество'}/>
            <AppealItem text={props.userPhone} type={'Номер телефона'}/>
            <AppealItem text={props.text} type={'Текст обращения'}/>

            <button className={s.deleteBtn}>Удалить</button>
        </div>
    );
}

