import React, {ChangeEvent, useState} from 'react';
import {Input} from "../../Components/Input/Input";
import s from './CreateAppeal.module.scss'
import {Checkbox} from "../../Components/Checkbox/Checkbox";
import {Textarea} from "../../Components/Textarea/Textarea";
import {createAppealTC} from "../Appeals/appeals-reducer";
import {useDispatch} from "react-redux";
import {appealPropsType} from "../../Components/Appeal/Appeal";

export function CreateAppeal() {

    const [checked, setChecked] = useState(false)
    const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(!checked)
    }
    const dispatch = useDispatch()

    const createAppeal = (appeal: appealPropsType) => {
        // dispatch(createAppealTC(appeal))
        alert(appeal)
    }
    const appeal : appealPropsType = {
        firstName: '',
        userPhone: '',
        lastName: '',
        middleName: '',
        text: '',
        orderId: 1,
        withoutMiddleName: false
    }

    return (
        <form className={s.CreateAppeal}>
            <Input type={'text'} name={'Имя'}/>
            <Input type={'text'} name={'Фамилия'}/>
            <Input type={'text'} name={'Отчество'} disabled={checked}/>
            <Checkbox label={'Нет отчества'} checked={checked} onCheckboxChange={onCheckboxChange}/>
            <Input type={'tel'} name={'Номер телефона'}/>
            <Textarea label={'Текст обращения'}/>
            <button className={s.createAppealBtn} type='button' onClick={() => createAppeal(appeal)}>Создать обращение</button>
        </form>
    );
}


