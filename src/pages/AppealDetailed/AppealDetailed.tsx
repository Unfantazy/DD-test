import React from 'react';
import s from './AppealDetailed.module.scss'
import {AppealItem} from "../../Components/AppealItem/AppealItem";

export function AppealDetailed() {
    return (
        <div className={s.AppealDetailedWrapper}>
            <AppealItem text={'Борис'} type={'Имя'}/>
            <AppealItem text={'Ельцин'} type={'Фамилия'}/>
            <AppealItem text={'Николаевич'} type={'Отчество'}/>
            <AppealItem text={'+7 (943) 324 - 32 - 24'} type={'Номер телефона'}/>
            <AppealItem text={'[Отрывок из книги доктора Роберта Джеймса III о существовании внеземного разума]\n' +
            '\n' +
            'Подумайте: в галактике миллиарды таких же звезд, как наше Солнце, и многие из них гораздо старше. ' +
            'У некоторых из них есть похожие на Землю планеты. На некоторых из этих планет, возможно, ' +
            'возникла разумная жизнь. Некоторые из этих разумных существ, возможно, изобрели межзвездные перелеты.\n' +
            '\n' +
            'Если какая-то цивилизация возникла раньше нашей, то кажется возможным, что даже ' +
            'с предполагаемой скоростью межзвездных перелетов они могли колонизировать всю галактику.\n' +
            '\n' +
            'Однако мы еще не обнаружили ни одной такой цивилизации. И они не установили контакт с нами.\n' +
            '\n' +
            'Почему?'} type={'Текст обращения'}/>


            <button className={s.deleteBtn}>Удалить</button>
        </div>
    );
}
