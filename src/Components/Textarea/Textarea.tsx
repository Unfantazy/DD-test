import React, {ChangeEvent, useState} from 'react';
import s from './Textarea.module.scss'

type textareaPropsType = {
   label: string
}

export function Textarea(props: textareaPropsType) {

    const [value, setValue] = useState('')
    const onTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
            <div className={s.textareaWrapper}>
                <textarea className={s.textarea}
                          value={value}
                          onChange={onTextareaChange}/>
                <span>{props.label}</span>
            </div>
    );
}

