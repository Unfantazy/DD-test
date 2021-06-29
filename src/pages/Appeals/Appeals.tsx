import React, {useState} from 'react';
import {Appeal, appealPropsType} from '../../Components/Appeal/Appeal';
import s from './Appeals.module.scss'
import {Modal} from "../../Components/Modal/Modal";

export function Appeals() {

    const appeals: Array<appealPropsType> = [
        {withoutMiddleName: false, middleName: 'middle', firstName: 'first', lastName: 'last', text: 'text', userPhone: '+76798267'},
        {withoutMiddleName: false, middleName: 'middle2', firstName: 'firs2', lastName: 'last2', text: 'text2', userPhone: '+767982622217'},
        {withoutMiddleName: true, middleName: 'middle3', firstName: 'firs3', lastName: 'last3', text: 'text3', userPhone: '+767982622217'},
    ]

    const [isShown, setIsShown] = useState(false)

    const toggleModal = () => {
        setIsShown(!isShown)
    }

    return (
        <div style={{padding: '0 10px'}}>
            <input type="text" placeholder='Имя, фамилия, отчество, номер...' className={s.inputFilter}/>

            <table className="table-light__content" style={{background: 'white'}}>
                <colgroup>
                    <col width='2%'/>
                    <col width='10%'/>
                    <col width='10%'/>
                    <col width='10%'/>
                    <col width='10%'/>
                    <col width='32%'/>
                </colgroup>
                <thead>
                <tr>
                    <th></th>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Отчество</th>
                    <th>Номер</th>
                    <th>Текст обращения</th>
                </tr>
                </thead>
                <tbody>
                {appeals.map(a => {
                   return <Appeal
                        text={a.text}
                        firstName={a.firstName}
                        lastName={a.lastName}
                        userPhone={a.userPhone}
                        middleName={a.middleName}
                        withoutMiddleName={a.withoutMiddleName}
                    />
                })}
                </tbody>
            </table>

            { isShown &&
            <Modal
                isShown={isShown}
                onChange={toggleModal}
            />
            }
        </div>
    );
}

