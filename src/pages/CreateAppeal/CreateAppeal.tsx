import React, {ChangeEvent, useState} from 'react';
import {Input} from "../../Components/Input/Input";
import s from './CreateAppeal.module.scss'
import {Checkbox} from "../../Components/Checkbox/Checkbox";
import {Textarea} from "../../Components/Textarea/Textarea";

export function CreateAppeal() {

    const [checked, setChecked] = useState(false)
    const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(!checked)
    }

    return (
        <form className={s.CreateAppeal}>
            <Input type={'text'} name={'Имя'}/>
            <Input type={'text'} name={'Фамилия'}/>
            <Input type={'text'} name={'Отчество'} disabled={checked}/>
            <Checkbox label={'Нет отчества'} checked={checked} onCheckboxChange={onCheckboxChange}/>
            <Input type={'tel'} name={'Номер телефона'}/>
            <Textarea label={'Текст обращения'}/>
            <button className={s.createAppealBtn} type='submit' onSubmit={()=>{}}>Создать обращение</button>
        </form>
    );
}

